import cypress from "eslint-plugin-cypress";
import mocha from "eslint-plugin-mocha";
import chaiFriendly from "eslint-plugin-chai-friendly";
import babelParser from "babel-eslint";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  ...compat.extends(
    "plugin:cypress/recommended",
    "plugin:mocha/recommended",
    "plugin:chai-friendly/recommended"
  ),
  {
    plugins: {
      cypress,
      mocha,
      "chai-friendly": chaiFriendly,
    },

    languageOptions: {
      parser: babelParser,
    },
  },
];
