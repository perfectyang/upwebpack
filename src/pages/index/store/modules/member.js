import Vue from 'vue'
// state
const state = {
  memeberInfo: [],
  eachmember: {}
}
// actions

const actions = {
  storeMember ({ dispatch, commit }, params) {
    commit('storeMember', params)
  },
  updateEachmember ({ dispatch, commit }, params) {
    commit('updateEachmember', params)
  }
}

// mutations
// 行为响应动作
const mutations = {
  storeMember (state, params) {
    console.log('aaa', params)
    state.memeberInfo.push(params)
  },
  updateEachmember (state, params) {
    // state.eachmember[params.key] = params.value
    Vue.set(state.eachmember, params.key, params.value)
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
