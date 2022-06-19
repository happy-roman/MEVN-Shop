module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'global-require': 'off',
    'import/no-dynamic-require': 'off',
    'linebreak- style': 'off',
  },
};
