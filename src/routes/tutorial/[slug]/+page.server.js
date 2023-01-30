import { get_exercise } from '$lib/server/content';
import { get_homework } from '$lib/server/homework';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export function load({ params, url }) {
	let homeUrl = url.searchParams.get('home');

	/**@type {import('$lib/types').Exercise | undefined} */
	let exercise;
	let isHome = false;
	if(homeUrl){
		isHome = true;
		exercise = get_homework(params.slug, homeUrl);
	} else {
		exercise = get_exercise(params.slug);
	}
	if (!exercise) {
		throw error(404, 'No such tutorial found');
	}

	return {
		exercise,
		isHome
	};
}
