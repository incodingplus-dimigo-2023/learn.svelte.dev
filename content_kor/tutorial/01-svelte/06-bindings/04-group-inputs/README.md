---
title: Input 태그 (라디오 버튼)
---

만약 라디오 버튼을 `bind` 하고 싶으면 `bind:group`을 사용해야 합니다. `bind:group`에는 `value` 값이 바인딩됩니다.



```svelte
<input type=radio bind:group={scoops} name="scoops" value={1}>
```



이 경우 배열과 함께 `each` 블럭을 사용하면 됩니다.



```svelte
<script>
	let menu = [
		'엄마는 외계인',
		'슈팅스타', 
		'쿠키 앤 크림'
	];
	let picks = []
</script>
<h2>아이스크림</h2>

{#each menu as ice}
	<label>
		<input type=checkbox bind:group={picks} name="picks" value={ice}>
		{ice}
	</label>
{/each}
```



위의 코드에서는 `checkbox` 중에서 체크한 `value` 값들이 `picks` 배열에 추가되고, 체크 해제한 `value` 값들은 배열에서 삭제됩니다.