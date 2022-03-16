const isProd  = 'production'
module.exports = {
  reactStrictMode: true,
  target: 'serverless',
  assetPrefix: isProd ? 'https://cdn.statically.io/gh/Maroof-Akram535/Maroof-Akram535.github.io/gh-pages/' : '',

}
