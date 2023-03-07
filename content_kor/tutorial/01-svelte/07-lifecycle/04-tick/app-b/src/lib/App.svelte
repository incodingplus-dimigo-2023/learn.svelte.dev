<script>
	import { tick } from 'svelte'; 	
	let text = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

	/**
	 * @param {KeyboardEvent} event
	 */
	const handleKeydown = async (event) => {
		if (event.key !== 'Tab' || !(event.target instanceof HTMLTextAreaElement)) return;

		event.preventDefault();

		const {
			selectionStart,
			selectionEnd,
			value
		} = event.target;
		const selection = value.slice(
			selectionStart,
			selectionEnd
		);

		const replacement = /[a-z]/.test(selection)
			? selection.toUpperCase()
			: selection.toLowerCase();

		text =
			value.slice(0, selectionStart) +
			replacement +
			value.slice(selectionEnd);

		await tick();
		event.target.selectionStart = selectionStart;
		event.target.selectionEnd = selectionEnd;
	}
</script>
<h1>텍스트를 선택한 뒤에 <kbd>Tab</kbd> 키를 눌러보세요.</h1>
<textarea
	value={text}
	on:keydown={handleKeydown}
/>

<style>
	textarea {
		width: 100%;
		height: 200px;
	}
</style>
