import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { spawnSync } from 'child_process';
const __root = path.resolve(fileURLToPath(import.meta.url), '..');
const envRoot = path.resolve(__root, '../.env');

try{
    fs.accessSync(envRoot);
    fs.rmSync(envRoot);
} catch(err){

}

fs.writeFileSync(envRoot, 'PUBLIC_USE_FILESYSTEM=true\nCONTENT=content_kor\nFIRST=hello-world-svelte', {encoding:'utf-8'});

spawnSync('npm', ['i'], {
    shell:true
});