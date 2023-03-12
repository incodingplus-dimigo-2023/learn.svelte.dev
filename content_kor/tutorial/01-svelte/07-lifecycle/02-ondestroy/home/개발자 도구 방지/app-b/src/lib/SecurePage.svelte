<script>
	import { onDestroy, onMount } from "svelte";

    const preventF12 = event => {
            if(event.code === "F12") {
                event.preventDefault()
                alert("개발자 도구를 사용할 수 없는 페이지입니다.")
            }
        }

    onMount(() => {
        document.body.addEventListener("keydown", preventF12)
    })

    onDestroy(() => {
        document.body.removeEventListener("keydown", preventF12)
    })
</script>


<h1>보안 페이지</h1>
<button on:click>이전 페이지로</button>
