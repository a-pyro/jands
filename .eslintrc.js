// module.exports = {
//   parser: '@typescript-eslint/parser',
//   parserOptions: {
//     project: true,
//     // "sourceType": "module"
//   },
//   plugins: ['@typescript-eslint'],
//   extends: [
//     'plugin:@next/next/recommended',
//     'plugin:@typescript-eslint/recommended-type-checked',
//     'plugin:@typescript-eslint/stylistic-type-checked',
//     // "simple-import-sort",
//     // "sort-keys"
//   ],
//   rules: {
//     // These opinionated rules are enabled in stylistic-type-checked above.
//     // Feel free to reconfigure them to your own preference.
//     '@typescript-eslint/array-type': 'off',
//     '@typescript-eslint/consistent-type-definitions': 'off',

//     '@typescript-eslint/consistent-type-imports': [
//       'warn',
//       {
//         prefer: 'type-imports',
//         fixStyle: 'inline-type-imports',
//       },
//     ],

//     '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
//     '@typescript-eslint/require-await': 'off',
//     '@typescript-eslint/no-misused-promises': [
//       'error',
//       {
//         checksVoidReturn: { attributes: false },
//       },
//     ],
//     // "simple-import-sort/imports": "error",
//     // "simple-import-sort/exports": "error",,
//     // "sort-keys": 0, // disable default eslint sort-keys
//     // "sort-keys/sort-keys-fix": 1,
//     // ...
//     // "ignorePatterns": ["next.config.js"]
//     // ...
//   },
// };

// https://github.com/vercel/style-guide#eslint
// https://mwskwong.com/blog/enforcing-coding-style-with-vercel-style-guide

const { resolve } = require('node:path')

const project = resolve(__dirname, 'tsconfig.json')

module.exports = {
  root: true,
  extends: [
    require.resolve('@vercel/style-guide/eslint/browser'),
    require.resolve('@vercel/style-guide/eslint/react'),
    require.resolve('@vercel/style-guide/eslint/next'),
    require.resolve('@vercel/style-guide/eslint/node'),
    require.resolve('@vercel/style-guide/eslint/typescript'),
  ],
  parserOptions: { project },
  settings: {
    'import/resolver': { typescript: { project } },
    /**
     * enable MUI Joy components to be checked
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y?tab=readme-ov-file#configurations}
     */
    'jsx-a11y': {
      polymorphicPropName: 'component',
      components: {
        Button: 'button',
        Icon: 'svg',
        IconButton: 'button',
        Image: 'img',
        Input: 'input',
        Link: 'a',
        List: 'ul',
        ListItem: 'li',
        ListItemButton: 'button',
        ListDivider: 'li',
        NextImage: 'img',
        NextLink: 'a',
        SvgIcon: 'svg',
        Textarea: 'textarea',
      },
    },
  },
  rules: {
    '@typescript-eslint/consistent-type-imports': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/no-confusing-void-expression': [
      'error',
      { ignoreArrowShorthand: true },
    ],
    // '@typescript-eslint/no-shadow': 'off',
    '@typescript-eslint/no-misused-promises': [
      'error',
      { checksVoidReturn: false },
    ],
    // such that @/* imports will not be considered as external dependencies
    'react/function-component-definition': [
      'warn',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    // sort import statements
    'import/order': [
      'warn',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
        alphabetize: { order: 'asc' },
      },
    ],
    // sort named imports within an import statement
    'sort-imports': ['warn', { ignoreDeclarationSort: true }],
  },
  overrides: [
    // Next.js App Router file convention
    // Must use default export
    {
      files: [
        'middleware.ts',
        'app/**/page.tsx',
        'app/**/layout.tsx',
        'app/**/not-found.tsx',
        'app/**/*error.tsx',
        'app/**/loading.tsx',
        'app/sitemap.ts',
        'app/robots.ts',
        'app/manifest.ts',
      ],
      rules: {
        'import/no-default-export': 'off',
        'import/prefer-default-export': ['error', { target: 'any' }],
      },
    },
    // module declarations
    {
      files: ['**/*.d.ts'],
      rules: { 'import/no-default-export': 'off' },
    },
  ],
}
