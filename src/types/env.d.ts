/// <reference types="vite/client" />

interface ImportMetaEnv {
  // 声明你的环境变量类型
  readonly VITE_API_BASE_URL: string; 
  // 可按需添加其他环境变量声明
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}