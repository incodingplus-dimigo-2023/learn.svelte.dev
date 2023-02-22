<script>
	import { createEventDispatcher } from "svelte";

	const dispatch = createEventDispatcher();

	const sayHello = () => {
		dispatch('message', {
			text: '안뇽~'
		});
	}
	const genRandom = () => {
		dispatch('random', {
			number: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)
		});
	}
</script>

<button on:click={sayHello}>
	안뇽~
</button>
<button on:click={genRandom}>
	랜덤~
</button>