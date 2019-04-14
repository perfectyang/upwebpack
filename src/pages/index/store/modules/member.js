import Vue from 'vue'
// state
const state = {
  memeberInfo: [],
  eachmember: {},
  count: 1
}
// actions

const actions = {
  storeMember ({ dispatch, commit }, params) {
    commit('storeMember', params)
  },
  updateEachmember ({ dispatch, commit }, params) {
    commit('updateEachmember', params)
  },
  addCount ({commit}, params) {
    commit('addCount', params)
  }
}

// mutations
// 行为响应动作
const mutations = {
  storeMember (state, params) {
    console.log('123123', params)
    state.memeberInfo.push(params)
  },
  updateEachmember (state, params) {
    // state.eachmember[paparamsrams.key] = params.value
    console.log('paramsparamsparams', params)
    Vue.set(state.eachmember, params.key, params.value)
  },
  addCount (state, params) {
    state.count += 20
  }
}

const getters = {
  computedMember (state) {
    return state
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
