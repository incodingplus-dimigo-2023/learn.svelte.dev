<script>
	import { name, greeting } from './stores.js';
</script>

<h1>{$greeting}</h1>
<input type="text" bind:value={$name} />

<button on:click={() => ($name += '!')}>
	느낌표 붙이기
</button>
