/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-blue": "hsl(220, 98%, 61%)",
        "checked-bg":
          "linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)",
        title: "hsl(0 0% 98%)",
      },
      fontFamily: {
        josefin: "Josefin Sans, sans-serif",
      },
    },
  },
  plugins: [],
};
