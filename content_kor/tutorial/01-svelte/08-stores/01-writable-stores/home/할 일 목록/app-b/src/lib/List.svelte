<script>
    import { todoList } from "./store"

    let list;
    todoList.subscribe(value => list = value);

    const deleteItem = (index) => {
        list = [...list.slice(0, index), ...list.slice(index + 1)];
        updateStore();
    }

    const updateStore = () => {
        todoList.set(list);
    }
</script>

<div>
    {#each list as item, index}
        <div class="row">
            <label>
                <input type="checkbox" bind:checked={item.checked} on:change={updateStore}>
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