---
title: 컴포넌트 이벤트
---

컴포넌트에서도 이벤트를 등록할 수 있습니다. 이때는 `createEventDispatcher`라는 것을 사용합니다.



```svelte
/// file: Inner.svelte
<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	const sayHello = () => {
		dispatch('message', {
			text: 'Hello!'
		});
	}
</script>
```

> `createEventDispatcher`는 컴포넌트가 처음 만들어질 때만 호출 가능합니다. 예를 들어 `setTimeout` 안에서 `createEventDispatcher`를 사용하는 것은 불가능합니다.

`Inner.svelte`를 `import`한 `App.svelte`는 `on:message`로 _dispatch_ 한 메시지를 받습니다. `on:message`라는 이벤트가 있는 것이 아니라 _dispatch_ 를 할 때 `'message'`로 설정했기 때문에 그렇게 받는 것입니다.

> 당연하게도 이벤트의 이름은 바꿀 수 있습니다. 만약 `dispatch('message')`를 `dispatch('myevent')`로 호출한다면 `Inner.svelte`를 `import`해서 `on:message`를 쓰는 대신에 `on:myevent`를 써야합니다.
