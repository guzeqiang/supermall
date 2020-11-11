import Vue from 'vue'
import Router from 'vue-router'

//安装插件
Vue.use(Router)

const Home = () => import('views//home/home.vue')
const Category = () => import('views//category/category.vue')
const Set = () => import('views//set/set.vue')
const User = () => import('views//user/user.vue')
const Detail = () => import('views//detail/Detail')
const Demo = ()=>import('views//demo/demo')

const routes = [
  {
    path: '',
    redirect: '/home',
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: "首页"
    }
  },
  {
    path: '/category',
    component: Category,
    meta: {
      title: "分类"
    }
  },
  {
    path: '/set',
    component: Set,
    meta: {
      title: "设置"
    }
  },
  {
    path: '/user',
    component: User,
    meta: {
      title: "个人"
    }
  },
  {
    path: '/detail/:iid',
    component: Detail,
    meta: {
      title: "商品详情"
    }
  },
  {
    path: '/demo',
    component: Demo,
    meta: {
      title: "测试"
    }
  }
]

export default new Router({
  mode: 'history',
  routes
})

