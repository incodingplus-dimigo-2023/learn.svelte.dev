---
title: 자동 구독
---

이전 예제는 작은 버그가 있습니다. (하지만 굉장히 중요한 버그입니다.) 스토어가 구독이 되고 나서 구독 취소가 되지 않는다는 것입니다. `subscribe` 메서드는 그 뒤에 컴포넌트가 삭제돼도 계속 실행될 것이며, 이렇게 된다면 메모리 누수가 발생할 것입니다.

따라서 `subscribe` 메서드는 `unsubscribe` 를 하는 함수를 반환합니다. 아래는 이전의 `App.svelte`의 수정본입니다.



```js
const unsubscribe = count.subscribe((value) => {
	count_value = value;
});
```



> 명심하세요. `subscribe` 메서드를 호출하면 `unsubscribe` 함수가 반환됩니다.



이제 `unsubscribe`을 선언했지만 이 함수는 언제 호출 해야할까요? 보통은 컴포넌트가 삭제되는, 예를 들어 [onDestroy 함수](/tutorial/ondestroy)를 통해 호출해야 합니다:



```svelte
<script>
	import { onDestroy } from 'svelte';
	import { count } from './stores.js';
	import Incrementer from './Incrementer.svelte';
	import Decrementer from './Decrementer.svelte';
	import Resetter from './Resetter.svelte';

	let count_value;

	const unsubscribe = count.subscribe(value => {
		count_value = value;
	});

	onDestroy(unsubscribe);
</script>

<h1>The count is {count_value}</h1>
```



그런데 조금 반복되는 코드가 있어보입니다. 특히 컴포넌트가 여러 스토어들을 구독할 때는 더 심하게 반복됩니다. 때문에 Svelte에서는 이러한 코드를 간단하게 써주는 방법이 있습니다. 바로 Store에 `$`를 붙이는 것입니다.



```svelte
<script>
	import { count } from './stores.js';
	import Incrementer from './Incrementer.svelte';
	import Decrementer from './Decrementer.svelte';
	import Resetter from './Resetter.svelte';
</script>

<h1>The count is {$count}</h1>
```



> 자동 구독은 컴포넌트의 컴포넌트 생성 당시에 가져온 스토어만 사용할 수 있는 기능입니다.



`$count`는 어디에서나 마치 변수처럼 사용할 수 있습니다. `set` 또는 `update` 대신 할당하면 되며, `subscribe` 대신 값으로 쓰면 됩니다.



> 대신 Svelte에서는 `$`로 시작하는 모든 이름은 스토어 값으로 간주됩니다. 실질적으로 예약된 문자이기 때문에 변수 앞에 `$`를 쓰면 안됩니다.