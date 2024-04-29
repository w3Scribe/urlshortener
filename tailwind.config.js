import { defineConfig } from 'windicss/helpers';
const paddingX = require('./paddingX');

module.exports = {
  content: [
    './src/**/*.{html,js,ejs}',
    './views/**/*.{html,js,ejs}',
  ],
  theme: {
    extend: {},
  },
  plugins: [paddingX],
};
