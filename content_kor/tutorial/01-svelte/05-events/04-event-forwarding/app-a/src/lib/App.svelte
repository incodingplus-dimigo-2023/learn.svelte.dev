<script>
	import Outer from './Outer.svelte';

	let random = 0;

	const handleMessage = (event) => {
		alert(event.detail.text);
	};

	const getRandom = (event) => {
		random = event.detail.number;
	}
</script>
<Outer on:message={handleMessage} on:random={getRandom} /><br>
랜덤 : {random}
