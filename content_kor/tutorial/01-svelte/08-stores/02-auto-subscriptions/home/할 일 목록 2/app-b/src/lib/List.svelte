<script>
    import { todoList } from "./store"

    const deleteItem = (index) => {
        $todoList = [...$todoList.slice(0, index), ...$todoList.slice(index + 1)];
    }
</script>

<div>
    {#each $todoList as item, index}
        <div class="row">
            <label>
                <input type="checkbox" bind:checked={item.checked}>
                {item.text}
            </label>
            <button on:click={() => deleteItem(index)}>삭제</button>
        </div>    
    {/each}
</div>

<style>
    .row {
        display: flex;
    }

    label {
        flex-grow: 1;
    }
</style>