import { get_index } from '$lib/server/content';
import { Octokit } from "octokit";
import { repoInfo } from '$lib/utils';

/**
 * 
 * @returns {Promise<{index:import('$lib/types').PartStub[];users:string[]}>}
 */
export async function load() {
	const octokit = new Octokit({
		auth:import.meta.env.VITE_GITHUB ?? process.env.VITE_GITHUB
	});
	
	const branches = await octokit.rest.repos.listBranches(repoInfo);
	
	const users = branches.data.filter(v => /^[가-힣]+$/.test(v.name)).map(v => v.name)
	return {
		index: get_index().map((part) => ({
			/** @type {string} */
			title: part.meta.title,
			/** @type {string} */
			slug: part.meta.slug,
			chapters: part.chapters.map((chapter) => ({
				/** @type {string} */
				title: chapter.meta.title,
				/** @type {string} */
				slug: chapter.meta.slug,
				exercises: chapter.exercises.map((exercise) => ({
					/** @type {string} */
					title: exercise.title,
					/** @type {string} */
					slug: exercise.slug,
					next:exercise.next,
					prev:exercise.prev
				}))
			}))
		})),
		users
	};
}
