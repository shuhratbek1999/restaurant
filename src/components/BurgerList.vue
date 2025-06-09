<template>
	<section>
		<header class="my-6 flex gap-2 w-full flex-wrap">
			<Button
				class="bg-gray-50 font-sans font-normal text-sm first:ml-0"
				v-for="(btn, index) in Buttons"
				:key="'btn' + index"
				@click="CategoryClick(btn)"
			>
				{{ btn }}
			</Button>
		</header>
		<main>
			<ul
				class="flex xx:w-5/12 md:w-full gap-6 xx:flex-col xx:items-center lg:items-center lg:flex-row"
			>
				<li
					v-for="(list, index) in BurgerList"
					:key="'burger' + index"
					class="lg:w-91 xx:w-11/12 md:w-full"
				>
					<img
						class="w-full h-44 rounded-2xl"
						:src="list.img"
						:alt="list.name"
						loading="lazy"
					/>
					<div class="info flex justify-between items-center my-4">
						<h4 class="font-sans font-bold">{{ list.title }}</h4>
						<button
							class="bg-gray-300 w-20 text-xs h-6 text-iconColorPrimary rounded-md"
						>
							Free delivery
						</button>
					</div>
					<ul class="flex items-center">
						<li class="flex items-center">
							<component
								:is="icons.StarIcon"
								class="w-5 h-5 font-extrabold mr-2"
							/>
							<span class="text-xs font-sans">{{ list.rating }}</span>
						</li>
						<li class="flex mx-2">
							<component :is="icons.FireIcon" class="w-5 h-5 mr-2" />
							<span class="text-xs font-sans">{{ list.name }}</span>
						</li>
						<li class="flex">
							<component :is="icons.TruckIcon" class="w-5 h-5 mr-2" />
							<span class="text-xs font-sans">{{ list.time }}</span>
						</li>
					</ul>
				</li>
			</ul>
		</main>
	</section>
</template>

<script setup>
import { defineAsyncComponent, reactive } from 'vue';
const Button = defineAsyncComponent(() => import('./Button.vue'));
import burgerImg from '@/assets/images/pitsa2.png';
import PitsaImg from '@/assets/images/pitsa.png';
import GrilImg from '@/assets/images/gril.png';
import { StarIcon, TruckIcon, FireIcon } from '@heroicons/vue/24/outline';
const icons = reactive({
	StarIcon,
	TruckIcon,
	FireIcon,
});
let Buttons = reactive([
		'Popular (8)',
		'Burgers (12)',
		'Fries (4)',
		'Drinks (29)',
		'Nuggets (6)',
		'Wraps (14)',
	]),
	BurgerList = reactive([
		{
			img: burgerImg,
			title: 'Chef’s Burger Deluxe',
			name: 'Burger',
			time: '20 - 30 min',
			rating: '4,6 (1,006)',
			category: 'Popular',
		},
		{
			img: PitsaImg,
			title: 'Peperoni Pie',
			name: 'Pie',
			time: '30 - 45 min',
			rating: '4,4 (543)',
			category: 'Popular',
		},
		{
			img: GrilImg,
			title: 'Chicken Grill',
			name: 'Chicken',
			time: '30 - 40 min',
			rating: '4,6 (1,006)',
			category: 'Popular',
		},
	]);
const CategoryClick = btn => {
	console.log(btn);
};
</script>

<style lang="scss" scoped></style>
