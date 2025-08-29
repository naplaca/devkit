import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import onlyWarn from "eslint-plugin-only-warn";
import tseslint, { type ConfigArray, type InfiniteDepthConfigWithExtends } from "typescript-eslint";

export function baseConfig(...configs: InfiniteDepthConfigWithExtends[]): ConfigArray {
  return tseslint.config(
    js.configs.recommended,
    eslintConfigPrettier,
    tseslint.configs.strictTypeChecked,
    {
      rules: {
        "@typescript-eslint/consistent-type-imports": "error",
      },
    },
    {
      plugins: { onlyWarn },
    },
    ...configs
  );
}
