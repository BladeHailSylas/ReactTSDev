import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import axios from 'axios';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://192.168.0.212:8080',  // ✅ 서버 IP 사용
    },
  },
});
// ✅ 상대 경로 사용 (Vite가 자동으로 프록시)
export const getPosts = async () => {
  const res = await axios.get('/api/posts');
  return res.data;
};