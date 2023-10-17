import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      padding: {
        DEFAULT: '0.5rem',
        sm: '0rem',
        lg: '0rem',
        xl: '8rem',
        '2xl': '10rem',
      },
    },
    colors: {
      '-px-primaryColor': '#ec4949',
      '-px-secondaryColor': '#f08383',
      '-px-accentColor': '#f4bebe',
      '-px-blue': '#0d6efd',
      '-px-indigo': '#6610f2',
      '-px-purple': '#6f42c1',
      '-px-pink': '#d63384',
      '-px-red': '#dc3545',
      '-px-orange': '#fd7e14',
      '-px-yellow': '#ffc107',
      '-px-green': '#198754',
      '-px-teal': '#20c997',
      '-px-cyan': '#0dcaf0',
      '-px-white': '#fff',
      '-px-gray': '#6c757d',
      '-px-gray-dark': '#343a40',
      '-px-primary': '#0d6efd',
      '-px-secondary': '#6c757d',
      '-px-success': '#198754',
      '-px-info': '#0dcaf0',
      '-px-warning': '#ffc107',
      '-px-danger': '#dc3545',
      '-px-light': '#f9f9f9',
      '-px-dark': '#242243',
      // ...
    },
  },
  darkMode: "class",

  plugins: [nextui(
    {
      themes: {
        light: {
          // ...
          colors: {
            primary: {
              DEFAULT: '#ec4949',
              foreground: '#ec4949'
            },

          },
        },
        dark: {
          // ...
          colors: {
            primary: {
              DEFAULT: '#ec4949',
              foreground: '#ec4949'
            },
          },
        },
        // ... custom themes
      },
    }
  )],
}

