import { checkUser } from '$lib/db';
import { getHash } from '$lib/hash';
import { setAllCookies } from '$lib/cookie';

const TEACHER = import.meta.env.VITE_PASSWORD ?? process.env.VITE_PASSWORD;

/** @type {import('./$types').RequestHandler} */
export const POST = async ({request, cookies, url}) => {
    /** @type {{id:string, pass:string, url:string}} */
    const json = await request.json();
    let date = String(Date.now());
    const search = new URLSearchParams(json.url);
    let hashRaw = '';
    let teacher = '';
    if(json.pass === TEACHER){
        hashRaw = await getHash(json.pass, date);
        teacher = await getHash(TEACHER, date);
    } else {
        const res = await checkUser(json.id, json.pass, date);
        if(!res.status ){
            return new Response(JSON.stringify(res), {
                status:403
            });
        }
        hashRaw = res.reason;
    }
    let hash = await getHash(hashRaw, date);
    setAllCookies(cookies, { hash, date, id:hashRaw, teacher}, url.protocol === 'https:');
    return new Response(JSON.stringify({
        status:true,
        reason:search.get('url') ?? '/'
    }));
}