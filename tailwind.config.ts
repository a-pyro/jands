import aspectRatio from '@tailwindcss/aspect-ratio'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        logo: 'var(--color-logo)',
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        warning: 'var(--color-warning)',
        danger: 'var(--color-danger)',
        success: 'var(--color-success)',
        light: 'var(--color-light)',
        dark: 'var(--color-dark)',
        info: 'var(--color-info)',
      },
    },
    container: {
      center: true,
    },
    animation: {
      'ltr-linear-infinite': 'ltr-linear-infinite 100s linear infinite',
    },
    keyframes: {
      'ltr-linear-infinite': {
        from: { 'background-position': '0 0' },
        to: { 'background-position': '400% 0%' },
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [aspectRatio],
}
export default config
