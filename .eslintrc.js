module.exports = {
  env: {
    node: true,
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: 'babel-eslint',
  },
  rules: {
    'global-require': 'off',
    'import/no-dynamic-require': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
};
