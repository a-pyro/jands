const vercelPrettierOptions = require('@vercel/style-guide/prettier')

/** @type {import('prettier').Options} */
module.exports = {
  ...vercelPrettierOptions,
  plugins: ['prettier-plugin-tailwindcss'],
  // your options to override Vercel's options
  semi: false,
}
