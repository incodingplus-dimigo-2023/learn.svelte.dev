<script>
	import Inner from './Inner.svelte';

	let random = 0;

	const handleMessage = (event) => {
		alert(event.detail.text);
	};

	const getRandom = (event) => {
		random = event.detail.number;
	}
</script>
<Inner on:message={handleMessage} on:random={getRandom} /><br>
랜덤 : {random}
