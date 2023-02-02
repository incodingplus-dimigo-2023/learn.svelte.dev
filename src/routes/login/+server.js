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