---
title: else if 블럭
---

`if` 블럭은 `else if` 도 중간에 쓰일 수 있습니다.

```svelte
/// file: App.svelte
{#if x > 0}
	<p>{x}는 양수입니다.</p>
{:+++else if+++ x < 0}
	<p>{x}는 음수입니다.</p>
{:else}
	<p>{x}는 정확하게 0 입니다.</p>
{/if}
```
