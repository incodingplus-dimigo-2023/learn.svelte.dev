<script>
	import Timer from './Timer.svelte';

	let open = false;
	let seconds = 0;
	const toggle = () => (open = !open);
	const handleTick = () => {
		seconds += 1
	};
</script>

<div>
	<button on:click={toggle}
		>타이머 {open ? '닫기' : '열기'}</button
	>
	<p>
		타이머가 {seconds}초 동안 작동 중입니다.
	</p>
	{#if open}
		<Timer callback={handleTick} />
	{/if}
</div>
