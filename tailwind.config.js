/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins: ['Poppins' ,"sans-serif"],
      },
      colors:{
        gray: {
          950: '#121212',
          20:"#101010",
          10:"#181818",
          
        },
      },
        height:{
          36:"35.5rem",
          64:"64px",
          65:"75px",
          48:"48px",
          45:"46px",
        },
        width:{
          6:"109.38px",
          10:"180px",
          11:"50px",
          12:"160px"
        },
        borderRadius:{
          8:"8px",
          top:{
            t:'8px'
          },
          bottom:{
            b:'8px'
          }
        },
        fontSize:{
          18:"17px"
        }
    },
  },
  plugins: [],
}

