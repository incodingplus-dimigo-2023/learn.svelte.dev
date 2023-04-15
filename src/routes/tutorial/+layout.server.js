import { Octokit } from "octokit";
import { repoInfo } from '$lib/utils';
/**
 * 
 * @returns {Promise<{users:string[]}>}
 */
export async function load() {
	const octokit = new Octokit({
		auth:import.meta.env.VITE_GITHUB ?? process.env.VITE_GITHUB
	});
	
	const branches = await octokit.rest.repos.listBranches(repoInfo);
	
	const users = branches.data.filter(v => /^[가-힣]+$/.test(v.name)).map(v => v.name)
    return {
		users
	};
}