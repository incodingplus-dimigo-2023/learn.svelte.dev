<script>
	let isTeacherMode = false
</script>

{#if isTeacherMode}
	<input type="password" placeholder="선생님 코드를 입력해주세요">	
{:else}
	<input type="text" placeholder="아이디를 입력해주세요">
	<input type="password" placeholder="비밀번호를 입력해주세요">	
{/if}

<div on:click={(e) => isTeacherMode = !isTeacherMode}>
	선생님 모드: {isTeacherMode}
</div>

<style>
	input {
		display: block;
		border: 1px solid hsl(15, 100%, 63%);
		border-radius: 30px;
		height: 56px;
		width: 300px;
		padding: 0 20px;
	}
</style>