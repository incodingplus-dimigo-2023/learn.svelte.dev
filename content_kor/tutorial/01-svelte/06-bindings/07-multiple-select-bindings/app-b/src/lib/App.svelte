<script>
	let scoops = 1;
	let picks = ['엄마는 외계인'];
	let menu = [
		'엄마는 외계인',
		'슈팅스타', 
		'쿠키 앤 크림'
	];
	let sizes = ['싱글', '더블', '트리플'];
</script>

<h2>사이즈</h2>
{#each sizes as size, ind}
	<label>
		<input type=radio bind:group={scoops} name="scoops" value={ind + 1}>
		{size} ({ind + 1}가지 맛)
	</label>
{/each}

<h2>아이스크림</h2>

<select bind:value={picks} multiple>
	{#each menu as ice}
		<option value={ice}>{ice}</option>
	{/each}
</select>

{#if picks.length === 0}
	<p>한 가지 맛 이상 골라주세요.</p>
{:else if picks.length > scoops}
	<p>사이즈 요구 사항보다 많은 맛 종류를 고를 수는 없습니다.</p>
{:else if picks.length < scoops}
	<p>사이즈 요구 사항보다 적은 맛 종류를 고를 수는 없습니다.</p>
{:else}
	<p>
		{sizes[scoops - 1]} 사이즈에 {picks.join(', ')}을 주문하셨습니다.
	</p>
{/if}