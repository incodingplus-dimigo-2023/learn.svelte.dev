<script>
	const schools = ["초등학교", "중학교", "고등학교"]

	let selectedSchool
	let selectedGrade

	let maxGrade
	$: maxGrade = selectedSchool === "초등학교" ? 6 : 3
</script>

<select bind:value={selectedSchool}>
	{#each schools as school}
		<option value={school}>{school}</option>
	{/each}
</select>


<select bind:value={selectedGrade}>
	{#each new Array(maxGrade) as _, index}
		<option value={index + 1}>{index + 1}학년</option>
	{/each}
</select>


<div>{selectedSchool} {selectedGrade}학년</div>

