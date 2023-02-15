<script>
	const emojis = {
		사과: '🍎',
		바나나: '🍌',
		당근: '🥕',
		도넛: '🍩',
		달걀: '🥚'
	};

	// prop 값이 바뀌면 `name` 또한 바뀝니다.
	export let name;

	// emoji 값은 이미 고정되었기 때문에 맨 처음 값이 적용됩니다.
	const emoji = emojis[name];
</script>

<p>
	<span>"{name}"의 이모티콘은 {emoji}입니다.</span>
</p>

<style>
	p {
		margin: 0.8em 0;
	}

	span {
		display: inline-block;
		padding: 0.2em 1em 0.3em;
		text-align: center;
		border-radius: 0.2em;
		background-color: #ffdfd3;
	}

	@media (prefers-color-scheme: dark) {
		span {
			background-color: #4f352b;
		}
	}
</style>
