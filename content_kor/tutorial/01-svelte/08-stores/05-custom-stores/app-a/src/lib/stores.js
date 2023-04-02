import { writable } from 'svelte/store';

const createCount = () => {
	// 나머지 함수를 완성해주세요.
	const { subscribe, set, update } = writable(0);

	return {
		subscribe,
		increment: () => {},
		decrement: () => {},
		reset: () => {}
	};
}

export const count = createCount();
