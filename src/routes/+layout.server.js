import { getAllCookies } from '$lib/cookie';

export const prerender = true;

/** @type {import('./$types').LayoutServerLoad} */
export const load = ({cookies}) => {
    let { teacher } = getAllCookies(cookies);
    let isTeacher = teacher ? true : false;
    return {
        isTeacher
    };
}