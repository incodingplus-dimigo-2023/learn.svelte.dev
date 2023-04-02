<script>
	import { browser, dev } from '$app/environment';
	import { tick } from 'svelte';
	import { isTeacher } from '$lib/utils';
    import {
		files,
        update_file
    } from './state.js';

    /** @type {string} */
    export let dir;
    /** @type {string[]}*/
    export let users;
    /** @type {string}*/
    let gitUser;
	let disabled = false;

    const onInput = async () => {
        await tick();
        if(!browser)return;
        if(!gitUser || !(/^[가-힣]+$/.test(gitUser))) return;
        disabled = true;
        try{
            const arr = $files.filter(v => v.type === 'file' && v.text).map(v => v.name);
            const res = await fetch('/git', {
                method:'POST',
                body:JSON.stringify({
                    branch:gitUser,
                    dir:dir.replace('/home/', '/'),
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
                update_file(i);
            }
            disabled = false;
        } catch(err){
            alert(err);
            disabled = false;
        }
    }

    $: if(gitUser) onInput();
</script>
{#if $isTeacher || dev}    
    <select {disabled} bind:value={gitUser}>
        <option value="default">현재 코드</option>
        {#each users as user}
            <option value={user}>{user}</option>
        {/each}
    </select>
{/if}

<style>
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
</style>