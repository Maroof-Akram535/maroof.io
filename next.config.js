const isProd  = 'production'
module.exports = {
  reactStrictMode: true,
  target: 'serverless',
  assetPrefix: isProd ? 'https://cdn.statically.io/gh/MaroofAkram/MaroofAkram.github.io/gh-pages/' : '',

}
