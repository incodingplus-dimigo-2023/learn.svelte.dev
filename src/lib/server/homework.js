import { get_index, walk, con, extract_frontmatter, json } from './content';
import { transform } from './markdown.js';
import fs from 'fs';

/**
 * @param {string} slug
 * @param {string} home
 * @returns {import('$lib/types').Exercise | undefined}
 */

export function get_homework(slug, home) {
	const index = get_index();

	for (let i = 0; i < index.length; i += 1) {
		const part = index[i];

		/** @type {string[]} */
		const chain = [];

		for (const chapter of part.chapters) {
			for (const exercise of chapter.exercises) {
				if (exercise.slug === slug) {
                    const dir = `${exercise.dir}/home/${home}`
                    chain.push(dir);
					const a = {
						...walk(`${con}/tutorial/common`, {
							exclude: ['node_modules', 'static/tutorial', 'static/svelte-logo-mask.svg']
						}),
						...walk(`${con}/tutorial/${part.slug}/common`)
					};

					for (const dir of chain) {
						Object.assign(a, walk(dir));
					}

					const scope = chapter.meta.scope ?? part.meta.scope;
					const filenames = new Set(
						Object.keys(a)
							.filter(
								(filename) => filename.startsWith(scope.prefix) && a[filename].type === 'file'
							)
							.map((filename) => filename.slice(scope.prefix.length))
					);

                    const text = fs.readFileSync(`${dir}/README.md`, 'utf-8');
                    const { frontmatter, markdown } = extract_frontmatter(text, dir);
                    const { title, path = '/', focus } = frontmatter;
                    let oriTitle = exercise.title;
                    exercise.title = title;
                    exercise.path = path;
                    exercise.focus = focus;
                    exercise.markdown = markdown;
                    exercise.meta = fs.existsSync(`${dir}/meta.json`) ? json(`${dir}/meta.json`) : {};
					return {
						part: {
							slug: part.meta.slug,
							title: part.meta.title,
							index: i
						},
						chapter: {
							slug: chapter.meta.slug,
							title: chapter.meta.title
						},
						scope,
						focus: exercise.focus ?? chapter.meta.focus ?? part.meta.focus,
						title: exercise.title,
						path: exercise.path,
						slug: exercise.slug,
						prev: exercise.prev,
						next: {
                            slug:exercise.slug,
                            title:oriTitle
                        },
						dir: exercise.dir,
						editing_constraints: {
							create: exercise.meta.editing_constraints?.create ?? [],
							remove: exercise.meta.editing_constraints?.remove ?? []
						},
						html: transform(exercise.markdown, {
							codespan: (text) =>
								filenames.size > 1 && filenames.has(text)
									? `<code data-file="${scope.prefix + text}">${text}</code>`
									: `<code>${text}</code>`
						}),
						a,
                        b:{}
					};
				}
			}
		}
	}
}