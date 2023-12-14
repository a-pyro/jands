// module.exports = {
// "endOfLine": "lf",
// "semi": false,
// "tabWidth": 2,
// "printWidth": 80,
// "singleQuote": true,
// "trailingComma": "all",
// "bracketSpacing": true,
// plugins: ['prettier-plugin-tailwindcss'],
// };

const vercelPrettierOptions = require("@vercel/style-guide/prettier")

/** @type {import('prettier').Options} */
module.exports = {
  ...vercelPrettierOptions,
  plugins: ["prettier-plugin-tailwindcss"],
  // your options to override Vercel's options
  semi: false,
}
