<script>
	import { count } from './stores.js';
</script>

<h1>{$count}번 눌렀습니다.</h1>

<button on:click={count.increment}>+</button>
<button on:click={count.decrement}>-</button>
<button on:click={count.reset}>초기화</button>
