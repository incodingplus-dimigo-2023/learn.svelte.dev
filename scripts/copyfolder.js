import glob from 'glob';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dest = process.argv[2];
if(!fs.existsSync(dest)){
    throw Error('존재하지 않는 경로');
}
const rel = path.relative(path.resolve('./'), path.resolve(__dirname, '../content_kor/tutorial'));
const root = `./${rel.replaceAll(path.sep, path.posix.sep)}`;
glob(`${root}/**/home/*/app-a/`, (e, arr) => {
    fs.rmSync(path.resolve(dest, 'src'), {
        force:true,
        recursive:true,
    });
    for(let i of arr){
        const curDest = path.resolve(dest, 'src', i.replace(root, '.'));
        const resArr = curDest.split(path.sep);
        let index = resArr.lastIndexOf('home');
        if(index === -1) continue;
        resArr.splice(index, 1);
        fs.cpSync(i, resArr.join(path.sep), {
            force:true,
            recursive:true,
        });
    }
})