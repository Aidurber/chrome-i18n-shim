# Chrome i18n testing shim

This project is an attempt to mimic the `chrome.i18n.getMessage` function for testing. It's easy to stub out `getMessage` with something like `jest.fn` but we actually want to minic the implementation so we can verify tokens.

# Setup

Install the dependency

```bash
yarn add -D chrome-extension-i18n-shim
```

In a Jest setup file (when used in conjunction with jest-webextension-mock):

```javascript
// jest.setup.js
import { setupGetMessageSim } from 'chrome-extension-i18n-shim';
// We want to load our default translations into our tests. See: https://twitter.com/kentcdodds/status/1181591171518230528
import * as enMessages from './_locales/en/messages.json';

const getMessage = setupGetMessageSim(enMessages);

global.chrome = {
  ...global.chrome,
  i18n: {
    ...global.chrome.i18n,
    getMessage: getMessage,
  },
};
```

## Local Development

Below is a list of commands you will probably find useful.

### `npm start` or `yarn start`

Runs the project in development/watch mode. Your project will be rebuilt upon changes. TSDX has a special logger for you convenience. Error messages are pretty printed and formatted for compatibility VS Code's Problems tab.

<img src="https://user-images.githubusercontent.com/4060187/52168303-574d3a00-26f6-11e9-9f3b-71dbec9ebfcb.gif" width="600" />

Your library will be rebuilt if you make edits.

### `npm run build` or `yarn build`

Bundles the package to the `dist` folder.
The package is optimized and bundled with Rollup into multiple formats (CommonJS, UMD, and ES Module).

<img src="https://user-images.githubusercontent.com/4060187/52168322-a98e5b00-26f6-11e9-8cf6-222d716b75ef.gif" width="600" />

### `npm test` or `yarn test`

Runs the test watcher (Jest) in an interactive mode.
By default, runs tests related to files changed since the last commit.
