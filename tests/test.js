import dotenv from 'dotenv';
import { Octokit } from "octokit";
dotenv.config();
const octokit = new Octokit({
    auth:process.env.VITE_GITHUB
});
const data = await octokit.rest.repos.getContent({
    owner:'incodingplus-dimigo-2023',
    repo:'learn.svelte.student',
    branch:'main',
    path:'/src/01-svelte/01-Introduction',
    mediaType:{
        format:'json'
    }
})

console.log(data.data)