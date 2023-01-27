<script>
	let count = 0;
	let ten = 0;

	// ten과 count의 관계 작성
	const handleClick = () => {
		count += 1;
	}
</script>

<button on:click={handleClick}>
	{ten}{count}
</button>

<style>
	button{
		width:100px;
		text-align: center;
		font-family: 'DS-DIGI';
		font-size:50px;
		font-weight: bold;
	}
</style>