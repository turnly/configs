<div align="center">
  <p align="center">
      <a href="https://turnly.app" target="_blank" rel="noopener">
          <img src="https://user-images.githubusercontent.com/40646537/179328734-625eba82-51f0-48c3-bb7c-7a1ad5487d79.png" />
      </a>
  </p>

  <p>
    <sub>
      Built with ❤︎ by
      <a href="https://github.com/turnly/turnly/blob/develop/OWNERS.md">
        maintainers
      </a>
    </sub>
  </p>
</div>

# Configs

The source of truth for standards, config files, and best practices when
building products at Turnly.

#### Install

```sh
yarn add -D git+https://github.com/turnly/configs.git
```

#### Usage

> In your `package.json` paste the necessary configurations from the example below:

```json
{
  "name": "@turnly/new-app",
  "scripts": {
    "watch": "nodemon --config node_modules/@turnly/eslint-config/nodemon.json src/main.ts"
  },
  "commitlint": {
    "extends": [
      "@turnly/eslint-config/commits/commitlint.js"
    ]
  },
  "prettier": "@turnly/eslint-config/.prettierrc.js",
  "eslintConfig": {
    "extends": "@turnly/eslint-config",
    "ignorePatterns": [
      "node_modules"
    ]
  },
  "devDependencies": {
    "@commitlint/cli": "^16.2.4",
    "@turnly/eslint-config": "github:turnly/configs",
  }
}
```
