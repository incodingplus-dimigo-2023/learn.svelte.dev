<script>
	import { todoList } from "./store";
</script>

<div>
    <div>전체 : {$todoList.length}</div>
    <div>완료 : {$todoList.filter(item => item.checked).length}</div>
</div>