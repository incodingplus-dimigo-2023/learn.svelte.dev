<script>
	const MAX_SCORE = 100
	
	let subjects = [{
		name: "국어",
		score: 0
	}, {
		name: "수학",
		score: 0
	}, {
		name: "영어",
		score: 0
	}]

	let averageScore = 0
	$: averageScore = subjects.reduce((acc, subject) => acc += subject.score, 0) / subjects.length
</script>

<div>
	{#each subjects as subject}
		<div>
			<span>{subject.name}</span>
			<input type="number" min="0" max={MAX_SCORE} bind:value={subject.score}>
			<span>점</span>
		</div>	
	{/each}
	<div>평균 {averageScore}점</div>
</div>



