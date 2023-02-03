/**
 * @param {import("@sveltejs/kit").Cookies} cookies
 */
export const clearAllCookies = (cookies) => {
    cookies.delete('hash', { path:'/' });
    cookies.delete('user_id', { path:'/' });
    cookies.delete('token', { path:'/' });
    cookies.delete('teacher', { path:'/' });
};

/**
 * @param {import("@sveltejs/kit").Cookies} cookies
 * @returns {{hash:string|undefined;id:string|undefined;date:string|undefined;teacher:string|undefined}}
 */
export const getAllCookies = (cookies) => {
    let hash = cookies.get('hash');
    let id = cookies.get('user_id');
    let date = cookies.get('token');
    let teacher = cookies.get('teacher');
    return { hash, id, date, teacher };
};

/**
 * @param {import("@sveltejs/kit").Cookies} cookies
 * @param {{hash:string;id:string;date:string;teacher:string}} obj
 */
export const setAllCookies = (cookies, obj, secure = true) => {
    let { hash, id, date, teacher } = obj;
    cookies.set('hash', hash, {
        maxAge:3600 * 3, path:'/', secure, httpOnly:true
    });
    cookies.set('user_id', id, {
        maxAge:3600 * 3, path:'/', secure, httpOnly:true
    });
    cookies.set('token', date, {
        maxAge:3600 * 3, path:'/', secure, httpOnly:true
    });
    if(teacher){
        cookies.set('teacher', teacher, {
            maxAge:3600 * 3, path:'/', secure, httpOnly:true
        });
    } else {
        cookies.delete('teacher', {path:'/'});
    }
    return { hash, id, date };
};