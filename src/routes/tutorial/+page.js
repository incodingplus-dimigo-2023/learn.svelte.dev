import { redirect } from '@sveltejs/kit';

export function load() {
	throw redirect(307, `/tutorial/${import.meta.env.VITE_FIRST ?? 'welcome-to-svelte'}`);
}
