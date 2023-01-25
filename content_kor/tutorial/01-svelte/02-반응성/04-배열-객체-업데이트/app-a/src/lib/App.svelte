<script>
	let numbers = [1, 2, 3, 4];

	const addNumber = () => {
		numbers.push(numbers.length + 1);
	}

	$: sum = numbers.reduce((t, n) => t + n, 0);
</script>

<p>{numbers.join(' + ')} = {sum}</p>

<button on:click={addNumber}>
	숫자 추가하기
</button>
