---
title: each 블럭
---

만약 DOM에 반복문을 쓰고 싶다면 `each` 블럭을 사용하면 됩니다.

```svelte
/// file: App.svelte
<ul>
	{#each osts as ost}
		<li>
			{ost.name}<br>
			<audio src="/{ost.id}.mp3" controls></audio>
		</li>
	{/each}
</ul>
```

> Array-like인 객체(`osts`)는 `length` 속성이 있는 객체입니다. 이러한 객체들은 `each [...iterable]`로 반복 가능합니다.

여기서 순서를 얻을 수도 있습니다.

```svelte
/// file: App.svelte
<ul>
	{#each osts as ost,i}
		<li>
			{i + 1}. {ost.name}<br>
			<audio src="/{ost.id}.mp3" controls></audio>
		</li>
	{/each}
</ul>
```

만약 조금 더 보기 편하게 한다면 구조 분해 할당(`each osts as { id, name }`)으로 할당 가능합니다.

```svelte
/// file: App.svelte
<ul>
	{#each osts as { id, name }, i}
		<li>
			{i + 1}. {name}<br>
			<audio src="/{id}.mp3" controls></audio>
		</li>
	{/each}
</ul>
```
