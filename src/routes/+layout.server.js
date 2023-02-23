export const prerender = true;

/** @type {import('./$types').LayoutServerLoad} */
export const load = ({request}) => {
	let isTeacher = request.headers.get('teacher') === 'true' ? true : false;
    return {
        isTeacher
    };
}