/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './../../*.{html,js}',
    './src/**/*.{html,js}',
  ],

  theme: {
    extend: {
      borderRadius: {
        sm: '3px'
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],  // Substitua 'Roboto' pelo nome da sua fonte
      },
      colors: {
        'ftem_bl1': '#44E0FE',
        'ftem_bl2': '#00A3C2',
        'ftem_bl3': '#05687B',

        'ftem_b1': '#3483E5',
        'ftem_b2': '#104F9E',
        'ftem_b3': '#113C7C',

        'ftem_d1': '#3D535E',
        'ftem_d2': '#2B3940',
        'ftem_d3': '#142026',
        'ftem_d4': '#172433',

        'ftem_g1': '#F4F5F8',
        'ftem_g2': '#808080',
        'ftem_g3': '#505050',
        'ftem_g4': '#303030'
      },
      backgroundImage: {
        'gradient-lite-blue': 'linear-gradient(90deg, #B6C9E1 0%, #EFF8FD 100%)',
        none: 'none',
      },
    }
  },

  plugins: [],
}
