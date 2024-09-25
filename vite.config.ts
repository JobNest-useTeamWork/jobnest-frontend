import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// 로컬에서 발생하는 CORS에러 임시 해결을 위한 포트이동

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
});
