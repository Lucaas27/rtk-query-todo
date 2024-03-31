# Template React 18 + TypeScript + Vite + TailwindCSS

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## The ESLint configuration

ESlint is configured to work along side Prettier using eslint-config-prettier and eslint-plugin-prettier.
A few other necessary eslint plugins are also set up.

Simple-git-hooks is set up in the project. There are git hooks set up via Simple-git-hooks which will run ESLint on every commit and format with prettier on push.
If there are unfixable ESLint errors, the commit will be blocked until those issues are resolved manually.
