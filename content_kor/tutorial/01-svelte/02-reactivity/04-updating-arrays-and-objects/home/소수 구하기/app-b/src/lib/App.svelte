<script>
	let arr = []
	const MAX = 100

	const generate = () => {
		arr = []

		let i = 1;
		const interval = setInterval(() => {
			arr = [...arr, i++]
			if(i > MAX) {
				clearInterval(interval)
				return
			}
		}, 100)
	}

	const calculate = () => {
		arr = [...arr.slice(1)]

		let i = 2;
		const interval = setInterval(() => {
			const index = arr.findIndex(num => (num !== i) && (num % i === 0))
			if(index === -1) {
				i++;
				if(i > MAX) clearInterval(interval)
				return
			}
			arr = [...arr.slice(0, index), ...arr.slice(index + 1)]
		}, 100)
	}

</script>

<button on:click={generate}>생성</button>
<button on:click={calculate}>계산</button>

<div class="container">
	{@html arr.map(n => `<div>${n}</div>`).join("")}
</div>

<style>
	.container {
		display: flex;
		flex-wrap: wrap;
		width: 100%;
	}

	:global(div) {
		width: 5vw;
		height: 5vw;
	}

</style>
