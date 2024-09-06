/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Tailwind CSS가 스타일을 적용할 파일 경로
  ],
  theme: {
    extend: {
      colors: {
        // 사용자 정의 색상 추가
        "main-color": "#347fff",
      },
    },
  },
  plugins: [],
};
