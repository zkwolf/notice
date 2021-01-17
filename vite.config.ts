import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  optimizeDeps: {
    include: [
      '@ant-design/icons-vue/MinusOutlined',
      '@ant-design/icons-vue/PlusOutlined'
    ]
  },
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      }
    }
  }
})
