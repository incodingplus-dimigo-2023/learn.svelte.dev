import { readable } from 'svelte/store';

export const time = readable(null, set => {
	// 여기에 시간 바뀌는 코드 작성

	return () => {
		// 여기에 구독 취소 코드 작성
	};
});
