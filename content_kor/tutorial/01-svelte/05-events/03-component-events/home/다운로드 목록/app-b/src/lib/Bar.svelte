<script>
	import { createEventDispatcher } from "svelte";


	export let targetSize

    const downloadSpeed = 1
    let currentSize = 0

    const dispatch = createEventDispatcher();

    let interval = setInterval(() => {
        currentSize += downloadSpeed;
        if(currentSize >= targetSize) {
            clearInterval(interval);
            dispatch("complete")
        }
    }, 1000)

    let percentage = 0;
    $: percentage = Math.min(Math.round(currentSize / targetSize * 100), 100) 

</script>

<div class="container">
    <div style="width: {percentage}%" class="bar"></div>
</div>

<style>
    .container {
        position: relative;
        border: 1px solid black;
        height: 30px;
    }
    .bar {
        position: absolute;
        background: green;
        height: 100%;
    }
</style>