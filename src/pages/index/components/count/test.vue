<template>
  <countdown :time="timeData.leftTime" :percent="timeData.percent"></countdown>
</template>

<script>
import countdown from './test.vue'
export default {
  components: {
    countdown
  },
  data () {
    return {
      timeData: {
        startTime: 0,
        limitTime: 0,
        percent: 0,
        leftTime: 0
      }
    }
  },
  created () {
    this.activeCountdown({
      startTime: 10,
      limitTime: 120
    })
  },
  methods: {
    easeInOut (t, b, c, d) {
      return c * (t / d) + b
    },
    countdown () {
      if (this.timeData.percent >= 100) {
        this.timeData.percent = 100
        this.timeData.show = false
        return
      }
      window.requestAnimationFrame(this.countdown)
      let limitTime = this.timeData.limitTime * 1000
      let gap = Date.now() - this.timeData.startTime
      let leftTime = this.timeData.limitTime - Math.floor(gap / 1000)
      this.timeData.leftTime = leftTime < 0 ? 0 : leftTime
      this.timeData.percent = this.easeInOut(gap, 0, 100, limitTime)
      this.timeData.show = true
    },
    activeCountdown (info) {
      this.timeData = {
        percent: 0,
        leftTime: 15,
        startTime: info.startTime,
        limitTime: info.limitTime,
        show: false
      }
      this.countdown()
    }
  }
}
</script>

<style>
</style>
