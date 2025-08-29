import type { Options } from "prettier";

export default {
  printWidth: 120,
  trailingComma: "es5",
  singleQuote: false,
  semi: true,
  bracketSpacing: true,
  arrowParens: "always",
  quoteProps: "consistent",
  jsxSingleQuote: false,
  bracketSameLine: false,
} satisfies Options;
