import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import member from './modules/member'
Vue.use(Vuex)
// 开发环境开启 debug 模式
// const debug = process.env.NODE_ENV !== 'production'
const store = new Vuex.Store({
  modules: {
    user: user,
    member: member
  },
  strict: true
})
console.log('module.hotmodule.hot', module.hot)
if (module.hot) {
  console.log('额铁公鸡的的')
  // 使 action 和 mutation 成为可热重载模块
  module.hot.accept(['./modules/user', './modules/member'], () => {
    // 因为 babel 6 的模块编译格式问题，这里需要加上 `.default`
    const user = require('./modules/user').default
    const member = require('./modules/member').default
    // 加载新模块
    store.hotUpdate({
      modules: {
        user,
        member
      }
    })
  })
}
export default store
