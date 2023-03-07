<script>
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

		// Tab을 누르면 DOM 이 업데이트 되면서 커서가 다른 곳으로 날라갑니다.
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
	kbd {
		margin: 0px 0.1em;
		padding: 0.1em 0.6em;
		border-radius: 3px;
		border: 1px solid rgb(204, 204, 204);
		color: rgb(51, 51, 51);
		line-height: 1.4;
		font-family: Arial,Helvetica,sans-serif;
		font-size: 10px;
		display: inline-block;
		box-shadow: 0px 1px 0px rgba(0,0,0,0.2), inset 0px 0px 0px 2px #ffffff;
		background-color: rgb(247, 247, 247);
		box-shadow: 0 1px 0px rgba(0, 0, 0, 0.2), 0 0 0 2px #ffffff inset;
		border-radius: 3px;
		text-shadow: 0 1px 0 #fff;
	}
</style>
