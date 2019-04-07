<template>
  <div class="">
    <!-- homeasfsa -->
    <button type="button" name="button" @click="addId">click</button>
     <div v-for="(item, idx) in memeberInfo" :key="idx">{{item.id}}</div>

     <input v-model="name">
     <input v-model="sex">

     {{this.eachmember}}
     {{count}}
    <button @click="addCount">add</button>

  </div>
</template>

<script>
// import {mapActions} from 'vuex'
import {mapGettersMyMeber, mapState, mapActions} from '../store/modules/self-getters.js'
// import {deepCopy} from 'index/utils/deep-copy'
export default {
  data () {
    return {
      id: 1,
      mid: '',
      testObj: {
        name: 111,
        inner: {
          sex: 'male',
          list: [
            {
              option_list: 'ssss'
            }
          ]
        }
      }
    }
  },
  computed: {
    ...mapState({
      memeberInfo: (state, getters, actions) => {
        return state.member.memeberInfo
      },
      eachmember: (state) => {
        return state.member.eachmember
      },
      count: (state) => {
        return state.member.count
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
      'updateEachmember',
      'addCount'
    ]),
    addId () {
      this.storeMember({id: ++this.id})
      this.name = ++this.id
    }
  },
  mounted () {
    console.log(this)
  }
}
</script>

<style>
</style>
