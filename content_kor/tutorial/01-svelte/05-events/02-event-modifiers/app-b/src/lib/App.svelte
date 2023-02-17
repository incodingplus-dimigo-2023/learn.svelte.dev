<script>
	function handleClick() {
		alert('한 번만 동작합니다.');
	}
</script>

<button on:click|once={handleClick}>클릭</button>
