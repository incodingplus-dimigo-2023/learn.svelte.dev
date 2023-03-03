import { getAllCookies, clearAllCookies, setAllCookies } from './src/lib/cookie.js';
import { getHash } from './src/lib/hash.js';

const secret = process.env.VITE_HASH_SECRET;
const TEACHER = process.env.VITE_PASSWORD;
class MiddleCookie{
	/** @type {Headers} */
	headers;
	/** @type {Map<string,string>} */
	cookie = new Map();
	/**
	 * 
	 * @param {Request} req
	 * @param {Response} res
	 */
	constructor(req, res){
		this.headers = res.headers;
		let raw = req.headers.get('cookie') ?? '';
		/** @type {string[]} */
		let arr = [];	
		if(raw){
			arr = raw.split('; ');
		}
		for(let i of arr){
			let t = i.split('=', 2);
			this.cookie.set(t[0], decodeURIComponent(t[1]));
		}
	}
	/**
	 * 
	 * @param {string} key
	 */
	get(key){
		return this.cookie.get(key);
	}
	/**
	 * 
	 * @param {string} key
	 * @param {string} value
	 * @param {import('cookie').CookieSerializeOptions=} options
	 */
	set(key, value, options){
		/** @type {string[]} */
		const token = [];
		if(options.expires) token.push(`; Expires=${options.expires.toUTCString()}`);
		if(options.httpOnly) token.push(`; HttpOnly`);
		if(options.secure) token.push(`; Secure`);
		if(options.domain) token.push(`; Domain=${encodeURI(options.domain)}`);
		if(options.maxAge) token.push(`; Max-Age=${options.maxAge}`);
		if(options.path) token.push(`; Path=${encodeURI(options.path)}`);
		if(options.sameSite) token.push(`; SameSite=${options.sameSite === 'strict' || options.sameSite === true ? 'Strict' : 'Lax'}`);
		this.headers.append('set-cookie', `${key}=${encodeURIComponent(value)}${token.join('')}`);
	}

	
	/**
	 * 
	 * @param {string} key
	 * @param {import('cookie').CookieSerializeOptions=} options
	 */
	delete(key, options){
		this.headers.append('set-cookie', `${key}=; Max-Age=0`);
	}
}

/**
 * 
 * @param {Request} request 
 * @param {MiddleCookie} cookies 
 * @returns {Promise<{
 * 	check:true;
 * 	teacher:boolean;
 * }| {
 * 	check:false;
 * 	teacher:boolean;
 * 	rewrite:string;
 * }>}
 */
const check = async (request, cookies) => {
	let { hash, id, date, teacher } = getAllCookies(cookies);
    let url = new URL(request.url);
    let redirectUrl = `/login?url=${url.pathname}`;
    if(hash && id && date){
        const data = await getHash(id, date, secret);
        let reason = 'student';
        if(!data || data !== hash){
            clearAllCookies(cookies);
			return {
				check:true,
				teacher: false,
				rewrite:redirectUrl,
			};
        }
        let newDate = String(Date.now());
        if(teacher && teacher === await getHash(TEACHER, date, secret)){
            teacher = await getHash(TEACHER, newDate, secret);
            reason = 'teacher';
        } else {
            teacher = '';
        }
        id = hash;
        hash = await getHash(id, newDate, secret);
        setAllCookies(cookies, { hash, date:newDate, id, teacher }, url.protocol === 'https:');
        return {
			check:true,
			teacher: Boolean(teacher)
		};
    } else {
        clearAllCookies(cookies);
        return {
			check:false,
			teacher:false,
			rewrite:redirectUrl
		}
    }
}


/**
 * 
 * @param {Request} _request 
 */
export default async function middleware(_request) {
	const response = new Response();
	const url = new URL(_request.url, _request.url);
	if(url.startsWith('/tutorial')){
		const cookies = new MiddleCookie(_request, response);
		const login = await check(_request, cookies);
		if(!login.check){
			console.log(login, new URL(login.rewrite, _request.url));
			return Response.redirect(new URL(login.rewrite, _request.url));
		}
	}
	response.headers.set('cross-origin-opener-policy', 'same-origin');
	response.headers.set('cross-origin-embedder-policy', 'require-corp');
	response.headers.set('cross-origin-resource-policy', 'cross-origin');
	response.headers.set('x-middleware-next', '1');
	return response;
}
