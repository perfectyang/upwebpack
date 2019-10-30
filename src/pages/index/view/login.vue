<template>
  <count />
</template>

<script>
import count from '../components/count/index.vue'
import trim from 'lodash/trim'
export default {
  components: {
    count
  },
  data () {
    return {
    }
  },
  methods: {
    test () {
      console.log(trim('aaa '))
    }
  }
}
</script>

<style>
</style>
