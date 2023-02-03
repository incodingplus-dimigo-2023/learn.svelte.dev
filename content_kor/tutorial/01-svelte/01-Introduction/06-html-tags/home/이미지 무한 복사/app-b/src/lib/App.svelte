<script>
	let html = `<img src='/img.gif' style="width:10%;height:10%;">`;
	let str = '';
	let count = 0;
	let setT = setInterval(() => {
		if(count < 100){
			str += html;
			count++;
		} else {
			clearInterval(setT);
		}
	}, 100);
</script>
<div>
	{@html str}
</div>
<style>
	:global(main){
		padding:0 !important;
	}
	div{
		width:100vw;
		height:100vh;
		display: flex;
		flex-wrap: wrap;
	}
</style>