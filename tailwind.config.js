/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Tailwind CSS가 스타일을 적용할 파일 경로
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  // 모바일에선 hover 스타일 막기
  future: {
    hoverOnlyWhenSupported: true,
  },
};
