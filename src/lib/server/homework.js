import { walk, con, extract_frontmatter, json } from './content';
import { transform } from './markdown.js';
import glob from 'tiny-glob/sync.js';
import fs from 'fs';

/**
 * @param {string} slug
 * @param {string} home
 * @returns {import('$lib/types').Exercise | undefined}
 */

export function get_homework(slug, home) {
	const exercises = glob(`[0-9][0-9]-*/[0-9][0-9]-*/[0-9][0-9]-${slug}/home/${home}`, {
		cwd: `${con}/tutorial`
	});
	/** @type {string[]} */
	for(let i of exercises){
		const [part_dir, chapter_dir, exercise_dir] = i.split('/');
		const dir = `${con}/tutorial/${i}`;
		const a = {
			...walk(`${con}/tutorial/common`, {
				exclude: ['node_modules', 'static/tutorial', 'static/svelte-logo-mask.svg']
			}),
			...walk(`${con}/tutorial/${part_dir}/common`),
			...walk(`${dir}/app-a`)
		};

		const b = walk(`${dir}/app-b`);
		const solution = { ...a };
		for (const stub of Object.values(b)) {
			solution[stub.name] = stub;
		}
		const part_meta = json(`${con}/tutorial/${part_dir}/meta.json`);
		const chapter_meta = json(`${con}/tutorial/${part_dir}/${chapter_dir}/meta.json`);
		const scope = chapter_meta.scope ?? part_meta.scope;
		const filenames = new Set(
			Object.keys(a)
				.filter(
					(filename) => filename.startsWith(scope.prefix) && a[filename].type === 'file'
				)
				.map((filename) => filename.slice(scope.prefix.length))
		);

		const text = fs.readFileSync(`${dir}/README.md`, 'utf-8');
		const exerText = fs.readFileSync(`${con}/tutorial/${part_dir}/${chapter_dir}/${exercise_dir}/README.md`, 'utf-8');
		const { frontmatter, markdown } = extract_frontmatter(text, dir);
		const { frontmatter:frontmatter2 } = extract_frontmatter(exerText, `${con}/tutorial/${part_dir}/${chapter_dir}/${exercise_dir}`);
		const { title, path = '/', focus } = frontmatter;
		const { title:exerTitle } = frontmatter2;
		return {
			part: {
				slug: part_meta.slug,
				title: part_meta.title,
			},
			chapter: {
				slug: chapter_meta.slug,
				title: chapter_meta.title
			},
			scope,
			focus: focus ?? chapter_meta.focus ?? part_meta.focus,
			title,
			path,
			slug,
			prev:{
				slug
			},
			next: {
				slug,
				title:exerTitle
			},
			dir,
			has_solution:true,
			editing_constraints: {
				create: new Set(),
				remove: new Set()
			},
			html: transform(markdown, {
				codespan: (text) =>
					filenames.size > 1 && filenames.has(text)
						? `<code data-file="${scope.prefix + text}">${text}</code>`
						: `<code>${text}</code>`
			}),
			a,
			b:solution
		};
	}
}