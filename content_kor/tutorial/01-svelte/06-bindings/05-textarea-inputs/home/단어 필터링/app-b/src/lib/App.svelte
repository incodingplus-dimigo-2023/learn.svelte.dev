<script>
	let value = ""
	let filtered = ""

	const words = ["스벨트", "svelte"]

	$: {
		filtered = value
		words.forEach(word => filtered = filtered.replaceAll(word, "*".repeat(word.length)))
	}
</script>

<textarea bind:value></textarea>
<div>{filtered}</div>