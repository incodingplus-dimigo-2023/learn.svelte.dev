import { derived, writable } from "svelte/store";



const createTodoList = () => {
    const { subscribe, update } = writable([])

    return {
        subscribe,
        addItem: (text) => update(list => [...list, {text: text, checked: 0}]),
        deleteItem: (index) => update(list => [...list.slice(0, index), ...list.slice(index + 1)]),
        toggleItem: (index) => update(list => {
            list[index].checked = !list[index].checked
            return list
        })
    }
}
export const todoList = createTodoList()

export const totalCount = derived(todoList, $todoList => $todoList.length)
export const finishedCount = derived(todoList, $todoList => $todoList.filter(item => item.checked).length)