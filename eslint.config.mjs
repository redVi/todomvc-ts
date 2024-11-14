import js from '@eslint/js'
import eslintPluginVue from 'eslint-plugin-vue'
import ts from 'typescript-eslint'

export default ts.config(
  js.configs.recommended,
  ...ts.configs.recommended,
  ...eslintPluginVue.configs['flat/recommended'],
  {
    languageOptions: {
      parserOptions: {
        parser: '@typescript-eslint/parser'
      }
    },
    ignores: ['.vscode/settings.json', '.vscode/settings.json/**', 'src/assets/locales/*.json', 'src/assets/locales/*.json/**'],
    rules: {
      'object-curly-spacing': ['error', 'always'],
      'semi': ['error', 'never'],
      'indent': ['error', 2],
      'quotes': ['error', 'single'],
      'brace-style': ['error', '1tbs', { allowSingleLine: true }]
    },
  }
)
