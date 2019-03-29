function normalizeMap (map) {
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }) })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }) })
}

function normalizeNamespace (fn) {
  return (namespace, map) => {
    // 函数作用很简单
    // 根据参数生成 namespace
    if (typeof namespace !== 'string') {
      map = namespace
      namespace = ''
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/'
    }
    return fn(namespace, map)
  }
}

function getModuleByNamespace (store, helper, namespace) {
  const module = store._modulesNamespaceMap[namespace]
  if (process.env.NODE_ENV !== 'production' && !module) {
    console.error(`[vuex] module namespace not found in ${helper}(): ${namespace}`)
  }
  return module
}

export const mapState = normalizeNamespace((namespace, states) => {
  console.log('中文在在在在在', states)
  const res = {}
  let flattenStates = normalizeMap(states)
  console.log('flattenStates', flattenStates)
  // states 参数可以参入数组或者对象类型
  flattenStates.forEach(({ key, val }) => {
    console.log('在里面1111', key)
    console.log('在里面2222', val)
    res[key] = function mappedState () {
      let state = this.$store.state
      let getters = this.$store.getters
      let actions = this.$store
      if (namespace) {
        // 获得对应的模块
        const module = getModuleByNamespace(this.$store, 'mapState', namespace)
        if (!module) {
          return
        }
        state = module.context.state
        getters = module.context.getters
      }
      console.log('getters', getters)
      // 返回 State
      return typeof val === 'function'
        ? val.call(this, state, getters, actions)
        : state[val]
    }
    // mark vuex getter for devtools
    res[key].vuex = true
  })
  console.log('回来', res)
  return res
})

export const mapActions = normalizeNamespace((namespace, actions) => {
  const res = {}
  normalizeMap(actions).forEach(({ key, val }) => {
    res[key] = function mappedAction (...args) {
      let dispatch = this.$store.dispatch
      if (namespace) {
        const module = getModuleByNamespace(this.$store, 'mapActions', namespace)
        if (!module) {
          return
        }
        dispatch = module.context.dispatch
      }
      let fn = typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
      console.log('在这棵要要要', fn)
      return fn
    }
  })
  console.log('动作', res)
  return res
})
export const mapGettersMyMeber = (getters, modules = []) => {
  let res = {}
  normalizeMap(getters).forEach(ref => {
    let key = ref.key
    let val = ref.val
    res[key] = {
      get () {
        let back = this.$store.state.member.eachmember[key]
        return back
      },
      set (value) {
        this.$store.commit('updateEachmember', {
          key: val,
          value: value
        })
      }
    }
  })
  return res
}

export default {
  mapGettersMyMeber,
  mapState
}
