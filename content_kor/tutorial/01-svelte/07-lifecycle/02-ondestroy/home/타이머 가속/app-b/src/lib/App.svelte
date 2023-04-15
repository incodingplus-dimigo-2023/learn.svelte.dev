<script>
	import { onMount } from "svelte";
	import Time from './Time.svelte'
	let count = 0;
	let arr = [];
	let time = 0;
	let tickTime = () => {
		time += 1;
	};
	onMount(() => {
		// 코드 작성
	})
</script>
<h1>{time}</h1>
<button on:click={() => arr = [...arr, count++]}>가속 추가하기</button>

{#each arr as id}
	<Time on:click={() => {
		// 코드 작성
	}} on:time={tickTime} />
{/each}