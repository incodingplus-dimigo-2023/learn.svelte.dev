import { get_homework } from '$lib/server/homework';
import { error } from '@sveltejs/kit';
export const prerender = 'auto';
/** @type {import('./$types').PageServerLoad} */
export function load({ params }) {
	const exercise = get_homework(params.slug, params.home);
	if (!exercise) {
		throw error(404, 'No such tutorial found');
	}

	return {
		exercise
	};
}