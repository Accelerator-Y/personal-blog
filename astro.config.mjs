// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // 部署上线后替换为实际域名，用于生成 canonical URL 和 RSS
  site: 'https://example.com',
});
