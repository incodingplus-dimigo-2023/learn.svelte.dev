<script>
	let yes = false;
</script>

<label>
	<input type="checkbox" checked={yes} /> 동의합니다.
</label>

{#if yes}
	<p>
		동의 완료!
	</p>
{:else}
	<p>
		회원 가입을 하려면 먼저 동의를 하셔야합니다.
	</p>
{/if}

<button disabled={!yes}>회원가입</button>
