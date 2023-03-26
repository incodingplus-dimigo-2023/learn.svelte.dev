import { derived, writable } from "svelte/store";

export const todoList = writable([])

export const totalCount = derived(todoList, $todoList => $todoList.length)
export const finishedCount = derived(todoList, $todoList => $todoList.filter(item => item.checked).length)