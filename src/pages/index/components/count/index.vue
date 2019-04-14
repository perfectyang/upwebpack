<template>
  <div class="count-wrap" v-if="timeData.show">
    <countdown :time="timeData.leftTime" :percent="timeData.percent"></countdown>
  </div>
</template>

<script>
import countdown from './countdown.vue'
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
      startTime: 1554184029000,
      limitTime: 60
    })
  },
  methods: {
    easeInOut (t, b, c, d) {
      let res = c * (t / d) + b
      console.log('res', res)
      return res
    },
    countdown () {
      if (this.timeData.percent >= 100) {
        this.timeData.percent = 100
        this.timeData.show = false
        return
      }
      window.requestAnimationFrame(this.countdown)
      let limitTime = this.timeData.limitTime * 1000
      console.log('limitTime', limitTime)
      let gap = Date.now() - this.timeData.startTime
      console.log('gap', gap)
      let leftTime = this.timeData.limitTime - Math.floor(gap / 1000)
      console.log('leftTime', leftTime)
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
      console.log('timeData', this.timeData)
      this.countdown()
    }
  }
}
</script>

<style>
.count-wrap {
  position: absolute;
top: .16rem;
right: .16rem;
width: 100px;
height: 100px;
z-index: 9999;
}
</style>
