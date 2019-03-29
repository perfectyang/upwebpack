function normalizeMap (map) {
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }) })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }) })
}

export const mapGettersMyMeber = (getters, modules = []) => {
  let res = {}
  normalizeMap(getters).forEach(ref => {
    let key = ref.key
    let val = ref.val
    res[key] = {
      get () {
        let back = this.$store.state.member.eachmember[key]
        return back
      },
      set (value) {
        this.$store.commit('updateEachmember', {
          key: val,
          value: value
        })
      }
    }
  })
  return res
}

export default {
  mapGettersMyMeber
}
