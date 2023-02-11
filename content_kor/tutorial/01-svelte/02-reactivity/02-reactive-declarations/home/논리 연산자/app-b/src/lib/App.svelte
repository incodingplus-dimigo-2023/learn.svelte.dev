<script>
	let a = true;
	let b = true;


	$: and = a && b
	$: or = a || b

	const convertA = () => {
		a = !a;
	}
	const convertB = () => {
		b = !b;
	}
</script>

<div>
	<div on:click={convertA}>A: {a}</div>
	<div on:click={convertB}>B: {b}</div>
</div>
<div>
	<div>A && B: {and}</div>
	<div>A || B: {or}</div>
</div>

<style>
	div {
		font-size: 80px;
	}
</style>