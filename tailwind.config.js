module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      fontSize: {
        'h1': ['72px', {
          lineHeight: '84px',
          fontWeight: '400',
        }],
        'h2': ['52px', {
          lineHeight: '64px',
          fontWeight: '400',
        }],
        'h3': ['48px', {
          lineHeight: '56px',
          fontWeight: '400',
        }],
        'h4': ['28px', {
          lineHeight: '40px',
          fontWeight: '400',
        }],
        'h5': ['24px', {
          lineHeight: '36px',
          fontWeight: '400',
        }],
        'h6': ['20px', {
          lineHeight: '32px',
          fontWeight: '400',
        }],
        'description': ['18px', {
          lineHeight: '28px',
          fontWeight: '400',
        }],
        'caption': ['14px', {
          lineHeight: '24px',
          fontWeight: '400',
        }],
      },
      colors: {
        'black-base': '#0A0A0A',
        'black-light': '#727272',
        'black-lighter': '#A6A6A6',
        'grey-base': '#F2F2F2',
        'white': '#ffffff',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.font-inter-regular': {
          fontWeight: '400',
        },
        '.font-inter-medium': {
          fontWeight: '500',
        },
        '.font-inter-italic': {
          fontStyle: 'italic',
        },
      });
    }
  ],
}; 