/**
 * Created by Administrator on 2017/6/27 0027.
 */
import companentA from './companentA.vue'

const loading = {
  install: function(Vue) {
    Vue.component('companentA', companentA)
  }
}

export default loading


