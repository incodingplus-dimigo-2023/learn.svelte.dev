<script>
	import { afterUpdate } from "svelte";
	import { sampleText } from "./sampleText"

	let targetText = ""
	let result = sampleText
	let div

	$: {
		if(targetText === ""){
			result = sampleText
		} else {
			result = sampleText.replaceAll(targetText, `<span>${targetText}</span>`)
		}
	}

	afterUpdate(() => {
		const span = div.querySelector("span")
		if(span) {
			span.scrollIntoView(true)
		
		}
	})
</script>

<input type="text" bind:value={targetText}>

<div bind:this={div}>
	{@html result}
</div>

<style>
	:global(span) {
		background-color: yellow;
		font-weight: bold;
	}

	div {
		margin-right: 300px;
	}

	input {
		position: fixed;
		top: 0;
		right: 0;
	}
</style>