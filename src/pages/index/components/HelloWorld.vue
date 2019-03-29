<template>
  <div class="lw">
    home
      <!-- <div class="" v-for="(el, key) in list" :key="key">
        <p>{{el.name}}{{el}}</p>
      </div> -->
   <base-son />
  </div>
</template>

<script>
// import api from '@/api/index.js'
import BaseSon from './BaseSon.vue'
export default {
  name: 'HelloWorld',
  components: {
    BaseSon
  },
  data () {
    return {
      list: []
    }
  },
  provide () {
    return {
      getMap: this.getMap
    }
  },
  methods: {
    getMap (val) {
      console.log(val)
    }
  },
  async created () {
    // let res = await api.getList()
    // this.list = res.list
    // console.log('res', res)
  }
}
</script>
<style scoped>
</style>
