---
title: 커스텀 스토어
---

커스텀 스토어를 만드려면 `subscribe`, `set` 메서드를 올바르게 구현하면 됩니다. 나머지는 어떠한 메서드가 있어도 상관 없습니다. 만약 `$count` 같은 값을 받기만 할 거면 `subscribe`을 노출시키면 되고, `$count` 에 할당을 하려면 `set`을 노출시키면 됩니다.

예를 들어 아래의 예제는 `subscribe`만 노출시켜 `$count`에는 할당할 수는 없지만 값을 받아올 수는 있습니다. 나머지는 실제로 카운팅하는 데 쓰이는 함수를 만들어서 할당했습니다.



```js
/// file: store.js
const createCount = () => {
	const { subscribe, set, update } = writable(0);

	return {
		subscribe,
		increment: () => update((n) => n + 1),
		decrement: () => update((n) => n - 1),
		reset: () => set(0)
	};
}
```
