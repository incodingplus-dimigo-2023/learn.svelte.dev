import { redirect } from '@sveltejs/kit';
import { getHash } from "$lib/db";

/** @type {import('./$types').LayoutServerLoad} */
export const load = async ({cookies, url}) => {
    if(url.pathname === '/login'){
        cookies.delete('hash');
        cookies.delete('user_id');
        return;
    }
    let hash = cookies.get('hash');
    let id = cookies.get('user_id');
    let redirectUrl = `/login?url=${url.pathname}`;
    if(hash && id){
        const data = await getHash(id);
        if(!data || data !== hash){
            cookies.delete('hash');
            cookies.delete('user_id');
            throw redirect(302, redirectUrl);
        }
        cookies.set('hash', hash, {
            maxAge:3600 * 3, path:'/', secure:url.protocol === 'https:'
        });
        cookies.set('user_id', id, {
            maxAge:3600 * 3, path:'/', secure:url.protocol === 'https:'
        });
        if(url.pathname === '/') throw redirect(302, '/tutorial');
    } else {
        cookies.delete('hash');
        cookies.delete('user_id');
        throw redirect(302, redirectUrl);
    }
}