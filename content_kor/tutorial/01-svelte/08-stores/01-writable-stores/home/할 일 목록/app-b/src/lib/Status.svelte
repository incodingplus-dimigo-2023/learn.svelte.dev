<script>
	import { todoList } from "./store";

    let total;
    let finished;

    todoList.subscribe(list => {
        total = list.length;
        finished = list.filter(item => item.checked).length
    })
</script>

<div>
    <div>전체 : {total}</div>
    <div>완료 : {finished}</div>
</div>