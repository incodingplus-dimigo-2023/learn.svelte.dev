/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_CONTENT: string;
    readonly VITE_FIRST: string;
    readonly VITE_DB_HOST:string;
    readonly VITE_DB_PORT:string;
    readonly VITE_DB_BASE:string;
    readonly VITE_DB_USER:string;
    readonly VITE_DB_PASS:string;
    readonly VITE_HASH_SECRET:string;
    readonly VITE_PASSWORD:string;
}
//   interface ImportMeta {
//     readonly env: ImportMetaEnv
//   }