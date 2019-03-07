/**
 * 获取入口文件列表
 */

var fs = require('fs')
var path = require('path')

function resolve (dir) {
  return path.join(__dirname, '..', '..', dir)
}

function getEntries (entryRoot) {
  console.log('entryRoot', entryRoot)
  var dir = resolve(entryRoot)
  return fs.readdirSync(dir)
            .filter(function (file) {
              return fs.statSync(path.join(dir, file)).isDirectory()
            })
}

module.exports = getEntries
