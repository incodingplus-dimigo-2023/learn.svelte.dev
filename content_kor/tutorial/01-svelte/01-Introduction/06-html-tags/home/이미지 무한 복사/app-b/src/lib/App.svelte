<script>
	let html = `<img src='/img.gif'>`;
	let str = '';
	let count = 0;
	let setT = setInterval(() => {
		if(count < 25){
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
<style global>
	body{
		overflow: hidden;
	}
	div{
		display: flex;
		flex-wrap: wrap;
	}
	div > img{
		width:10%;
		height: 10%;
	}
</style>