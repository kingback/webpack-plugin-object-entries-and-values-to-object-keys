# webpack-plugin-object-entries-and-values-to-object-keys

> Add Object.values and Object.entries polyfill to entries

Inspired by [babel-plugin-object-entries-and-values-to-object-keys](https://www.npmjs.com/package/babel-plugin-object-entries-and-values-to-object-keys), sometimes babel does not process dependencies which were excluded, so we need to add polyfill at the top of webpack entry files.

## How to use

```js
// webpack.config.js
const webpack = require('webpack');
const WebpackObjectPolyfillPlugin = require('webpack-plugin-object-entries-and-values-to-object-keys');

module.exports = {

  // Sometimes babel-plugin-object-entries-and-values-to-object-keys doesn't works on node_modules
  module: {
    rules: [
      {
        test: /js/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          plugins: ['babel-plugin-object-entries-and-values-to-object-keys']
        }
      }
    ]
  },

  // So we use webpack-plugin-object-entries-and-values-to-object-keys to fix this
  plugins: [
    new WebpackObjectPolyfillPlugin(webpack)
  ]
};
```


