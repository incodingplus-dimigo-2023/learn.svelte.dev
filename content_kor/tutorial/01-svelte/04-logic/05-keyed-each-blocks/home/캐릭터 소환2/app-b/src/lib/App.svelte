<script>
import Character from "./Character.svelte";

	let characters = []

	const createCharacter = () => {
		const HP = Math.floor(Math.random() * 201)
		const ATK = Math.floor(Math.random() * 201)
		const DEF = Math.floor(Math.random() * 201)

		return {
			HP,
			ATK,
			DEF,
		}
	}

	const spawn = () => {
		characters = [...characters, createCharacter()]
	}

	const kill = (index) => {
		characters = [...characters.slice(0, index), ...characters.slice(index + 1)]
	}

</script>

<button on:click={spawn}>소환</button>
<div class="container">
	
	{#each characters as character, index (character)}
		<div>
			<Character index={index+1} {character} />
			<button on:click={() => kill(index)}>캐릭터 삭제</button>
		</div>
	{/each}
</div>


<style>
	.container > div {
		display: flex;
	}
</style>
