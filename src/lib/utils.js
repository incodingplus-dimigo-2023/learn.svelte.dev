import { writable } from "svelte/store";

/** @param {string} name */
export function get_depth(name) {
	return name.split('/').length - 1;
}

/**
 * 
 * @param {string} str 
 */
export function myAlert(str){
	alert(str);
}


export const repoInfo = {
	owner:'incodingplus-dimigo-2023',
	repo:'learn.svelte.student'
};

export const isTeacher = writable(false);
/** @type {Record<string, string>} */
const chars = {
	'&': '&amp;',
	'<': '&lt;',
	'>': '&gt;'
};

/** @param {string} html */
export function escape_html(html) {
	return html.replace(/[&<>]/g, (c) => chars[c]);
}

/** @param {string} path */
export function posixify(path) {
	return path.replace(/\\/g, '/');
}
