import { get_homework } from '$lib/server/homework';
import { error } from '@sveltejs/kit';
import AdmZip from 'adm-zip';

/**
 * @type {import('./$types').RequestHandler}
 */
export function POST({params}){
    const exercise = get_homework(params.slug, params.home);
    console.log(params);
	if (!exercise) {
		throw error(404, 'No such tutorial found');
	}

    const arr = Object.entries(exercise.a);

    let zip = new AdmZip();
    for(let [k, v] of arr){
        if(v.type === 'file'){
            if(v.text){
                zip.addFile(k, Buffer.from(v.contents, 'utf-8'));
            } else {
                zip.addFile(k, Buffer.from(v.contents, 'base64'))
            }
        }
    }
    console.log(zip);

	return new Response(zip.toBuffer());
}
