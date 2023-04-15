import { get_exercise } from '$lib/server/content';
import { get_homework } from '$lib/server/homework';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export function load({ params }) {
	/**@type {import('$lib/types').Exercise | undefined} */
	let exercise;
	let slugs = params.slug.split('~');
	let isHome = false;
	if(slugs[1]){
		isHome = true;
		
		exercise = get_homework(slugs[0], slugs[1]);
	} else {
		exercise = get_exercise(slugs[0]);
	}
	if (!exercise) {
		throw error(404, 'No such tutorial found');
	}

	return {
		exercise,
		isHome,
	};
}
