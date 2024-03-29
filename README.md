# eslint-plugin-drupal-contrib

[![Latest release](https://img.shields.io/github/v/release/coldfrontlabs/eslint-plugin-drupal-contrib?include_prereleases&style=for-the-badge)](https://github.com/coldfrontlabs/eslint-plugin-drupal-contrib/releases)
[![License](https://img.shields.io/github/license/coldfrontlabs/eslint-plugin-drupal-contrib?style=for-the-badge)](/LICENSE)
[![Tests](https://img.shields.io/github/actions/workflow/status/coldfrontlabs/eslint-plugin-drupal-contrib/test.yml?branch=4.x&label=Tests&style=for-the-badge)](https://github.com/coldfrontlabs/eslint-plugin-drupal-contrib/actions/workflows/test.yml)
[![GitHub CodeQL](https://img.shields.io/github/actions/workflow/status/coldfrontlabs/eslint-plugin-drupal-contrib/codeql-analysis.yml?branch=4.x&label=CodeQL&style=for-the-badge)](https://github.com/coldfrontlabs/eslint-plugin-drupal-contrib/actions/workflows/codeql-analysis.yml)
[![Drupal Version](https://img.shields.io/badge/Drupal-9.x-blue?style=for-the-badge)](https://www.drupal.org/project/drupal)

An ESLint plugin to match the [Drupal standard](https://www.drupal.org/node/1955232) for contrib modules and themes.

Extends [eslint-config-airbnb](https://github.com/airbnb/javascript) and [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier).

For more detail on the rules implemented, see the config itself:

- [recommended](./src/recommended.js)
- [jquery](./src/jquery.js)
- [legacy](./src/legacy.js)
- [passing](./src/passing.js)

## Installation

```shell
# latest stable
npm install eslint@8 prettier@3 --save-dev
npm install eslint-plugin-drupal-contrib@2 --save-dev
```

## Usage

### Recommended

Add the following to your eslint configuration file

```jsx
extends: ["plugin:drupal-contrib/recommended"]
```
### jQuery

Add the following to your eslint configuration file

```jsx
extends: ["plugin:drupal-contrib/jquery"]
```

### Legacy

Add the following to your eslint configuration file

```jsx
extends: ["plugin:drupal-contrib/legacy"]
```

### Passing

Add the following to your eslint configuration file

```jsx
extends: ["plugin:drupal-contrib/passing"]
```

## Versioning

This project uses Semantic Versioning 2.0.0 to keep track of releases.

For more detailed information about SemVer, please see the [official documentation](https://semver.org/).

## Contributing

If you're interested in contributing to the project, please read the [Contribution Guidelines](.github/CONTRIBUTING.md). Any and all contributions _must_ follow these guidelines or they will not be accepted.
