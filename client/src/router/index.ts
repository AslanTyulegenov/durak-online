import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { HomePage } from '@/views/'

export enum Routes {
	Home = 'Home'
}

const routes: RouteRecordRaw[] = [
	{
		name: Routes.Home,
		path: '/',
		component: HomePage
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes,
	linkActiveClass: 'active',
	linkExactActiveClass: 'active'
})

export default router
