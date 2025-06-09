<template>
	<nav class="flex items-center justify-between lg:p-1 xx:p-1">
		<div class="flex gap-6 items-center w-1/2">
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
				<component :is="icons[item.iconRight]" class="w-4 h-4" />
			</div>
			<div
				class="lg:hidden xx:flex xs:flex md:flex items-center justify-center bg-iconColorPrimary w-12 h-12 rounded-lg text-white"
			>
				<Bars3Icon class="w-6 h-6" />
			</div>
		</div>
		<!-- Qidiruv -->
		<div
			class="w-1/2 relative flex items-center lg:justify-between xx:justify-end"
		>
			<input
				type="text"
				placeholder="Search for anything…"
				class="border xx:w-10 xx:h-12 lg:w-96 lg:h-12 indent-10 rounded-md text-sm focus:outline-none bg-bgInput"
			/>
			<component
				:is="icons.MagnifyingGlassIcon"
				class="w-5 h-5 absolute lg:left-2 xx:left-12"
			/>
			<div
				class="shopping w-12 h-12 flex justify-center items-center bg-iconColor rounded-xl xx:ml-2 lg:ml-0"
			>
				<component :is="icons.ShoppingCartIcon" class="w-5 h-5 text-white" />
			</div>
		</div>
	</nav>
</template>

<script setup>
import { reactive } from 'vue';
import {
	ChevronUpDownIcon,
	MapPinIcon,
	ShoppingBagIcon,
	CurrencyPoundIcon,
	ShoppingCartIcon,
	MagnifyingGlassIcon,
	Bars3Icon,
} from '@heroicons/vue/24/outline';
let icons = reactive({
	ChevronUpDownIcon,
	MapPinIcon,
	ShoppingBagIcon,
	CurrencyPoundIcon,
	ShoppingCartIcon,
	MagnifyingGlassIcon,
});
let menuItems = reactive([
	{
		name: 'San Francisco, California',
		iconLeft: 'MapPinIcon',
		iconRight: 'ChevronUpDownIcon',
		path: '/',
		color: 'text-iconColor',
	},
	{
		name: 'Pick up',
		iconLeft: 'ShoppingBagIcon',
		iconRight: 'ChevronUpDownIcon',
		path: '/categories',
		color: 'text-iconColorPrimary',
	},
	{
		name: 'Best deals',
		iconLeft: 'CurrencyPoundIcon',
		iconRight: 'ChevronUpDownIcon',
		path: '/offers',
		color: 'text-iconColorTertiry',
	},
]);
</script>

<style lang="scss" scoped></style>
