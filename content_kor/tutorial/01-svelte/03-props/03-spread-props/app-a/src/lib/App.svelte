<script>
	import ChampionInfo from './ChampionInfo.svelte';

	const pkg = {
		name: 'jax',
		lane: 'top',
		region: 'kr',
		tier:'diamond_plus'
	};
</script>

<ChampionInfo
	name={pkg.name}
	lane={pkg.lane}
	region={pkg.region}
	tier={pkg.tier}
 />
