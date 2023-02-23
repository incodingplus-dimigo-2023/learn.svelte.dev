import { next, rewrite } from '@vercel/edge';
export const config = {
	matcher:['/tutorial', '/tutorial/:slug']
}
/**
 * 
 * @param {Request} _request 
 */
export default function middleware(_request) {
	console.log(_request.url);
	const response = new Response();
	response.headers.set('cross-origin-opener-policy', 'same-origin');
	response.headers.set('cross-origin-embedder-policy', 'require-corp');
	response.headers.set('cross-origin-resource-policy', 'cross-origin');
	response.headers.set('x-middleware-next', '1');
	return response;
}
