const eslintConfig = {
  extends: ["airbnb-base", "react-app", "plugin:prettier/recommended"],
  rules: {
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "import/no-named-as-default": "off",
    "import/no-default-export": "error",
    "@typescript-eslint/no-unused-vars": [
      "off",
      {
        args: "all",
        argsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
        ignoreRestSiblings: false,
        caughtErrors: "all",
        varsIgnorePattern: "^_",
      },
    ],
    "linebreak-style": "off",
    quotes: "off",
    "lines-between-class-members": 0,
    "object-curly-newline": "off",
    "no-restricted-globals": "off",
    "arrow-body-style": "error",
    "import/extensions": "off",
    "@typescript-eslint/consistent-type-assertions": [
      "off",
      { assertionStyle: "angle-bracket" },
    ],
    "func-names": [
      "off",
      {
        generators: "as-needed",
      },
    ],
  },
}

module.exports = eslintConfig
