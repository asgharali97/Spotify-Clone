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
          30:"#242424",
          10:"#181818",
          
        },
      },
        height:{
          36:"33.9rem",
          37:"51px",
          38:"76px",
          39:"52px",
          64:"64px",
          65:"75px",
          41:"40px",
          48:"48px",
          45:"46px",
          46:"150px",
        },
        width:{
          39:"56px",
          6:"109.38px",
          10:"180px",
          41:"40px",
          11:"50px",
          12:"160px",
          13:"33vw",
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

