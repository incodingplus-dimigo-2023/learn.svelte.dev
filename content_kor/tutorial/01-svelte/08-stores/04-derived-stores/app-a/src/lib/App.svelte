<script>
	import { time, elapsed } from './stores.js';
	const formatter = new Intl.DateTimeFormat(
		'ko-KR',
		{
			hour12: true,
			hour: 'numeric',
			minute: '2-digit',
			second: '2-digit'
		}
	);
</script>

<h1>현재 시각은 {formatter.format($time)} 입니다.</h1>

<p>
	이 페이지는 {$elapsed}초 동안 열려있었습니다.
</p>
