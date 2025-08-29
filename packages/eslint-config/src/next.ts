import pluginNext from "@next/eslint-plugin-next";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import globals from "globals";
import type { ConfigArray, InfiniteDepthConfigWithExtends } from "typescript-eslint";
import { baseConfig } from "./base";

export function configNextApp(...configs: InfiniteDepthConfigWithExtends[]): ConfigArray {
  return baseConfig(
    {
      ...pluginReact.configs.flat.recommended,
      languageOptions: {
        ...pluginReact.configs.flat.recommended.languageOptions,
        globals: {
          ...globals.serviceworker,
        },
      },
    },
    {
      plugins: {
        "@next/next": pluginNext,
      },
      rules: {
        ...pluginNext.configs.recommended.rules,
        ...pluginNext.configs["core-web-vitals"].rules,
      } as any,
    },
    {
      plugins: {
        "react-hooks": pluginReactHooks,
      },
      settings: { react: { version: "detect" } },
      rules: {
        ...pluginReactHooks.configs.recommended.rules,
        // React scope no longer necessary with new JSX transform.
        "react/react-in-jsx-scope": "off",
      },
    },
    ...configs
  );
}
