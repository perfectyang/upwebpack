// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// import upperFirst from 'lodash/upperFirst'
// import camelCase from 'lodash/camelCase'
//
// const requireComponent = require.context(
//   // 其组件目录的相对路径
//   './components',
//   // 是否查询其子目录
//   true,
//   // 匹配基础组件文件名的正则表达式
//   /Base[A-Z]\w+\.(vue|js)$/
// )
// console.log('requireComponent', requireComponent.keys())
// requireComponent.keys().forEach(fileName => {
//   console.log('fileName', fileName)
//   // 获取组件配置
//   const componentConfig = requireComponent(fileName)
//   console.log('componentConfig', componentConfig)
//   // 获取组件的 PascalCase 命名
//   const componentName = upperFirst(
//     camelCase(
//       // 剥去文件名开头的 `./` 和结尾的扩展名
//       fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
//     )
//   )
//   console.log('componentName', componentName)
//
//   // 全局注册组件
//   Vue.component(
//     componentName,
//     // 如果这个组件选项是通过 `export default` 导出的，
//     // 那么就会优先使用 `.default`，
//     // 否则回退到使用模块的根。
//     componentConfig.default || componentConfig
//   )
// })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
