import { checkUser, getHash } from '$lib/db';

/** @type {import('./$types').RequestHandler} */
export const POST = async ({request, cookies, url}) => {
    /** @type {{id:string, pass:string}} */
    const json = await request.json();
    const res = await checkUser(json.id, json.pass);
    if(!res.status){
        return new Response(JSON.stringify(res), {
            status:403
        });
    }
    let hash = await getHash(res.reason);
    cookies.set('hash', hash, {
        maxAge:3600 * 3, path:'/', secure:url.protocol === 'https:'
    });
    cookies.set('user_id', res.reason, {
        maxAge:3600 * 3, path:'/', secure:url.protocol === 'https:'
    });
    res.reason = url.searchParams.get('url') ?? '/';
    return new Response(JSON.stringify(res));
}

/** @type {import('./$types').RequestHandler} */
export const PATCH = async ({cookies, request }) => {
    let hash = cookies.get('hash');
    let id = cookies.get('user_id');
    let url = new URL(await request.text());
    if(url.pathname === '/login'){
        cookies.delete('hash');
        cookies.delete('user_id');
        return new Response(JSON.stringify({
            status:true,
            reason:''
        }), {
            status:200
        });
    }
    let redirectUrl = `/login?url=${url.pathname}`;
    if(hash && id){
        const data = await getHash(id);
        if(!data || data !== hash){
            cookies.delete('hash');
            cookies.delete('user_id');
            return new Response(JSON.stringify({
                status:false,
                reason:redirectUrl
            }), {
                status:302
            });
        }
        cookies.set('hash', hash, {
            maxAge:3600 * 3, path:'/', secure:url.protocol === 'https:'
        });
        cookies.set('user_id', id, {
            maxAge:3600 * 3, path:'/', secure:url.protocol === 'https:'
        });
        return new Response(JSON.stringify({
            status:true,
            reason:''
        }), {
            status:200
        });
    } else {
        cookies.delete('hash');
        cookies.delete('user_id');
        return new Response(JSON.stringify({
            status:false,
            reason:redirectUrl
        }), {
            status:302
        });
    }
}