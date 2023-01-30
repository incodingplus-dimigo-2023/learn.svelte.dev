<script>
	let user = { loggedIn: false };

	function toggle() {
		user.loggedIn = !user.loggedIn;
	}
</script>

<button on:click={toggle}>
	로그 아웃
</button>

<button on:click={toggle}>
	로그인
</button>
