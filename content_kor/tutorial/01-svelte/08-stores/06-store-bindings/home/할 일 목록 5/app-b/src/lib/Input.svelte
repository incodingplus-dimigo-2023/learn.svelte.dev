<script>
	import { todoList, textInput } from "./store";

    const addItem = () => {
        todoList.addItem($textInput)
        $textInput = ""
    }
</script>

<div>
    <input type="text" bind:value={$textInput}>
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