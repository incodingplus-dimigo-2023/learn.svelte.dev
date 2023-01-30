<script>
	import ChampionInfo from './ChampionInfo.svelte';

	const pkg = {
		name: 'jax',
		lane: 'top',
		region: 'kr',
		tier:'diamond_plus'
	};
</script>

<ChampionInfo {...pkg} />
