<template>
  <div class="qd-countdown">
    <canvas class="qd-countdown-canvas" ref="canvas" width="100" height="100"></canvas>
    <span class="qd-countdown-text">{{ time | time }}</span>
  </div>
</template>

<script>
export default {
  props: {
    percent: {
      type: Number,
      default: 0
    },
    time: {
      type: Number,
      default: 0
    }
  },
  filters: {
    time (value) {
      if (value < 0) {
        return 0
      }
      if (value < 60) {
        return value
      }
      let m = Math.floor(value / 60)
      let s = value % 60
      if (s < 10) {
        s = '0' + s
      }
      return m + ':' + s
    }
  },
  watch: {
    percent: {
      handler: 'draw'
    }
  },
  methods: {
    draw () {
      let cvs = this.$refs.canvas
      let ctx = cvs.getContext('2d')
      ctx.clearRect(0, 0, 100, 100)
      ctx.lineCap = 'round'
      ctx.lineWidth = 6
      if (this.percent < 60) {
        ctx.strokeStyle = '#0486fe'
      } else if (this.percent < 85) {
        ctx.strokeStyle = '#feae04'
      } else {
        ctx.strokeStyle = '#ff350d'
      }
      ctx.beginPath()
      let percent = this.percent / 100
      if (percent > 1) {
        percent = 1
      }
      if (percent) {
        ctx.arc(50, 50, 47, 0, 2 * Math.PI * percent)
      }
      ctx.stroke()
    }
  }
}
</script>

<style scoped>
  .qd-countdown {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: #ffffff;
    border: 1px solid #c0ccda;
    box-shadow: 0 4px 10px 0 #bbcfd7;
  }
  .qd-countdown-canvas {
    width: 100%;
    height: 100%;
    transform: rotate(-90deg);
  }
  .qd-countdown-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: .32rem;
  }
</style>
