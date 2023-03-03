<script>
	import { marked } from 'marked';
	let value = `이탤릭체 : *italic*
볼드체 : **bold**
| 이름 |나이|
|:----:|:--:|
|김한결| 13 |
|문성준| 99 |`;
</script>

{@html marked(value, {
	breaks:true
})}

<textarea bind:value />

<style>
	textarea {
		width: 100%;
		height: 200px;
	}
</style>
