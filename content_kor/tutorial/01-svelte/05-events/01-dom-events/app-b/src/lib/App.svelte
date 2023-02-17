<script>
	let m = { x: 0, y: 0 };
	let s = { x: 0, y: 0 };

	function handleMousemove(event) {
		m.x = event.clientX;
		m.y = event.clientY;
	}
</script>

<div on:mousemove={handleMousemove}>
	마우스 위치 : ({m.x}, {m.y})
</div>

<div on:mousemove={e => s = {x : e.clientX, y:e.clientY}}>
	마우스 위치 : ({s.x}, {s.y})
</div>

<style>
	div {
		width: 100%;
		height: 100%;
	}
</style>
