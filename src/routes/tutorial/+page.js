import { redirect } from '@sveltejs/kit';
import dotenv from 'dotenv';

dotenv.config();

export function load() {
	throw redirect(307, `/tutorial/${process.env.FIRST ?? 'welcome-to-svelte'}`);
}
