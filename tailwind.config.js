// filepath: /home/prathamesh/VS_CODE/tailwind/tailwind.config.js
module.exports = {
    theme: {
      extend: {
        fontWeight: {
          extrabold: '800', // Ensure this is defined
        },
      },
    },
    content: [
      './app/**/*.{html,js,ts,jsx,tsx}', // Ensure all relevant files are included
    ],
  };