---
title: Select 태그 (multiple)
---

`<select>` 태그에는 `multiple` 속성이 있어서 다수의 값을 선택할 수 있습니다.

비슷한 예제는 [아이스크림 맛 고르기](/tutorial/group-inputs) 입니다. `<input type="checkbox">`와 비슷하게 `<select multiple>` 에 배열을 할당합니다.

```svelte
/// file: App.svelte
<h2>아이스크림</h2>

<select bind:value={picks} multiple>
	{#each menu as ice}
		<option value={ice}>{ice}</option>
	{/each}
</select>
```

> <kbd>Ctrl</kbd>키를 누르고 클릭하면 됩니다. (Mac Os의 경우 <kbd>Command</kbd>)