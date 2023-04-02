<script>
	import { time } from './stores.js';

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
