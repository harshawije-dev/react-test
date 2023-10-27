/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "main-image": "url(/public/bg/skybox.jpg)",
        "hero-image": "url(/public/bg/skybox2.jpg)",
        "fallback-image": "url(/public/bg/skybox3.jpg)",
      },
    },
  },
  plugins: [],
};
