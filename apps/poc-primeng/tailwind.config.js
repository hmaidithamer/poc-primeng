const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        primary: '#c15451',
        'primary-light': '#c2283f',
        'text-dark': '#1a1a1a',
        background: '#f5f5f5',
        border: '#e0e0e0',
        white: '#ffffff'
      }
    },
  },
  plugins: [],
};
