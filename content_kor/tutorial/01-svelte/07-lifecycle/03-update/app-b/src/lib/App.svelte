<script>
	import Eliza from 'elizabot';
	import {
		beforeUpdate,
		afterUpdate
	} from 'svelte';

	let div;
	let autoscroll;
	beforeUpdate(() => {
		autoscroll =
			div &&
			div.offsetHeight + div.scrollTop >
				div.scrollHeight - 20;
	});

	afterUpdate(() => {
		if (autoscroll)
			div.scrollTo(0, div.scrollHeight);
	});

	const eliza = new Eliza();

	let comments = [
		{ author: 'eliza', text: eliza.getInitial(), placeholder:false }
	];

	let disabled = false;

	function handleKeydown(event) {
		if (event.key === 'Enter' && !disabled) {
			const text = event.target.value;
			if (!text) return;
			disabled = true;

			comments = [...comments, {
				author: 'user',
				text,
				placeholder:false
			}];

			event.target.value = '';

			const reply = eliza.transform(text);
			setTimeout(() => {

				comments = comments.concat({
					author: 'eliza',
					text: '...',
					placeholder: true
				});

				setTimeout(() => {
					disabled = false;
					comments = [...comments.filter(
							(comment) => !comment.placeholder
						), {
							author: 'eliza',
							text: reply,
							placeholder:false
						}];
				}, 500 + Math.random() * 500);
			}, 200 + Math.random() * 200);
		}
	}
</script>

<div class="chat">
	<h1>Eliza</h1>

	<div class="scrollable" bind:this={div}>
		{#each comments as comment}
			<article class={comment.author}>
				<span>{comment.text}</span>
			</article>
		{/each}
	</div>

	<input { disabled } on:keydown={handleKeydown} />
</div>

<style>
	.chat {
		display: flex;
		flex-direction: column;
		height: 100%;
		max-width: 320px;
	}

	.scrollable {
		flex: 1 1 auto;
		border-top: 1px solid #eee;
		margin: 0 0 0.5em 0;
		overflow-y: auto;
	}

	article {
		margin: 0.5em 0;
	}

	.user {
		text-align: right;
	}

	span {
		padding: 0.5em 1em;
		display: inline-block;
	}

	.eliza span {
		background-color: #eee;
		border-radius: 1em 1em 1em 0;
		color: black;
	}

	.user span {
		background-color: #0074d9;
		color: white;
		border-radius: 1em 1em 0 1em;
		word-break: break-all;
	}
</style>
