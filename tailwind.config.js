/** 
 * @type {import('tailwindcss').Config} 
 */

// Importér Tailwind CSS-farver fra 'tailwindcss/colors'
const colors = require('tailwindcss/colors')

// Eksporter konfigurationen for Tailwind CSS
export default {
  // Indhold, der skal behandles af Tailwind CSS
  content: [
    "./index.html",  // HTML-filen til indhold
    "./src/**/*.{js,ts,jsx,tsx}",  // JavaScript- og TypeScript-filer i src-mappen
  ],
  // Tema konfiguration
  theme: {
    // Farvekonfiguration
    colors: {
      transparent: 'transparent',  // Gennemsigtig farve
      'white': '#ffffff',  // Hvid farve
      'darkpurple': '#2e1065',  // Mørk lilla farve
      'purple': '#6b21a8',  // Lilla farve
      'magenta': '#a54a95',  // Magenta farve
      'blue': '#4e5ca6',  // Blå farve
      'black': '#030712',  // Sort farve
      'pink': '#ff85bb',  // Lyserød farve
      'gold': '#bc9b6b',  // Guld farve
      'link': '#bc9b6b',  // Link farve
    },
    // // Udvid temaet
    //extend: {
      // Konfiguration for skrifttyper
      //fontFamily: {
        //sans: ['BaileysDrizzle-Regular'],  // Sans-serif skrifttype
        //body: ['BrandonGrotesque-Regular'],  // Skrifttype for brødtekst
      //},
    //}, 
  },
  // Plugins
  plugins: [],
}
