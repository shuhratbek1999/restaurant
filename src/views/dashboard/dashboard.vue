<template>
	<div class="flex h-screen">
		<aside
			class="dashboard__menu fixed top-0 h-screen z-10 xx:w-28 xs:w-28 lg:w-64 bg-bgDashboard shadow-md p-4"
		>
			<header class="flex lg:mb-0 xx:mb-6">
				<img
					:src="DashboardHeaderLogo"
					class="xx:w-6 xx:h-3 lg:w-10 lg:h-8 mx-2"
					alt="bu dashboard img"
					loading="lazy"
				/>
				<h2 class="text-xl xx:hidden lg:inline-block font-bold mb-6 font-sans">
					Nibble
				</h2>
			</header>
			<nav>
				<ul>
					<router-link
						v-for="(link, index) in Links"
						:key="index"
						:to="link.name"
						class="flex items-center h-14 cursor-pointer lg:px-2 xx:w-14 xx:justify-center lg:w-full lg:justify-start"
						:class="[
							route.name === link.name
								? 'bg-bgDashboardBtn text-white rounded-xl'
								: 'text-dashboardTextColor',
						]"
					>
						<component :is="icons[link.icon]" class="w-6 h-6 ml-1 mr-3" />
						<span class="text-base font-sans xx:hidden lg:inline-block">{{
							link.name
						}}</span>
					</router-link>
				</ul>
			</nav>
			<footer class="flex items-center justify-between absolute bottom-2">
				<img :src="Logo" class="w-12 h-12" alt="logo img" loading="lazy" />
				<div class="info ml-2 xx:hidden lg:inline-block">
					<h2 class="font-bold font-sans text-sm">Mark Clarke</h2>
					<p class="font-normal font-sans text-xs">markclarke@gmail.com</p>
				</div>
				<component
					:is="icons.ChevronUpDownIcon"
					class="w-6 h-6 xx:hidden lg:inline-block"
				/>
			</footer>
		</aside>

		<!-- Main content -->
		<main class="flex-1 flex flex-col lg:ml-64 xx:ml-28">
			<!-- Navbar -->
			<header class="bg-white p-4">
				<Header />
			</header>

			<!-- Page content -->
			<main class="px-6">
				<router-view v-slot="{ Component }">
					<Suspense>
						<component :is="Component" />
					</Suspense>
				</router-view>
			</main>
		</main>
	</div>
</template>

<script setup>
import { defineAsyncComponent, reactive } from 'vue';
import { useRoute } from 'vue-router';
const Header = defineAsyncComponent(() => import('@/components/Header.vue'));
import DashboardHeaderLogo from '@/assets/images/bread.png';
import Logo from '@/assets/images/logo.png';
import {
	HomeIcon,
	UserIcon,
	Square2StackIcon,
	BookmarkIcon,
	DocumentArrowDownIcon,
	EnvelopeIcon,
	Cog6ToothIcon,
	ChevronUpDownIcon,
} from '@heroicons/vue/24/outline';
const route = useRoute();
let Links = reactive([
		{
			name: 'Home',
			icon: 'HomeIcon',
		},
		{
			name: 'Explore',
			icon: 'Square2StackIcon',
		},
		{
			name: 'Favourites',
			icon: 'BookmarkIcon',
		},
		{
			name: 'Order',
			icon: 'DocumentArrowDownIcon',
		},
		{
			name: 'Messages',
			icon: 'EnvelopeIcon',
		},
		{
			name: 'Settings',
			icon: 'Cog6ToothIcon',
		},
	]),
	icons = {
		HomeIcon,
		UserIcon,
		Square2StackIcon,
		BookmarkIcon,
		DocumentArrowDownIcon,
		EnvelopeIcon,
		Cog6ToothIcon,
		ChevronUpDownIcon,
	};

const MenuLinkClick = link => {
	console.log(link, route.name);
	if (link == route.name) {
		console.log(route.name);
	}
};
</script>

<style scoped>
.dashboard__menu {
	border-top-right-radius: 30px;
	border-bottom-right-radius: 30px;
}
</style>
