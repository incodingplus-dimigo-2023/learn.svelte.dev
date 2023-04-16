import path from 'path';
import { glob } from 'glob';
import { fileURLToPath } from 'url';
import fs from 'fs';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dest = process.argv[2];

if(!fs.existsSync(dest)){
    throw Error('존재하지 않는 경로');
}
const rel = path.relative(path.resolve('./'), path.resolve(__dirname, '../content_kor/tutorial'));
const root = `${rel.replaceAll(path.sep, path.posix.sep)}`;

let appA, common, meta;
try{
    appA = await glob(`${root}/**/home/*/app-a/`);
    common = await glob(`${root}/**/common/`);
    meta = await glob(`${root}/**/meta.json`);
} catch(err){
    throw err
}
console.log(root)

fs.rmSync(path.resolve(dest, 'content'), {
    force:true,
    recursive:true,
});
for(let i of appA){
    const curDest = path.resolve(dest, 'content/tutorial', i.replace(root, '.'));
    const resArr = curDest.split(path.sep);
    let index = resArr.lastIndexOf('home');
    if(index === -1) continue;
    resArr.splice(index, 1);
    fs.cpSync(i, resArr.join(path.sep), {
        force:true,
        recursive:true,
    });
    fs.cpSync(i, path.resolve(resArr.join(path.sep), '../app-b'), {
        force:true,
        recursive:true,
    });
}


for(let i of [...common, ...meta]){
    const curDest = path.resolve(dest, 'content/tutorial', i.replace(root, '.'));
    if(!fs.existsSync(path.dirname(curDest))) continue;
    fs.cpSync(i, curDest, {
        force:true,
        recursive:true,
    });
}