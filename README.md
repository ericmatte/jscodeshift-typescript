# jscodeshift helper scripts

This repo contains some helpful migration script made with [jscodeshift](https://github.com/facebook/jscodeshift).

## Available transformers

### [Convert default props](./scripts/convert-default-props.ts)

An alternative of [react-default-props](https://github.com/airbnb/ts-migrate/blob/master/packages/ts-migrate-plugins/src/plugins/react-default-props.ts) from [ts-migrate](https://github.com/airbnb/ts-migrate); which takes default props from a const variable and convert them into inlined optional parameters to the Component's function.

Usage:

```shell
npx jscodeshift -t=scripts/convert-default-props.ts --parser=tsx './**/*.tsx'
```

## TypeScript all the way 🚀

Example usage of [jscodeshift](https://github.com/facebook/jscodeshift) can be found [here](https://github.com/chimurai/jscodeshift-typescript-example).

## Installation

```shell
yarn
```

## Test

```shell
yarn test
```

## Debug

Use the [pre-configured VSCode launcher](https://github.com/chimurai/jscodeshift-typescript-example/blob/main/.vscode/launch.json) to run tests and debug your transformer.

![debugger](https://raw.githubusercontent.com/chimurai/jscodeshift-typescript-example/main/docs/debugger.gif)

## Resources & Inspiration

- https://github.com/facebook/jscodeshift/tree/master/sample
- https://github.com/facebook/jscodeshift/blob/master/recipes/retain-first-comment.md
- https://github.com/elliottsj/jscodeshift-typescript-example
- https://astexplorer.net
