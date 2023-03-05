<script>
	const menus = [{
		name: "패티",
		price: 2000,
	}, {
		name: "치즈",
		price: 300,
	}, {
		name: "베이컨",
		price: 600,
	}, {
		name: "통새우",
		price: 300,
	}, {
		name: "할라피뇨",
		price: 400,
	}, {
		name: "야채",
		price: 400,
	}]

	let selected = []

	let totalPrice = 0
	$: totalPrice = menus.filter(menu => selected.includes(menu.name)).reduce((acc, order) => acc += order.price, 0)
</script>

<select multiple bind:value={selected}>
	{#each menus as menu}
		<option value={menu.name}>{menu.name}</option>
	{/each}
</select>
<div>총 : {totalPrice}원</div>
