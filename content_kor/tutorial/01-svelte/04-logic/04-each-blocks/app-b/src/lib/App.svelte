<script>
	let osts = [
		{
			id: 'BOcleeaCL6E',
			name: 'Baba Is You'
		},
		{
			id: '6zYPfs-MCcU',
			name: 'The Legend of Zelda: Breath of the Wild'
		},
		{
			id: 'EhgDibw7vB4',
			name: 'Super Smash Bros. Ultimate'
		}
	];
</script>

<h1>게임 OST 모음</h1>

<ul>
	{#each osts as { id, name }, i}
		<li>
			{i + 1}. {name}<br>
			<audio src="/{id}.mp3" controls></audio>
		</li>
	{/each}
</ul>
