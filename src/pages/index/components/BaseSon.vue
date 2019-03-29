<template>
  <div class="" style="padding: 10px; border: 1px solid red;">
    我是son1
    <button type="button" name="button" @click="visible=true;">click</button>
    <base-son2 v-if="visible" />
  </div>
</template>

<script>
// import BaseSon2 from './BaseSon2.vue'
export default {
  name: 'base-son',
  inject: ['getMap'],
  // components: {
  //   BaseSon2: require('./BaseSon2.vue').default
  // },
  data () {
    return {
      visible: false,
      msg: 'sss'
    }
  },
  beforeCreate () {
    this.$options.components.BaseSon2 = require('./BaseSon2.vue').default
  },
  created () {
    console.log('getMap---', this.getMap)
  }
}
</script>

<style>
</style>
