import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import pluginReact from "eslint-plugin-react";


export default defineConfig([
  { 
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: { globals: globals.browser },
    plugins: { 
      react: pluginReact  
    },
    extends: [
      js.configs.recommended,
      pluginReact.configs.flat.recommended
    ],
    rules: {
    'react/react-in-jsx-scope': 'off'
    }
  }
]);