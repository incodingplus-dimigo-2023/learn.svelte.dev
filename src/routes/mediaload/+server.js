import { error } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export const GET = async ({request, fetch, url}) => {
    const raw = url.searchParams.get('url');
    if(!raw){
        return new Response('url이 없습니다', {
            status:500
        })
    }
    const res = await fetch(raw);
    return new Response(res.body, {
        headers:{
            'content-type':res.headers.get('content-type') ?? ''
        }
    });
}