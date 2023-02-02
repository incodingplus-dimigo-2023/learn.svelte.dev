<script>
	let x = 5;
</script>

<button on:click={() => x++}>증가</button>
<button on:click={() => x--}>감소</button>

{#if x > 0}
	<p>{x}는 양수입니다.</p>
{:else}
	{#if x < 0}
		<p>{x}는 음수입니다.</p>
	{:else}
		<p>{x}는 정확하게 0 입니다.</p>
	{/if}
{/if}