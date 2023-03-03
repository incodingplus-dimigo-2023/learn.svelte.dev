import { clearAllCookies } from '$lib/cookie';

export const prerender = false;

/** @type {import('./$types').PageServerLoad} */
export const load = ({cookies}) => {
    console.log(cookies.get('hash'));
    clearAllCookies(cookies);
}