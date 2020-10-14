module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    // Just for trialing
    'react/prop-types': 0,
    'react/jsx-filename-extension': 0,
    'import/no-extraneous-dependencies': ['error', {
      packageDir: [
        '.',
        './@leshen/ui',
        './gatsby-theme-tuna',
        './site',
      ],
    }],
  },
};
