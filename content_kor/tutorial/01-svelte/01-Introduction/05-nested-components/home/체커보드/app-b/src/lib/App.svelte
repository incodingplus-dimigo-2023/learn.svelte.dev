<script>
	import Black from "./Black.svelte";
	import White from "./White.svelte";
</script>
<div class="flex-container">
	<div>
		<Black /><White /><Black /><White />
	</div>
	<div>
		<White /><Black /><White /><Black />
	</div>
	<div>
		<Black /><White /><Black /><White />
	</div>
	<div>
		<White /><Black /><White /><Black />
	</div>
</div>
<style>
	.flex-container > div{
		display:flex;
	}
	.flex-container{
		display: inline-flex;
		flex-direction:column;
		border:1px solid gray;
	}
</style>