<template>
	<section>
		<header class="relative mb-14">
			<img
				:src="Pitsa"
				alt="Pitsa uchun rasm"
				loading="lazy"
				class="lg:w-full xx:w-full xx:h-40"
			/>

			<!-- Logo o'rtada joylashgan -->
			<div
				class="logo w-24 h-24 xx:w-20 xx:h-20 sm:w-28 sm:h-28 lg:w-36 lg:h-36 rounded-2xl bg-gray-200 flex justify-center items-center absolute -bottom-12 left-1/2 transform -translate-x-1/2"
			>
				<img
					:src="Logo"
					class="w-16 h-16 xx:w-14 xx:h-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24"
					alt="Logo img"
					loading="lazy"
				/>
			</div>

			<!-- Yurakcha icon -->
			<div
				class="heart absolute top-4 right-4 w-10 h-10 sm:w-12 sm:h-12 flex justify-center items-center bg-white rounded-lg shadow"
			>
				<component :is="icons.HeartIcon" class="w-5 h-5" />
			</div>
		</header>

		<main class="mt-20">
			<!-- Burger haqida ma'lumot -->
			<article
				class="flex flex-col lg:flex-row justify-between lg:items-center gap-4"
			>
				<div class="lg:w-1/2">
					<h1 class="text-2xl sm:text-3xl font-bold font-sans">Burger King</h1>
					<p class="text-gray-400 text-sm sm:text-base font-sans mt-2">
						It is one of the most iconic and well-recognizable fast food
						restaurants out there which offers really amazing food and drinks.
					</p>
				</div>

				<!-- Tugmalar -->
				<div
					class="flex flex-wrap justify-start lg:justify-end items-center gap-1 mt-4 lg:mt-0"
				>
					<Button
						class="bg-gray-300 text-iconColorPrimary font-sans font-semibold"
					>
						Free delivery
					</Button>
					<Button class="bg-iconColorSecondary text-iconColor font-semibold">
						Buy 2 get 1 free
					</Button>
					<Button class="bg-gray-300 font-semibold"> Opens at 12 PM </Button>
				</div>
			</article>

			<!-- Burger menu list -->
			<div class="flex flex-wrap gap-4 mt-6">
				<div
					v-for="(item, index) in menuItems"
					:key="index"
					class="flex items-center gap-1 text-sm cursor-pointer hover:text-blue-500"
				>
					<component
						:is="icons[item.iconLeft]"
						class="w-4 h-4"
						:class="item.color"
					/>
					<span class="text-sm">{{ item.name }}</span>
				</div>
			</div>
		</main>
	</section>
</template>

<script setup>
import { defineAsyncComponent, reactive } from 'vue';
import Pitsa from '@/assets/images/pitsa2.png';
import Logo from '@/assets/images/Logos.png';
const Button = defineAsyncComponent(() => import('./Button.vue'));
import {
	HeartIcon,
	StarIcon,
	FireIcon,
	CurrencyDollarIcon,
	MapPinIcon,
} from '@heroicons/vue/24/outline';
let icons = reactive({
		HeartIcon,
		StarIcon,
		FireIcon,
		CurrencyDollarIcon,
		MapPinIcon,
	}),
	menuItems = reactive([
		{
			name: '4,8 (1,873)',
			iconLeft: 'StarIcon',
			color: 'text-iconColor',
		},
		{
			name: 'Burger',
			iconLeft: 'FireIcon',
			color: 'text-iconColorPrimary',
		},
		{
			name: '$',
			iconLeft: 'CurrencyDollarIcon',
			color: 'text-iconColorTertiry',
		},
		{
			name: '4,3 km (Irving St, San Francisco, California)',
			iconLeft: 'MapPinIcon',
			color: 'text-iconColorTertiry',
		},
	]);
</script>

<style lang="scss" scoped></style>
