import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index.vue'

Vue.use(Router)//对于路由注册来说，核心就是调用vue.use,使得VueRouter可以使用VUE。然后同过VUE来调用VueRouter的install的函数中，核心就是给组件混入钩子函数和全局注册两个路由组件。
//输出默认值，创建VueRouter进行实例化
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }
  ]
})
