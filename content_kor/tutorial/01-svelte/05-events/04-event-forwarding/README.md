---
title: 이벤트 포워딩
---

컴포넌트 이벤트는 DOM 이벤트와 다르게 _버블링_ 이 되지 않습니다. 만약 _버블링_ 과 같이 이벤트가 부모 컴포넌트로 전달되게 하고 싶다면 _포워딩_ 이라는 것을 해야합니다.

이 경우 `App.svelte`와 `Inner.svelte` 는 [이전 단원](/tutorial/component-events)과 같습니다 (`App.svelte`에 `Outer.svelte`가 있는 것을 제외하면). 하지만 여기에 `Outer.svelte` 컴포넌트를 추가해 거기에 `<Inner/>`를 넣었습니다.

`Inner.svelte`의 이벤트를 `Outer.svelte`를 통해 `App.svelte`로 전달하는 방법은 `Outer.svelte`에도 `createEventDispatcher`를 추가하는 것입니다. 그리고 거기서 `message` 이벤트와 `random` 이벤트를 그대로 보내는 것입니다.



```svelte
<script>
	import Inner from './Inner.svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	/* event.type에는 'message', 'random'과 같은 이벤트 이름이 있습니다 */
	const forward = (event) => {
		dispatch(event.type, event.detail);
	}
</script>

<Inner on:message={forward} on:random={forward}/>
```



하지만 이렇게 코드를 작성하면 너무 복잡합니다. 따라서 위와 같은 코드를 줄여서 다음과 같이 쓸 수 있습니다.



```svelte
<script>
	import Inner from './Inner.svelte';
</script>

<Inner +++on:message on:random+++/>
```
