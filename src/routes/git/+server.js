import { Octokit } from 'octokit';
import path from 'path';
import { nextTick } from 'process';
/** @type {import('./$types').RequestHandler} */
export const POST = async ({request}) => {
    const octokit = new Octokit({
		auth:import.meta.env.VITE_GITHUB ?? process.env.VITE_GITHUB
	});

    /** @type {import('$lib/types').FileStub[]} */
    const result = [];
    try{
        /**@type {{branch:string;dir:string;stubs:string[]}} */
        const datas = await request.json();

        /** @type {Promise<Response>[]} */
        const ttt = [];
        const txtArr = [];
        for(let i of datas.stubs){
            try{
                // 1안
                // const data = await octokit.rest.repos.getContent({
                //     owner:'incodingplus-dimigo-2023',
                //     repo:'learn.svelte.student',
                //     ref:datas.branch,
                //     path:`${datas.dir.replace('content_kor', 'content')}/app-b${i}`,
                //     mediaType:{
                //         format:'raw'
                //     }
                // });
                // /** @type {string} */
                // if(typeof data.data === 'string'){
                //     let str = data.data;
                //     result.push({
                //         name:i,
                //         basename:path.basename(i),
                //         text:true,
                //         type:'file',
                //         contents:str
                //     });
                // }

                // 2안
                // const res = await fetch(`https://raw.githubusercontent.com/incodingplus-dimigo-2023/learn.svelte.student/${datas.branch}/${datas.dir.replace('content_kor', 'content')}/app-b${i}`);
                // if(res.status !== 404){
                //     const txt = await res.text();
                //     result.push({
                //         name:i,
                //         basename:path.basename(i),
                //         text:true,
                //         type:'file',
                //         contents:txt
                //     });
                // }

                ttt.push(fetch(`https://raw.githubusercontent.com/incodingplus-dimigo-2023/learn.svelte.student/${datas.branch}/${datas.dir.replace('content_kor', 'content')}/app-b${i}`));
                txtArr.push(i);
                await new Promise(res => nextTick(res));
            } catch(err){
            }
        }

        const proArr = await Promise.allSettled(ttt)
        for(let i = 0; i < proArr.length; i++){
            let cur = proArr[i];
            if(cur.status === 'rejected') continue;
            if(cur.value.status === 404) continue;
            const txt = await cur.value.text();
            result.push({
                name:txtArr[i],
                basename:path.basename(txtArr[i]),
                text:true,
                type:'file',
                contents:txt
            });
        }
        return new Response(JSON.stringify(result));
    } catch(err){
        console.log(err);
        return new Response(null, {
            status:500
        });
    }
}