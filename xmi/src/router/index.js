import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import Cate from '../views/Cate/index.vue'
import Ball from '../views/Ball/index.vue'
import Cart from '../views/Cart/index.vue'
import User from '../views/User/index.vue'
import Product from '../views/Product/index.vue'
import Ucenter from '../views/Admin/Ucenter.vue'
import Activity from '../views/Admin/Activity.vue'
import Login from '../views/User/login.vue'
import Register from '../views/User/register.vue'

Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: 'Home',
		component: Home,
		meta:{
			keep:true
		}
	},
	{
		path: '/cate',
		name: 'Cate',
		component:  ()=>import( /* webpackChunkName:"category" , webpackPrefetch: true  */  '../views/Cate/index.vue'),
		children: [{
				path: "ucenter",
				component: Ucenter
			},
			{
				path: "",
				redirect: "ucenter"
			} //重定向
		]
	},
	{
		path: '/login',
		name: 'Login',
		component: Login
	},
	{
		path: '/ball',
		name: 'Ball',
		component: Ball,
	},
	{
		path: '/cart',
		name: 'Cart',
		component: ()=>import(/* webpackChunkName: "cart" */ '../views/Cart/index.vue'),
		meta: {
			requireAuth: true
		} //meta 路由元信息 requireAuth 需要权限（自定义）
	},
	{
		path: '/register',
		name: 'Register',
		component: Register
	},
	{
		path: '/user',
		name: 'User',
		component: User,
		  meta:{requireAuth:true,
		     keep:true
		  } //meta 路由元信息 requireAuth 需要权限（自定义）k
	},
	{
		path: '/product',
		name: 'Product',
		component:()=>import(/* webpackChunkName: "product" */ '../views/Product/index.vue')
  
	},
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
	}
]

const router = new VueRouter({
	routes
})

router.beforeEach((to, from, next) => {
	if (to.meta.requireAuth) { //如果需要权限判断页面，进行判断
		if (window.sessionStorage.getItem("token")) { //如果已经登录
			next(true);
		} else { //跳转到行了页面
			next("/login?redirect=" + to.fullPath);
			// 
		}
	} else {
		next(true); //直接跳转到to
	}
})
export default router
