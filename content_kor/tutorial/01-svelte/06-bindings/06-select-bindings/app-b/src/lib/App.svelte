<script>
	let questions = [
		{
			id: 1,
			text: `당신의 초등학교는 어디입니까?`
		},
		{
			id: 2,
			text: `당신의 어머니의 이름은 무엇입니까?`
		},
		{
			id: 3,
			text: `당신이 처음 키운 애완동물의 이름은 무엇입니까?`
		}
	];

	let selected;

	let answer = '';

	const handleSubmit = () => {
		alert(
			`질문 ${selected.id} (${selected.text}) : "${answer}"`
		);
	}
</script>

<h2>보안 질문</h2>

<form on:submit|preventDefault={handleSubmit}>
	<select
		bind:value={selected}
		on:change={() => answer = ''}
	>
		{#each questions as question}
			<option value={question}>
				{question.text}
			</option>
		{/each}
	</select>

	<input bind:value={answer} />

	<button disabled={!answer} type="submit">
		제출
	</button>
</form>

<p>
	선택된 질문 : {selected
		? selected.id
		: '[waiting...]'}
</p>

<style>
	input {
		display: block;
		width: 500px;
		max-width: 100%;
	}
</style>
