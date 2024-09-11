// @ts-nocheck
export default {
  plugins: ["prettier-plugin-tailwindcss"],
  bracketSameLine: true,
  printWidth: 100,
  singleQuote: true,
  trailingComma: "all",
  overrides: [
    {
      files: "*.json",
      options: {
        trailingComma: "none",
      },
    },
  ],
};
