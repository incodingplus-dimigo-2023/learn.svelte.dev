<script>
	import { count } from './stores.js';
	import Incrementer from './Incrementer.svelte';
	import Decrementer from './Decrementer.svelte';
	import Resetter from './Resetter.svelte';
</script>

<h1>{$count}번 눌렀습니다.</h1>

<Incrementer />
<Decrementer />
<Resetter />
