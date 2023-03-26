<script>
    import { todoList } from "./store"
</script>

<div>
    {#each $todoList as item, index}
        <div class="row">
            <label>
                <input type="checkbox" checked={item.checked} on:change={() => todoList.toggleItem(index)}>
                {item.text}
            </label>
            <button on:click={() => todoList.deleteItem(index)}>삭제</button>
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