<script>
	import MyCheckbox from "./MyCheckbox.svelte";

	let label = "체크박스 테스트"
	let value = false
</script>

<MyCheckbox {value} {label} on:click={() => value = !value} />