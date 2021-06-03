  // tailwind.config.js
  module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
     darkMode: false, // or 'media' or 'class'
     theme: {
       extend: {
         colors:{
          'color-primary': '#4305EB', 
          'color-primary-light': '#A98CF6', 
          'color-primary-dark': '#2C0C6A'
         }
       },
     },
     variants: {
       extend: {},
     },
     plugins: [
      require('@tailwindcss/forms'),
     ],
   }