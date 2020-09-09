# eslint-plugin-drupal-contrib

[![Latest release](https://img.shields.io/github/v/release/coldfrontlabs/eslint-plugin-drupal-contrib?include_prereleases&style=for-the-badge)](https://github.com/coldfrontlabs/eslint-plugin-drupal-contrib/releases)
[![License](https://img.shields.io/github/license/coldfrontlabs/eslint-plugin-drupal-contrib?style=for-the-badge)](/LICENSE)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg?style=for-the-badge)](https://conventionalcommits.org)
[![Drupal Version](https://img.shields.io/badge/Drupal-9.0.x,%208.9.x-blue?style=for-the-badge)](https://www.drupal.org/project/drupal)

An ESLint plugin to match the [Drupal standard](https://www.drupal.org/node/1955232) for contrib modules and themes.

Extends [eslint-config-airbnb](https://github.com/airbnb/javascript) and [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)

For more detail on the rules implemented, see the config itself:

- [8.x](./src/8.x.js)
- [9.x](./src/9.x.js)

## Installation

```shell
# latest stable
npm install eslint prettier --save-dev
npm install eslint-plugin-drupal-contrib --save-dev
```

## Usage

### Drupal 8.x

Add the following to your eslint configuration file

```jsx
extends: ["plugin:drupal-contrib/8.x"]
```

### Drupal 9.x

Add the following to your eslint configuration file

```jsx
extends: ["plugin:drupal-contrib/9.x"]
```

## Versioning

This project uses Semantic Versioning 2.0.0 to keep track of releases.

For more detailed information about SemVer, please see the [official documentation](https://semver.org/).

## Contributing

If you're interested in contributing to the project, please read the [Contribution Guidelines](.github/CONTRIBUTING.md). Any and all contributions _must_ follow these guidelines or they will not be accepted.
