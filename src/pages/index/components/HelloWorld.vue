<template>
  <div class="lw">
      <div class="" v-for="(el, key) in list" :key="key">
        <p>{{el.name}}----{{el}}</p>
      </div>
  </div>
</template>

<script>
import api from '@/api/index.js'
export default {
  name: 'HelloWorld',
  data () {
    return {
      list: []
    }
  },
  async created () {
    let res = await api.getList()
    this.list = res.list
    console.log('res', res)
  }
}
</script>
<style scoped>
</style>
