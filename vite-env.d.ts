/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference types="./app/store/types" />
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly API_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
