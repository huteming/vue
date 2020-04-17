import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

/**
 * -- 为何 Vue 不用 ES6 的 Class 去实现呢？
 * -- 我们往后看这里有很多 xxxMixin 的函数调用，并把 Vue 当参数传入，
 * 它们的功能都是给 Vue 的 prototype 上扩展一些方法（这里具体的细节会在之后的文章介绍，这里不展开），
 * Vue 按功能把这些扩展分散到多个模块中去实现，而不是在一个模块里实现所有，这种方式是用 Class 难以实现的。
 */
function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

// Vue.prototype._init
initMixin(Vue)
// Vue.prototype.$data
// Vue.prototype.$props
// Vue.prototype.$set
// Vue.prototype.$delete
// Vue.prototype.$watch
stateMixin(Vue)
// Vue.prototype.$on
// Vue.prototype.$once
// Vue.prototype.$off
// Vue.prototype.$emit
eventsMixin(Vue)
// Vue.prototype._update
// Vue.prototype.$forceUpdate
// Vue.prototype.$destroy
lifecycleMixin(Vue)
// Vue.prototype.$nextTick
// Vue.prototype._render
// 其他一些 render helpers: _o, _n 等
renderMixin(Vue)

export default Vue
