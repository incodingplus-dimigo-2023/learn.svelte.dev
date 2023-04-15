---
title: onMount 함수
---

모든 컴포넌트는 _생명주기_ 가 있습니다. 생명주기는 각각



- DOM 생성 : `onMount`
- 업데이트 전 : `beforeUpdate`
- 업데이트 후 : `afterUpdate`
- DOM 삭제 : `onDestroy`
- 업데이트 한 틱 : `tick`



이렇게 구성되어 있습니다.

그 중에서 이번에는 `onMount`에 대해서 배워볼 것입니다. `onMount`는 DOM이 생성되고 난 직후의 상황을 말합니다. `onMount`에는 함수를 쓸 수 있으며, 그 함수는 DOM이 다 생성되고 난 뒤에 호출됩니다.

아래는 `fetch` 라는 함수를 이용해서 다른 서버에 있는 데이터에 요청을 보내는 코드입니다.



```svelte
/// file: App.svelte
<script>
	import { onMount } from 'svelte';

	let photos = [];

	onMount(async () => {
		const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=20`);
		photos = await res.json();
	});
</script>
```



> 위의 코드는 예시를 위해 만든 코드입니다. `fetch`의 경우 `onMount`에 쓰는 것보다 `<script>` 태그에 직접 쓰는 것이 좋습니다. 그 이유는 **Server-Side Rendering (SSR)** 때문인데, 이는 서버에서 미리 코드를 실행해서 어느정도의 결과를 클라이언트에 보내는 것을 의미합니다. 하지만 `onDestroy`를 제외하고 다른 생명주기 함수들은 (`onMount`, `beforeUpdate`, `afterUpdate`, `tick`)은 SSR에 실행되지 않습니다. 때문에 `fetch`를 미리 SSR에서 요청하는 이득을 얻을 수 없습니다. 따라서 `fetch` 등과 같은 데이터 요청의 경우 `<script>` 에 써주세요.



`onMount` 등과 같은 생명주기 함수는 컴포넌트가 만들어질 때 정의되어야합니다. 예를 들어 `setTimeout` 안에는 쓸 수 없습니다.

또한 `onMount`의 `return`은 함수 타입입니다. 이 함수는 DOM이 삭제될 때 실행되는 함수입니다. 뒤에 배울 `onDestroy`와 같은 역할입니다.
