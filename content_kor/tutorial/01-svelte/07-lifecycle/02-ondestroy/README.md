---
title: onDestroy 함수
---

`onDestroy`는 DOM이 삭제될 때 실행되는 생명주기 함수입니다. `onDestroy`는 보통 예약된 함수를 제거할 때 많이 사용합니다. 아래는 `setInterval` 함수가 DOM이 끝난 이후에도 실행되지 않도록 하는 코드입니다.



```svelte
/// file: Timer.svelte
<script>
	import { onDestroy } from 'svelte';

	let counter = 0;
	const interval = setInterval(() => counter += 1, 1000);

	onDestroy(() => clearInterval(interval));
</script>
```



생명주기 함수는 앞에서도 말했듯이 컴포넌트가 만들어질 때 정의되어야합니다. 하지만 그 함수가 어디에 있는 지는 별로 상관없습니다. 예를 들어 다른 `.js` 파일에 있고, 그 함수를 `import` 해도 됩니다. 아래는 `utils.js` 라는 파일을 만들어 거기에 `setInterval`의 시작과 끝을 한꺼번에 ㅇ



```js
/// file: utils.js
import { onDestroy } from 'svelte';

export function onInterval(callback, milliseconds) {
	const interval = setInterval(callback, milliseconds);

	onDestroy(() => {
		clearInterval(interval);
	});
}
```



그리고 위의 `utils.js` 파일을 `import` 해보겠습니다.



```svelte
/// file: Timer.svelte
<script>
	import { onInterval } from './utils.js';

	let counter = 0;
	onInterval(() => counter += 1, 1000);
</script>
```



만약 위의 코드를 쓰지 않고 그냥 `setInterval`을 컴포넌트가 만들어질 때마다 예약하고, 컴포넌트가 삭제된 뒤에 지우지 않는다면 CPU가 너무 많은 일을 하게 됩니다. (그것도 쓸 데 없는 일을 말이죠...) 때문에 예약하는 함수들 (`setInterval`, `requestAnimationFrame`) 등을 꼭 등록하고 나면 잘 지워줘야지 효율적인 프로그램을 (또는 사이트를) 만들 수 있습니다.
