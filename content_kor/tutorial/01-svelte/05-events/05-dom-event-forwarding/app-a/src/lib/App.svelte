<script>
	import CustomButton from './CustomButton.svelte';

	const handleClick = () => {
		alert('버튼 클릭됨');
	}
</script>

<CustomButton on:click={handleClick} />
