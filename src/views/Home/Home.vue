<template>
	<div>
		<Information />
		<BurgerList />
	</div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
const BurgerList = defineAsyncComponent(() =>
	import('@/components/BurgerList.vue')
);
const Information = defineAsyncComponent(() =>
	import('@/components/Information.vue')
);
</script>

<style lang="scss" scoped></style>
