import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    ignores: ["**/*.jsx"],
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        require: "readonly",
        module: "readonly",
        __dirname: "readonly",
      },
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      "no-unused-vars": ["off"],
      "no-empty": ["error", { allowEmptyCatch: true }],
      "react/prop-types": [0],
    },
  },
];
