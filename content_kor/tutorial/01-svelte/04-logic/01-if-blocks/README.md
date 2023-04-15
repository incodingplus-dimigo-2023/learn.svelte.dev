---
title: if 블럭
---

HTML에는 `if`나 `for` 같은 논리 구조를 표현할 방법이 없습니다. 하지만 Svelte에서는 이러한 것들이 가능합니다. 

아래는 `if` 블럭을 사용해서 어떠한 블럭을 보였다가, 안보였다가를 만드는 방법입니다.

```svelte
/// file: App.svelte
+++{#if user.loggedIn}+++
	<button on:click={toggle}>
		로그 아웃
	</button>
+++{/if}+++

+++{#if !user.loggedIn}+++
	<button on:click={toggle}>
		로그인
	</button>
+++{/if}+++
```

Svelte에서 태그를 쓰는 곳에 논리 블럭을 작성하려면 `{#<키워드> <코드>}`로 시작해서 `{/키워드}`로 끝나도록 해야합니다.
