import pg from 'pg';
import { getHash } from '$lib/hash';

const pool = new pg.Pool({
    user:import.meta.env.VITE_DB_USER ?? process.env.VITE_DB_USER,
    password:import.meta.env.VITE_DB_PASS ?? process.env.VITE_DB_PASS,
    host:import.meta.env.VITE_DB_HOST ?? process.env.VITE_DB_HOST,
    database:import.meta.env.VITE_DB_BASE ?? process.env.VITE_DB_BASE,
    port:Number(import.meta.env.VITE_DB_PORT ?? process.env.VITE_DB_PORT),
})


/**
 * 
 * @param {string} user 
 * @param {string} pass 
 * @param {string} date 
 * @returns {Promise<{
 *  status:boolean;
 *  reason:string;
 * }>}
 */
export const checkUser = async (user, pass, date) => {
    const name = user.match(/^[가-힣]+/)?.[0];
    const phone5 = user.match(/[0-9]{5}$/)?.[0];
    const message = {
        status:false,
        reason:'',
    };
    if(!name) message.reason = '유저 이름이 한글이 아닙니다.';
    if(!phone5) message.reason = '전화번호 뒷 숫자 5자리까지 적어주세요.';
    if(pass.length !== 7) message.reason = '주민번호 앞 숫자 7자리까지 적어주세요.';
    if(!name || !phone5 || pass.length !== 7) return message;
    /** @type {import('pg').PoolClient|null} */
    let client = null;
    try{
        client = await pool.connect();
        /** @type {import('pg').QueryResult<{id:string}>} */
        const res = await client.query(`select id from svc_student ss
        where ss.status = '재원' and
            ss."name" = '${name}' and
            ss.phone_number ~ '.+${phone5[0]}\-${phone5.slice(1)}$' and
            ss.personal_code = '${pass.slice(0, 6)}\-${pass[6]}'`);
            if(res.rowCount !== 0) {
                message.status = true;
                message.reason = await getHash(res.rows[0].id, date);
            } else message.reason = '해당 유저는 퇴원했거나, 존재하지 않는 유저입니다.';
            return message;
    } catch(err){
        if(client) client.release();
        message.reason = '연결 오류 발생';
        console.log(err);
        return message;
    }
}