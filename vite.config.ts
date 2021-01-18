import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  alias: [
    {
      find: '/@',
      replacement: path.resolve(path.resolve(__dirname), './src'),
    },
  ],
  optimizeDeps: {
    include: ['@ant-design/icons-vue/MinusOutlined', '@ant-design/icons-vue/PlusOutlined'],
  },
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
});
