<script>
	import Output from './Output.svelte';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import { afterNavigate } from '$app/navigation';
	import ContextMenu from './filetree/ContextMenu.svelte';
	import Filetree from './filetree/Filetree.svelte';
	import SplitPane from '$lib/components/SplitPane.svelte';
	import { isTeacher } from '$lib/utils';
	import Icon from '@sveltejs/site-kit/components/Icon.svelte';
	import { writable } from 'svelte/store';
	import Editor from './Editor.svelte';
	import ImageViewer from './ImageViewer.svelte';
	import ScreenToggle from './ScreenToggle.svelte';
	import Sidebar from './Sidebar.svelte';
	import { state, selected, completed, stubs } from './state.js';
	import JSZip from 'jszip'

	/** @type {import('./$types').PageData} */
	export let data;

	/** @type {HTMLSelectElement}*/
	let sel;
	let width = 1000;
	let selected_view = 0;
	$: mobile = writable(false);
	$: $mobile = width < 768;
	let disabled = false;
	const downloadFile = async () => {
		if(browser && data.isHome){
			let zip = new JSZip();
			for(let i of $stubs){
				if(i.type === 'file'){
					if(i.text){
						zip.file(i.name, i.contents);
					} else {
						zip.file(i.name, i.contents, {base64:true});
					}
				}
			}
			let file = await zip.generateAsync({type:'blob'});
			const url = URL.createObjectURL(file);
			const a = document.createElement('a');
			a.download = `${data.exercise.title}.zip`;
			a.href = url;
			a.click();
			URL.revokeObjectURL(url);
		}
	};

	onMount(() => {
		state.switch_exercise(data.exercise);
	});
	afterNavigate(() => {
		state.switch_exercise(data.exercise);
	});
</script>
<svelte:window bind:innerWidth={width}></svelte:window>
<svelte:head>
	<title>{data.exercise.chapter.title} / {data.exercise.title}</title>

	<meta name="twitter:title" content="{data.exercise.title}" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:site" content="@sveltejs" />
	<meta name="twitter:creator" content="@sveltejs" />
	<meta name="twitter:image" content="https://svelte.dev/images/twitter-thumbnail.jpg" />
	<meta property="twitter:domain" content="learn.svelte.dev" />
	<meta property="twitter:url" content="https://learn.svelte.dev" />

	<meta property="og:title" content="{data.exercise.title}" />
	<meta property="og:url" content="https://learn.svelte.dev" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="https://svelte.dev/images/twitter-thumbnail.jpg" />
</svelte:head>

<ContextMenu />

<div class="container" style="--toggle-height: {$mobile ? '4.6rem' : '0px'}">
	<SplitPane
		type="horizontal"
		min={$mobile ? '0px' : '360px'}
		max={$mobile ? '100%' : '50%'}
		pos={$mobile ? (selected_view === 0 ? '100%' : '0%') : '33%'}
	>
		<section slot="a" class="content">
			<Sidebar
				isHome={data.isHome}
				index={data.index}
				exercise={data.exercise}
				on:select={(e) => {
					state.select_file(e.detail.file);
				}}
			/>
		</section>

		<section slot="b" class:hidden={$mobile && selected_view === 0}>
			<SplitPane
				type="vertical"
				min={$mobile ? '0px' : '100px'}
				max={$mobile ? '100%' : '50%'}
				pos={$mobile ? (selected_view === 1 ? '100%' : '0%') : '50%'}
			>
				<section slot="a">
					<SplitPane type="horizontal" min="80px" max="300px" pos="200px">
						<section class="navigator" slot="a">
							<Filetree readonly={mobile} />
							{#if data.isHome && $isTeacher}	
								<select bind:this={sel} {disabled} on:input={async () => {
									let gitUser = sel.value;
									if(!browser)return;
									if(!gitUser || !(/^[가-힣]+$/.test(gitUser))) return;
									disabled = true;
									try{
										const arr = $stubs.filter(v => v.type === 'file' && v.text).map(v => v.name);
										const res = await fetch('/git', {
											method:'POST',
											body:JSON.stringify({
												branch:gitUser,
												dir:data.exercise.dir.replace('/home/', '/'),
												stubs:arr
											})
										});
										if(res.status === 500) {
											gitUser = 'default';
											disabled = false;
											return;
										}
										
										/** @type {import('$lib/types').FileStub[]}*/
										let json = await res.json();
										for(let i of json){
											console.log(i);
											state.update_file(i);
										}
										disabled = false;
									} catch(err){
										alert(err);
										disabled = false;
									}
								}}>
									<option value="default">현재 코드</option>
									{#each data.users as user}
										<option value={user}>{user}</option>
									{/each}
								</select>
							{/if}
							<button
								class:completed={$completed}
								disabled={Object.keys(data.exercise.b).length === 0}
								on:click={() => {
									if(data.isHome && $isTeacher || !data.isHome)
										state.toggle_completion();
									else
										state.toggle_home();
								}}
							>
								{#if $completed && Object.keys(data.exercise.b).length > 0}
									리셋
								{:else}
									{#if data.isHome && $isTeacher}
										숙제 정답 확인 <Icon name="arrow-right" />
									{:else if data.isHome && !$isTeacher}
										숙제 결과 보기 <Icon name="arrow-right" />
									{:else}
										정답 확인 <Icon name="arrow-right" />
									{/if}
								{/if}
							</button>
							{#if data.isHome}
								<button class="download" on:click={downloadFile}>파일 다운로드</button>
							{/if}
						</section>

						<section class="editor-container" slot="b">
							<Editor read_only={$mobile} />
							<ImageViewer selected={$selected} />
						</section>
					</SplitPane>
				</section>

				<section slot="b" class="preview">
					<Output path={data.exercise.path} />
				</section>
			</SplitPane>
		</section>
	</SplitPane>
	{#if $mobile}
		<ScreenToggle labels={['Tutorial', 'Input', 'Output']} bind:selected={selected_view} />
	{/if}
</div>

<style>
	.container {
		height: calc(100% - var(--toggle-height));
		max-height: 100%;
	}
	select{
		border: 1px solid #C4C4C4;
		box-sizing: border-box;
		padding: 10px;
		font-weight: 400;
		font-size: 14px;
		line-height: 16px;
		transition: 0.2s;
	}

	select:focus{
		border: 1px solid var(--sk-theme-1);
		box-sizing: border-box;
	}


	.content {
		display: flex;
		flex-direction: column;
		position: relative;
		min-height: 0;
		height: 100%;
		max-height: 100%;
		background: var(--sk-back-2);
		--menu-width: 5.4rem;
	}

	.navigator {
		position: relative;
		background: var(--sk-back-2);
		display: flex;
		flex-direction: column;
	}

	.navigator button {
		position: relative;
		background: var(--sk-theme-2);
		padding: 0.5rem;
		width: 100%;
		height: 4rem;
		border-right: 1px solid var(--sk-back-4);
		color: white;
		opacity: 1;
	}

	.navigator button:disabled {
		opacity: 0.5;
	}

	.navigator button:not(:disabled) {
		background: var(--sk-theme-1);
	}

	.navigator button.completed {
		background: var(--sk-theme-2);
	}

	.navigator button.download{
		background: var(--sk-theme-3);
	}

	.preview {
		display: flex;
		flex-direction: column;
	}

	.editor-container {
		position: relative;
		background-color: var(--sk-back-3);
	}

	.hidden {
		display: none;
	}
</style>
