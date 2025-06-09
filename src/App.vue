<script setup>
import { defineAsyncComponent } from 'vue';
const HelloWorld = defineAsyncComponent(() =>
	import('@/components/HelloWorld.vue')
);
</script>

<template>
	<router-view v-slot="{ Component }">
		<component :is="Component" />
	</router-view>
</template>

<style scoped></style>
