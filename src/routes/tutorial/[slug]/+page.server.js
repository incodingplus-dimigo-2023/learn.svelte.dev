import { get_exercise } from '$lib/server/content';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export function load({ params }) {
	const exercise = get_exercise(params.slug);
	// console.log(exercise)
	if (!exercise) {
		throw error(404, 'No such tutorial found');
	}

	return {
		exercise
	};
}
