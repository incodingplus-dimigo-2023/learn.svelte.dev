import { readable } from "svelte/store";

export const mouse = readable({x: 0, y: 0}, set => {
    const listener = document.addEventListener("mousemove", event => {
        set({
            x: event.pageX, 
            y: event.pageY
        })
    })

    return () => {
        document.removeEventListener("mousemove", listener)
    }
})