# Soundcloud Client in React Redux and TypeScript

A small Soundcloud client built on React and Redux in TypeScript. Mostly it's an experiment, so is far from perfect. Inspired by the tutorial by [Robin Wieruch](http://www.robinwieruch.de/the-soundcloud-client-in-react-redux). Many thanks for the tutorial Robin!

## Pre-requisites

- Node.js & NPM

## Setup

Install TypeScript and Webpack globally.

```bash
npm install -g typescript webpack
```

Install npm dependencies (in the root of this repository).

```bash
npm install
```

Link TypeScript to this repo.

```bash
npm link typescript
```

If that doesn't work (eg if you're running in an environment that can't create symlinks), then install typescript for this repo.

```bash
npm install typescript
```

Build the app itself with webpack.

```bash
webpack
```

## Issues

The Soundcloud types aren't set up correctly and to save time I just created a `soundcloud` directory in the `node_modules/@types` directory, placing the Soundcloud `typings/modules/soundcloud/index.d.ts` file in that directory in there.
