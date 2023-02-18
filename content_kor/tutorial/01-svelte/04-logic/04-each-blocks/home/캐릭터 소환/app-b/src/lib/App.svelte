<script>
	let characters = []

	const createCharacter = () => {
		const HP = Math.floor(Math.random() * 201)
		const ATK = Math.floor(Math.random() * 201)
		const DEF = Math.floor(Math.random() * 201)
		const STAR = Math.floor((HP + ATK + DEF) / 100)

		return {
			HP,
			ATK,
			DEF,
			STAR
		}
	}

	const spawn = () => {
		characters = [...characters, createCharacter()]
	}
</script>

<button on:click={spawn}>소환</button>
<div class="container">
	{#each characters as { HP, ATK, DEF, STAR}, i}
		<div class="character">
			<h1>{i + 1}번째 캐릭터</h1>
			<div>체력 : { HP }</div>
			<div>공격력 : { ATK }</div>
			<div>방어력 : { DEF }</div>
			<div>등급 : {"★".repeat(STAR)}</div>
		</div>
	{/each}
</div>

