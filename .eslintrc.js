module.exports = {
  parser: "babel-eslint",
  env: {
    node: true,
    browser: true,
    es6: true
  },
  extends: ["plugin:react/recommended", "eslint:recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true
    }
  },
  plugins: ["react"],
  rules: {
    "no-console": "off",
    "no-unused-vars": "off"
  }
};
