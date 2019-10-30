<template>
  <div class="">
    bbbbcccaa
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '大哥',
      good: ''
    }
  },
  created () {
    this.gosay()
  },
  methods: {
    async gosay () {
      let res = await this.test()
      this.good = res.name
    },
    test () {
      console.log('sss')
      return {
        name: 'aa'
      }
    }
  }
}
</script>

<style>
</style>
