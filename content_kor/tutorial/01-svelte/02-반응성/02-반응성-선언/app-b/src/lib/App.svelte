<script>
	let count = 0;
	$: double = count * 2;

	const increment = () => {
		count += 1;
	}
</script>

<button on:click={increment}>
	{count}번 클릭
</button>

<p>{count} 의 두 배는 {double} 입니다.</p>
