module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'plugin:react/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  plugins: ['react-refresh', 'react-hooks', 'jsx-a11y', '@typescript-eslint', 'react-hooks'],
  ignorePatterns: ['dist', '.eslintrc.cjs', '*.config.ts', '*.config.js', 'data/generateData.*'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'prettier/prettier': ['error'],
    'import/extensions': ['error', 'ignorePackages', { ts: 'never', tsx: 'never' }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
    'max-len': ['warn', { code: 100, ignoreComments: true, ignoreUrls: true }],
    'react/prop-types': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      alias: {
        map: [['', './public']],
        extensions: ['.js', '.jsx', 'ts', 'tsx'],
      },
    },
  },
};
