<script>
    import { mouse } from "./store"
</script>

<div>
    <span>x : {$mouse.x}</span>
    <span>y : {$mouse.y}</span>
</div>

<style>
    div {
        position: fixed;
        top: 0;
        right: 0;
    }
</style>