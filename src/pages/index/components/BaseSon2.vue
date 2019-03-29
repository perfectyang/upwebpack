<template>
  <div class="" style="padding: 10px; border: 1px solid green;">
    我是son2
    <button type="button" name="button" @click="visible=true;">click</button>
    <base-son v-if="visible" />
  </div>

</template>

<script>
// import BaseSon from './BaseSon.vue'
export default {
  name: 'base-son2',
  // components: {
  //   BaseSon: require('./BaseSon.vue').default
  // },
  data () {
    return {
      visible: false
    }
  },
  beforeCreate () {
    this.$options.components.BaseSon = require('./BaseSon.vue').default
  }
}
</script>

<style>
</style>
