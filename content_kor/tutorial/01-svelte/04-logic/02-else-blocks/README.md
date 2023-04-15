---
title: else 블럭
---

`if`가 있다면 `else`도 있어야겠죠? `else`의 경우 단독으로 쓰일 수는 없기 때문에 `if` 블럭과 함께 쓰입니다.

중간에 쓰이는 것이므로 이 블럭만 `{:else}` 이렇게 시작합니다.

```svelte
/// file: App.svelte
{#if user.loggedIn}
	<button on:click={toggle}>
		로그 아웃
	</button>
+++{:else}+++
	<button on:click={toggle}>
		로그인
	</button>
{/if}
```

> 정리해보면 다음과 같습니다.
>
> `#` : 논리 블럭 시작
>
> `/` : 논리 블럭 끝
>
> `:` : 논리 블럭 중간
