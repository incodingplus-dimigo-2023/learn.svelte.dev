import dotenv from 'dotenv';
import { Octokit } from "octokit";
dotenv.config();
const octokit = new Octokit({
    auth:process.env.VITE_GITHUB
});
const data = await octokit.rest.repos.getContent({
    owner:'incodingplus-dimigo-2023',
    repo:'learn.svelte.student',
    ref:'김한결',
    path:'content/tutorial/01-svelte/01-Introduction/01-welcome-to-svelte/HTML 복습/app-b/src/lib/App.svelte',
    mediaType:{
        format:'raw'
    }
})
console.log(data.data)
// if('type' in data.data && data.data.type === 'file'){
//     console.log(Buffer.from(data.data.content, 'base64').toString());
// }