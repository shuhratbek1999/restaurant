import { createRouter, createWebHistory } from 'vue-router';
const Home = () => import('../views/Home/Home.vue');
const Explore = () => import('../views/Explore//Explore.vue');
const Favorute = () => import('../views/Favorute/Favoruite.vue');
const Message = () => import('../views/Message//Messages.vue');
const Order = () => import('../views/Order//Orders.vue');
const Settings = () => import('../views/Settings/Settings.vue');
const Dashboard = () => import('../views/dashboard/dashboard.vue');
const routes = [
	{
		path: '/',
		name: 'Dashboard',
		component: Dashboard,
		redirect: 'home',
		meta: { requiresAuth: true },
		children: [
			{
				path: 'home',
				name: 'Home',
				component: Home,
			},
			{
				path: 'explore',
				name: 'Explore',
				component: Explore,
			},
			{
				path: 'favourites',
				name: 'Favourites',
				component: Favorute,
			},
			{
				path: 'order',
				name: 'Order',
				component: Order,
			},
			{
				path: 'messages',
				name: 'Messages',
				component: Message,
			},
			{
				path: 'settings',
				name: 'Settings',
				component: Settings,
			},
		],
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
