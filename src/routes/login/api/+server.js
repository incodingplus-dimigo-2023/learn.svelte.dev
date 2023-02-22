import { checkUser, getHash } from '$lib/db';
import { clearAllCookies, getAllCookies, setAllCookies } from '$lib/cookie';

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

/** @type {import('./$types').RequestHandler} */
export const PATCH = async ({cookies, request }) => {
    let { hash, id, date, teacher } = getAllCookies(cookies);
    let url = new URL(await request.text());
    if(url.pathname === '/login'){
        clearAllCookies(cookies);
        return new Response(JSON.stringify({
            status:true,
            reason:''
        }), {
            status:200
        });
    }
    let redirectUrl = `/login?url=${url.pathname}`;
    if(hash && id && date){
        const data = await getHash(id, date);
        let reason = 'student';
        if(!data || data !== hash){
            clearAllCookies(cookies);
            return new Response(JSON.stringify({
                status:false,
                reason:redirectUrl,
                cookies:{ hash, id, date, teacher }
            }), {
                status:307
            });
        }
        let newDate = String(Date.now());
        if(teacher && teacher === await getHash(TEACHER, date)){
            teacher = await getHash(TEACHER, newDate);
            reason = 'teacher';
        } else {
            teacher = '';
        }
        id = hash;
        hash = await getHash(id, newDate);
        setAllCookies(cookies, { hash, date:newDate, id, teacher}, url.protocol === 'https:');
        return new Response(JSON.stringify({
            status:true,
            reason
        }), {
            status:200
        });
    } else {
        clearAllCookies(cookies);
        return new Response(JSON.stringify({
            status:false,
            reason:redirectUrl,
            cookies:{ hash, id, date, teacher }
        }), {
            status:307
        });
    }
}