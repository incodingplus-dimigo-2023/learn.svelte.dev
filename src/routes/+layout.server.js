export const prerender = true;

/** @type {import('./$types').LayoutServerLoad} */
export const load = ({request}) => {
    console.log(request.headers.get('teacher'), typeof request.headers.get('teacher'));
	let isTeacher = request.headers.get('teacher') === 'true' ? true : false;
    return {
        isTeacher
    };
}