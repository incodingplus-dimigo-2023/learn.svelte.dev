<script>
	let count = 0;
	let ten = 0;

	$:if(count >= 10){
		count = 0;
		ten += 1;
		if(ten >= 10){
			ten = 0;
		}
	}

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