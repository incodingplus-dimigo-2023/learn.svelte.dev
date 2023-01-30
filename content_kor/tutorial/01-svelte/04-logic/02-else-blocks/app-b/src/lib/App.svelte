<script>
	let user = { loggedIn: false };

	function toggle() {
		user.loggedIn = !user.loggedIn;
	}
</script>

{#if user.loggedIn}
	<button on:click={toggle}>
		로그 아웃
	</button>
{:else}
	<button on:click={toggle}>
		로그인
	</button>
{/if}
