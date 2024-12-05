module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all files in the src folder
  ],
  theme: {
    extend: {
      colors: {
        'light-green': '#E2FEDC',
        'custom-teal': '#468890',
        'lightBlue': "rgb(169, 210, 224)" 
      },
      backgroundImage: {
        'login-bg': "url('/assets/pexels-vo-van-ti-n.jpg')", // Relative to the public folder
      },
    },
  },
  plugins: [],
};
