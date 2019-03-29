import Vue from 'vue'
import Vuex from 'vuex'
// import user from './modules/user'
// import member from './modules/member'
Vue.use(Vuex)
// 开发环境开启 debug 模式
// const debug = process.env.NODE_ENV !== 'production'
const store = new Vuex.Store({
  modules: {
    user: require('./modules/user').default,
    member: require('./modules/member').default
  },
  strict: false
})
// if (module.hot) {
//   // 使 action 和 mutation 成为可热重载模块
//   module.hot.accept(['./modules/user', './modules/member'], () => {
//     // 因为 babel 6 的模块编译格式问题，这里需要加上 `.default`
//     const userModule = require('./modules/user').default
//     const memberModule = require('./modules/member').default
//     // 加载新模块
//     store.hotUpdate({
//       modules: {
//         user: userModule,
//         member: memberModule
//       }
//     })
//   })
// }
export default store
