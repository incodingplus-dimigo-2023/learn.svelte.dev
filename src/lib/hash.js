const secret = import.meta.env.VITE_HASH_SECRET ?? process.env.VITE_HASH_SECRET;
const encoder = new TextEncoder();
/**
 * 
 * @param {ArrayBuffer} buffer 
 * @returns {string}
 */
const arrayBufferToBase64 = buffer => {
    let binary = '';
    let bytes = new Uint8Array( buffer );
    let len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
        binary += String.fromCharCode( bytes[ i ] );
    }
    return Buffer.from( binary ).toString('base64url');
};
/**
 * 
 * @param {string} id
 * @param {string} date
 * @returns {Promise<string>} 
 */
export const getHash = async (id, date) => {
    const arr = [id, secret, date];
    /** @type {string[]} */
    const strs = [];
    for(let i = 0; i < 30; i++){
        strs[i] = arr[i % arr.length];
    }
    const resultArr = new Uint8Array(encoder.encode(strs.join('')));
    const arrBuffer = await crypto.subtle.digest('sha-256', resultArr);
    return arrayBufferToBase64(arrBuffer);
};