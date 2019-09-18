const values = `
// Object.values polyfill
if (!Object.values) {
  Object.values = function (target) {
    return Object.keys(target).map(function (key) {
      return target[key];
    });
  }
}
`;

const entries = `
// Object.entries polyfill
if (!Object.entries) {
  Object.entries = function (target) {
    return Object.keys(target).map(function (key) {
      return [key, target[key]];
    });
  }
}
`;

const polyfill = ';(function(){' + values + entries + '})();\n\n';

module.exports = function(webpack, opts) {
  webpack = webpack || require('webpack');
  return new webpack.BannerPlugin(Object.assign({
    banner: polyfill,
    raw: true, 
    entryOnly: true,
    test: /\.js$/
  }, opts));
}