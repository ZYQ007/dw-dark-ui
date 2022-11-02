/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  "root": true,
  "extends": [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript/recommended",
    "@vue/eslint-config-prettier"
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'quotes': [1, 'single'],     // 字符串使用单引号
    'semi': [1, 'never'],        //  末尾不加分号
    'prettier/prettier': 'off' ,  // 防止终端中因为规则问题报警告,所以关闭
    'vue/multi-word-component-names': 'off'
  }
}
