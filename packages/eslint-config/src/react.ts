import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import globals from "globals";
import type { ConfigArray, InfiniteDepthConfigWithExtends } from "typescript-eslint";
import { baseConfig } from "./base";

export function configReactPackage(...configs: InfiniteDepthConfigWithExtends[]): ConfigArray {
  return baseConfig(
    {
      ...pluginReact.configs.flat.recommended,
      languageOptions: {
        ...pluginReact.configs.flat.recommended.languageOptions,
        globals: {
          ...globals.serviceworker,
          ...globals.browser,
        },
      },
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
