<template>
  <div class="">
    <!-- homeasfsa -->
    <button type="button" name="button" @click="addId">click</button>
     <div v-for="(item, idx) in memeberInfo" :key="idx">{{item.id}}</div>

     <input v-model="name">
     <input v-model="sex">

     {{this.$store.state.member.eachmember}}
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import {mapGettersMyMeber} from '../store/modules/self-getters.js'
export default {
  data () {
    return {
      id: 1,
      mid: ''
    }
  },
  computed: {
    ...mapState({
      memeberInfo: (state) => {
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
    }
  }
}
</script>

<style>
</style>
