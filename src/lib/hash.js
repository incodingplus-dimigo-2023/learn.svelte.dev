/**
 * 
 * @param {string} id
 * @param {string} date
 * @param {string} secret
 * @returns {Promise<string>} 
 */
export const getHash = async (id, date, secret) => {
    const encoder = new TextEncoder();
    const arr = [id, secret, date];
    /** @type {string[]} */
    const strs = [];
    for(let i = 0; i < 30; i++){
        strs[i] = arr[i % arr.length];
    }
    const resultArr = new Uint8Array(encoder.encode(strs.join('')));
    const arrBuffer = await crypto.subtle.digest('sha-256', resultArr);
    const hashArray = Array.from(new Uint8Array(arrBuffer));                     // convert buffer to byte array
    const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join(''); // convert bytes to hex string
    return hashHex;
};