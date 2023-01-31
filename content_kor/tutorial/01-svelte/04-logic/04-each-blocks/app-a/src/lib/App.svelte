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
	<!-- each 블럭 시작 -->
	<li>
		{osts[0].name}<br>
		<audio src="/{osts[0].id}.mp3" controls></audio>
	</li>
	<!-- each 블럭 끝 -->
</ul>
