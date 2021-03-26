const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans]
      },
      colors: {
        // Personal page colors

        /* Light shades [ Desert Storm ]
           Use this color as the background for your dark-on-light designs, 
           or the text color of an inverted design. */
        "personal-white": "#F9F9F8",
        /* Light accent [ Gunsmoke ]
           Accent colors can be used to bring attention to design elements by
           contrasting them with the rest of the palette. */
        "personal-main-accent": "#898A8A",

        /* Main brand color [ Gray Chateau ]
           Liberally apply to layout. */
        "personal-main": "#A2A6AB",

        /* Dark accent [ Dark Manatee ]*/
        "personal-main-accent-light": "#8D8E95", 

        /* Dark shades [ Limed Spruce ]
           Text color for dark-on-light designs or background for inverted. */
        "personal-dark": "#313C47", 
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
