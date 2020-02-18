module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  parser: "babel-eslint", // needed to make babel stuff work properly
  extends: ["airbnb"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    quotes: ["error", "backtick"],
    "import/no-unresolved": 2,
    "import/extensions": 0,
    "comma-dangle": ["error", "never"],
    "no-unused-vars": "warn",
    "object-curly-newline": ["error", { multiline: true }],
    "arrow-parens": ["error", "as-needed"],
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".tsx", ".ts"] }
    ],
    "react/prefer-stateless-function": [1, { ignorePureComponents: true }], //ignore components that use React.PureComponent
    "react/require-default-props": 0,
    "react/no-unused-prop-types": 0,
    "react/jsx-one-expression-per-line": 0,
    "react/jsx-props-no-spreading": 0,
    "react/jsx-curly-brace-presence": ["error", "always"]
  }
};
