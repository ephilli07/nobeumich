/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        nobe: {
          navy: "#00284d",
          mist: "#93a3b4",
          gray: "#999999",
          line: "#c1c1c1",
        },
      },
    },
  },
  plugins: [],
};
