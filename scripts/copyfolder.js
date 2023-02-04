import glob from 'glob';
import path from 'path/posix';
import { fileURLToPath } from 'url';
console.log(pro)
console.log(process.argv[2])
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const o = path.parse('.');
const p = path.resolve(__dirname, '..','content_kor/tutorial');
console.log(o, p);
// glob(`${p}\\`, (e, arr) => {
//     console.log(arr);
// })