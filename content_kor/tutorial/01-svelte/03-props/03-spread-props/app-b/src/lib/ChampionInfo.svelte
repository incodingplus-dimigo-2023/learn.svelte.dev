<script>
	export let name;
	export let lane = '';
	export let region = 'global';
	export let tier = 'platinum_plus';
	$: href = `https://www.op.gg/champions/${name}${lane ? `/${lane}` : ''}?region=${region}&tier=${tier}`;
</script>

<h3>{name.toUpperCase()}에 대한 정보</h3>

<ul>
	<li>챔피언 : {name}</li>
	<li>포지션 : {lane}</li>
	<li>지역 : {region}</li>
	<li>티어 : {tier}</li>
	<li><a {href} rel="noreferrer" target="_blank">해당 링크로 가기</a></li>
</ul>

<style>
	a {
		font-family: Menlo;
		padding: 0.1em 0.2em;
		border-radius: 0.2em;
	}
</style>
