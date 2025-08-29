# @naplaca/eslint-config

<br />

<div align="center">
  <h3>Base ESlint configuration</h3>
  <p>NaPlaca eslint configuration for applications and packages.</p>
</div>

<br />

<div align="center">

[![npm-image]][npm-url] [![license-image]][license-url]

</div>

## Installation

Install the package from the npm registry.

```sh
npm i -D @naplaca/eslint-config

# Install peer dependencies
npm i -D eslint prettier
```

## Usage

After installation, use one of the following presets depending on the nature of your application/library.

**For package development**: Use the following preset when developing a package

```ts
// eslint.config.js
import { baseConfig } from "@naplaca/eslint-config";
export default baseConfig({});
```

**For nextjs app development**: Use the following preset when developing a nextjs application

```ts
// eslint.config.js
import { configNextApp } from "@naplaca/eslint-config";
export default configNextApp(...yourConfig);
```

[npm-image]: https://img.shields.io/npm/v/@naplaca/eslint-config/latest.svg?style=for-the-badge&logo=npm
[npm-url]: https://www.npmjs.com/package/@naplaca/eslint-config/v/latest "npm"
[license-url]: LICENSE.md
[license-image]: https://img.shields.io/github/license/naplaca/devkit?style=for-the-badge
