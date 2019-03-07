/**
 * 获取目录下的第一级目录所有名称
 */
var config = require('../../config')
var getEntries = require('./getEntries')
// 'babel-polyfill',
// 获取entry入口配置
function entries () {
  var list = getEntries(config.entryRoot)
  var map = {}
  console.log('list', list)
  list.forEach(function (entry) {
    map[entry] = ['./src/pages/' + entry]
  })
  return map
}

// 获取html-webpack-plugin配置
function htmlWebpacks (HtmlWebpackPlugin) {
  var list = getEntries(config.entryRoot)
  var rewrites = []
  var result = list.map(function (entry) {
    var chunks = [entry]
    return new HtmlWebpackPlugin({
      filename: `${entry === 'index' ? '' : entry + '/'}index.html`,
      template: `./src/pages/${entry}/index.html`,
      inject: true,
      chunksSortMode: 'none',
      assetsPublicPath: `${config.build.assetsPublicPath}${config.build.assetsSubDirectory}`,
      // title: config.title,
      // keywords: config.keywords,
      // description: config.description,
      // tongji: config.tongji,
      chunks: chunks
      // cdn: config.dev.cdn
    })
    console.log('entryentry', entry)
    rewrites.push({
      from:  new RegExp(`^/${entry}`),
      to: `/${entry}.html`
    })
  })

  return {rewrites, result}
}


// 获取build环境 html-webpack-plugin配置
function prodHtmlWebpacks (HtmlWebpackPlugin) {
  var list = getEntries(config.entryRoot)
  var result = list.map(function (entry) {
    var chunks = ['manifest', 'vendor', entry]
    return new HtmlWebpackPlugin({
      // 首页在根目录，其他模块在各自目录
      filename: `${entry === 'index' ? '' : entry + '/'}index.html`,
      template: `./src/pages/${entry}/index.html`,
      inject: true,
      // title: config.title,
      // keywords: config.keywords,
      // description: config.description,
      // tongji: config.tongji,
      hash: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: false
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency',
      chunks: chunks,
      // cdn
      assetsPublicPath: `${config.build.assetsPublicPath}${config.build.assetsSubDirectory}`
      // cdn: config.build.cdn
    })
  })

  return result
}

module.exports = {
  entries: entries(),
  getEntries: getEntries,
  htmlWebpacks: htmlWebpacks,
  prodHtmlWebpacks: prodHtmlWebpacks
}
