<template>
  <div class="">
    <!-- homeasfsa -->
    <button type="button" name="button" @click="addId">click</button>
     <div v-for="(item, idx) in memeberInfo" :key="idx">{{item.id}}</div>

     <input v-model="name">
     <input v-model="sex">

     {{this.eachmember}}
  </div>
</template>

<script>
// import {mapActions} from 'vuex'
import {mapGettersMyMeber, mapState, mapActions} from '../store/modules/self-getters.js'
export default {
  data () {
    return {
      id: 1,
      mid: ''
    }
  },
  computed: {
    ...mapState({
      memeberInfo: (state, getters, actions) => {
        console.log('有出来吗', getters)
        console.log('有出来吗actionsactions', actions)
        return state.member.memeberInfo
      },
      eachmember: (state) => {
        return state.member.eachmember
      }
    }),
    ...mapGettersMyMeber([
      'name',
      'sex'
    ])
  },
  methods: {
    ...mapActions([
      'storeMember',
      'updateEachmember'
    ]),
    addId () {
      this.storeMember({id: ++this.id})
      this.name = ++this.id
    }
  }
}
</script>

<style>
</style>
