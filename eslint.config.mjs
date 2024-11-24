import globals from "globals";
import pluginJs from "@eslint/js";
import jestPlugin from 'eslint-plugin-jest';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "script",
      globals: {
        ...globals.browser, // Globales pour navigateur
        ...globals.jest,    // Globales pour Jest
        ...globals.node,    // Globales pour Node.js
      },
    },
    plugins: {
      ...Object.fromEntries(
        (pluginJs.configs.recommended.plugins || []).map(pluginName => [
          pluginName,
          pluginJs.configs.recommended.plugins[pluginName] || {},
        ])
      ),
      jest: jestPlugin, // Plugin Jest
    },
    rules: {
      ...(pluginJs.configs.recommended.rules || {}),
      ...(jestPlugin.configs.recommended.rules || {}),
    },
  },
];
