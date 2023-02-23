import { clearAllCookies } from '$lib/cookie';

export const prerender = false;

/** @type {import('./$types').PageServerLoad} */
export const load = ({cookies}) => {
    clearAllCookies(cookies);
}