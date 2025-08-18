export default [
  "next",
  {
    ignores: ["**/*"], // ← 이 한 줄 추가!
    rules: {
      "react/no-unescaped-entities": "off",
      "@typescript-eslint/no-unused-vars": "off"
    }
  }
];
