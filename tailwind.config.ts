import type { Config } from 'tailwindcss'
const {
  default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette')

const addVariablesForColors = ({ addBase, theme }: any) => {
  let allColors = flattenColorPalette(theme('colors'))
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  )
  addBase({
    ':root': newVars,
  })
}

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        marker: ['var(--font-marker)'],
        orbitron: ['var(--font-orbitron)'],
      },
    },
  },
  plugins: [addVariablesForColors],
}

export default config
