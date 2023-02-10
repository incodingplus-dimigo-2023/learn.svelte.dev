<script>
	let number = 0;
	let multiplicationTable = "";

	$: {
		if(number != 0) {
			let arr = [];

			for(let i=1; i<10; i++) 
				arr.push(`<div>${number} * ${i} = ${number * (i)}</div>`);

			multiplicationTable = arr.join("");
		}
	}

	const setNumber = (num) => {
		number = num
	}
</script>

<div>
	<button on:click={() => setNumber(3)}>3단</button>
	<button on:click={() => setNumber(6)}>6단</button>
	<button on:click={() => setNumber(9)}>9단</button>
</div>
<div>{@html multiplicationTable}</div>