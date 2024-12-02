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
        'gradient-dark-blue': 'linear-gradient(90deg, rgba(16,79,158,1) 35%, rgba(16,79,158,0) 99%)',
        'gradient-dark-blue-up': 'linear-gradient(0deg, rgba(16,79,158,1) 35%, rgba(16,79,158,0) 99%)',
        'gradient-lite-blue': 'linear-gradient(90deg, #B6C9E1 0%, #EFF8FD 100%)',
        none: 'none',
      },
      width: {
        'col-1': 'calc((100% / 12))',
        'col-2': 'calc((100% / 12) * 2)',
        'col-3': 'calc((100% / 12) * 3)',
        'col-4': 'calc((100% / 12) * 4)',
        'col-5': 'calc((100% / 12) * 5)',
        'col-6': 'calc((100% / 12) * 6)',
        'col-7': 'calc((100% / 12) * 7)',
        'col-8': 'calc((100% / 12) * 8)',
        'col-9': 'calc((100% / 12) * 9)',
        'col-10': 'calc((100% / 12) * 10)',
        'col-11': 'calc((100% / 12) * 11)',
        'col-12': 'calc(100%)',
      },
    }
  },

  plugins: [],
}
