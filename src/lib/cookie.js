/**
 * @param {import("@sveltejs/kit").Cookies} cookies
 */
export const clearAllCookies = (cookies) => {
    cookies.delete('hash', { path:'/' });
};

/**
 * @param {import("@sveltejs/kit").Cookies} cookies
 * @returns {{hash:string|undefined;id:string|undefined;date:string|undefined;teacher:string|undefined}}
 */
export const getAllCookies = (cookies) => {
    let hash = cookies.get('hash');
    try{
        let obj = JSON.parse(hash ?? '{}');
        return obj;
    } catch(err){
        clearAllCookies(cookies);
        return {
            hash:'',
            date:'',
            id:'',
            teacher:'',
        };
    }

};

/**
 * @param {import("@sveltejs/kit").Cookies} cookies
 * @param {{hash:string;id:string;date:string;teacher:string}} obj
 */
export const setAllCookies = (cookies, obj, secure = true) => {
    cookies.set('hash', JSON.stringify(obj), {
        maxAge:3600 * 3, path:'/', secure, httpOnly:true
    });
    return obj;
};