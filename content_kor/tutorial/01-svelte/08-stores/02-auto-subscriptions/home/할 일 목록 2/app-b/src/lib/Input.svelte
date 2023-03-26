<script>
	import { todoList } from "./store";

    let text = ""

    const addItem = () => {
        $todoList =  [...$todoList, {text: text, checked: false}]
        text = "";
    }
</script>

<div>
    <input type="text" bind:value={text}>
    <button on:click={addItem}>추가</button>
</div>

<style>
    div {
        display: flex;
    }

    input {
        flex-grow: 1;
    }
</style>