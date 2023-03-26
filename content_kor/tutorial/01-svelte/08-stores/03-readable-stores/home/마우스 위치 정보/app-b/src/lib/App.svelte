<script>
	import MouseInfo from "./MouseInfo.svelte";

	let showMouseInfo = false;
</script>

<button on:click={() => showMouseInfo = !showMouseInfo}>
	{showMouseInfo ? "숨기기" : "보이기"}
</button>

{#if showMouseInfo}
	<MouseInfo/>
{/if}