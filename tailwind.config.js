/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      // "./src/**/*.{html,js}",
      "./public/**/*.{html,js}",
      "./public/porto.html",
   ],
   theme: {
      extend: {
         fontFamily: {
            ibm: ["IBMPlexMono-Regular", "sans"],
         },
         colors: {
            "regal-blue": "#5865F2",
            "regal-pink": "#E4405F",
            "regal-black": "#181717",
         },
      },
      container: {
         center: true,
         padding: "16px",
      },
   },
   plugins: [],
   //menambahkan dark-mode
   darkMode: "class",
};
