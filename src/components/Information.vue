<template>
	<section>
		<header class="relative mb-14">
			<img :src="Pitsa" alt="Pitsa uchun rasm" />
			<div
				class="logo xx:w-24 xx:h-24 xs:w-24 xs:h-24 lg:w-36 lg:h-36 rounded-2xl bg-gray-200 flex justify-center items-center absolute -bottom-12 left-1/2 transform -translate-x-1/2"
			>
				<img
					:src="Logo"
					class="xx:w-16 xx:h-16 lg:w-24 lg:h-24"
					alt="Logo img"
				/>
			</div>
			<div
				class="heart absolute top-6 right-6 w-12 h-12 flex justify-center items-center bg-white rounded-lg"
			>
				<component :is="icons.HeartIcon" class="w-5 h-5" />
			</div>
		</header>
		<main>
			<article
				class="burger flex justify-between lg:items-center xx:items-start xx:flex-col lg:flex-row"
			>
				<div class="burger__info xx:w-full lg:w-1/2">
					<h1 class="burger__title font-bold font-sans text-3xl">
						Burger King
					</h1>
					<p
						class="burger__text lg:text-base text-gray-400 font-sans font-normal my-4"
					>
						It is one of the most iconic and well-recognizable fast food
						restaurants out there which offers really amazing food and drinks.
					</p>
				</div>
				<div class="buttons flex justify-between items-center">
					<Button
						class="bg-gray-300 text-iconColorPrimary font-sans font-semibold"
					>
						Free delivery
					</Button>
					<Button
						class="bg-iconColorSecondary mx-3 text-iconColor font-semibold"
					>
						Buy 2 get 1 free
					</Button>
					<Button class="font-semibold bg-gray-300"> Opens at 12 PM </Button>
				</div>
			</article>
			<div class="burger__list w-7/12 flex justify-between">
				<div
					v-for="(item, index) in menuItems"
					:key="index"
					class="xx:hidden xs:hidden lg:flex items-center gap-1 text-sm cursor-pointer hover:text-blue-500"
				>
					<component
						:is="icons[item.iconLeft]"
						class="w-4 h-4 text-iconColor"
						:class="item.color"
					/>
					{{ item.name }}
				</div>
			</div>
		</main>
	</section>
</template>

<script setup>
import Pitsa from '@/assets/images/pitsa2.png';
import Logo from '@/assets/images/Logos.png';
import Button from './Button.vue';
import {
	HeartIcon,
	StarIcon,
	FireIcon,
	CurrencyDollarIcon,
	MapPinIcon,
} from '@heroicons/vue/24/outline';
import { reactive } from 'vue';
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
