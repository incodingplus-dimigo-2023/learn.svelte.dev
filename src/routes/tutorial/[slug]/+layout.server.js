import { get_index } from '$lib/server/content';
/**
 * 
 * @returns {{index:import('$lib/types').PartStub[];}}
 */
export function load() {
	return {
		index: get_index()
	};
}
