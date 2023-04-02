<script>
	import { onInterval } from './utils.js';

	export let callback;
	export let interval = 1000;

	onInterval(callback, interval);
</script>

<p> 
	이 컴포넌트는 대략 {interval / 1000}초에 한 번씩 함수를 실행합니다.
</p>

<style>
	p {
		border: 1px solid blue;
		padding: 5px;
	}
</style>
