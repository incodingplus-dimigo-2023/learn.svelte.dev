<script>
	import { browser } from "$app/environment";
    import { myAlert } from "$lib/utils";
    let id = '';
    let pass = '';
    /** @type {Promise<void>}*/
    let flag = new Promise(res => res());
    const send = async () => {
        if(browser){
            try{
                const res = await fetch('/login',{
                    method:'POST',
                    body:JSON.stringify({
                        id, pass, url:location.search
                    })
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
    <div class="container">
        <div class="title">IncodingPlus<br>Svelte 배우기</div>
        <form on:submit|preventDefault class="input-container">
            <input placeholder="아이디를 입력해주세요." type="text" bind:value={id} required maxlength="10" pattern="^[가-힣]+[0-9]{'{5}'}$">
            <input placeholder="비밀번호를 입력해주세요." type="password" bind:value={pass} maxlength="7" minlength="7" pattern="^[0-9]{'{7}'}$" required>
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
            gap:100px;
            height: fit-content;
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
                    margin-top: 50px;
                    transition: all 0.3s;
                }
                button:hover{
                    box-shadow: 0 0 5px var(--sk-theme-1);
                }
            }
        }
    }

</style>