<script>
	import Thing from './Thing.svelte';

	let things = [
		{ id: 1, name: '사과' },
		{ id: 2, name: '바나나' },
		{ id: 3, name: '당근' },
		{ id: 4, name: '도넛' },
		{ id: 5, name: '달걀' }
	];

	function handleClick() {
		things = things.slice(1);
	}
</script>

<button on:click={handleClick}>
	첫번째 값 지우기
</button>

{#each things as thing}
	<Thing name={thing.name} />
{/each}
