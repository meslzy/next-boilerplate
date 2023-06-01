module.exports = {
  extends: [
    "@meslzy/eslint-config/react",
    "@meslzy/eslint-config/next",
    "plugin:storybook/recommended",
  ],
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  rules: {
    "react-hooks/rules-of-hooks": "off",
  },
};