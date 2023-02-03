<script>
	import { browser } from "$app/environment";
    import { myAlert } from "$lib/utils";
    import { scale, slide } from "svelte/transition";
    let id = '';
    let pass = '';
    let teacherPass = '';
    let isTeacher = false;
    /** @type {Promise<void>}*/
    let flag = new Promise(res => res());
    const send = async () => {
        if(browser){
            try{
                const obj = {
                    id, pass:isTeacher ? teacherPass : pass, url:location.search
                }
                const res = await fetch('/login/api',{
                    method:'POST',
                    body:JSON.stringify(obj)
                });
                 /** @type {{status:boolean, reason:string}} */
                const json = (await res.json())
                if(!json.status){
                    myAlert(`Login Failed : ${json.reason}`);
                } else {
                    location.href = json.reason;
                }
            } catch(err){
                myAlert(String(err));
            }
        }
    }
</script>
{#await flag}
    <div class="back"></div>
{/await}
<main>
    <div class="container" class:isTeacher>
        <div class="title">IncodingPlus<br>Svelte 배우기</div>
        <form on:submit|preventDefault class="input-container">
            {#if isTeacher}
                <input transition:slide placeholder="선생님 코드를 입력해주세요." type="password" bind:value={teacherPass} maxlength="64" minlength="64" pattern="[a-zA-Z0-9\-\_]+" required>
            {:else}
                <input transition:slide placeholder="아이디를 입력해주세요." type="text" bind:value={id} required maxlength="10" pattern="^[가-힣]+[0-9]{'{5}'}$">
                <input transition:slide placeholder="비밀번호를 입력해주세요." type="password" bind:value={pass} maxlength="7" minlength="7" pattern="^[0-9]{'{7}'}$" required>
            {/if}
            <label class="el-switch">
                <div>선생님 모드 :</div>
                <input type="checkbox" name="switch" bind:checked={isTeacher}>
                <span class="el-switch-style"></span>
            </label>
            <button on:click={() => flag = send()}>보내기</button>
        </form>
    </div>
</main>
<style lang="scss" scoped>
    *{
        font-family: 'D2Coding';
    }
    .back{
        position:fixed;
        left:0;
        top:0;
        width:100vw;
        height:100vh;
        background-color: rgba(0, 0, 0, 0.3);
        z-index: 9999;
    }
    main{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        box-sizing: border-box;
        .container{
            display: flex;
            flex-direction: column;
            height: fit-content;
            gap:40px;
            .el-switch {
                display: inline-block;
                font-size: 100%;
                height: 1.6em;
                position: relative;
                box-sizing: border-box;
                max-width: 100%;
                margin-bottom: 5px;
                font-weight: 700;
                div{
                    position:relative;
                    bottom: 0.15em;
                    display: inline-block;
                    vertical-align: top;
                    font-size:1.2em;
                }
                input[type="checkbox"] {
                    display: none;
                    line-height: normal;
                    padding: 0;
                    font-family: inherit;
                    font-size: inherit;
                    &:checked{
                        & + span{
                            background-color: var(--sk-theme-1);
                            &::before{
                                left: 50%;
                            }
                        }
                    }
                }
                span{
                    height: 1.6em;
                    left: 0;
                    background: #C0CCDA;
                    -webkit-border-radius: 0.8em;
                    border-radius: 0.8em;
                    display: inline-block;
                    position: relative;
                    top: 0;
                    transition: all 0.3s ease-in-out;
                    width: 3em;
                    cursor: pointer;
                    &::before{
                        display: block;
                        content: '';
                        height: 1.4em;
                        position: absolute;
                        width: 1.4em;
                        background-color: #fff;
                        border-radius: 50%;
                        left: 0.1em;
                        top: 0.1em;
                        transition: all 0.3s ease-in-out;
                    }
                }
            }
            .title{
                font-size: 36px;
                text-align: center;
                white-space: nowrap;
                letter-spacing: 0.2em;
                word-break: break-all;
            }
            .input-container{
                display: flex;
                flex-direction: column;
                align-items: center;
                input{
                    -webkit-text-size-adjust: none;
                    margin: 0;
                    background: #fff;
                    color: #000;
                    vertical-align: middle;
                    font-size: 1.083em;
                    max-width: 100%;
                    transition: all 0.3s;
                    outline: none;
                    margin-bottom: 16px;
                    appearance: none;
                    width: 100%;
                    height: 56px;
                    padding: 0 20px;
                    font-family: 'Pretendard',sans-serif;
                    border: 1px solid #e8e6e2;
                    border-radius: 30px;
                    &:focus{
                        box-shadow: 0 0 5px var(--sk-theme-1);
                        border: 1px solid var(--sk-theme-1);
                    }
                    &:invalid{
                        border-color: var(--sk-theme-3);
                    }
                    &:invalid:focus{
                        box-shadow: 0 0 5px var(--sk-theme-3);
                    }
                }
            
                button{
                    -webkit-text-size-adjust: none;
                    vertical-align: middle;
                    margin: 0;
                    padding: 0 5px;
                    letter-spacing: -0.1em;
                    appearance: none;
                    display: inline-block;
                    max-width: 365px;
                    font-family: 'Pretendard',sans-serif;
                    font-size: 16px;
                    color: #fff;
                    text-align: center;
                    line-height: 50px;
                    border: 1px solid var(--sk-theme-1);
                    border-radius: 25px;
                    background: var(--sk-theme-1);
                    cursor: pointer;
                    width: 100%;
                    transition: all 0.3s;
                }
                button:hover{
                    box-shadow: 0 0 5px var(--sk-theme-1);
                }
            }
        }
    }

</style>