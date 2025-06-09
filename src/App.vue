<script setup>
import { defineAsyncComponent } from 'vue';
const HelloWorld = defineAsyncComponent(() =>
	import('@/components/HelloWorld.vue')
);
</script>

<template>
	<router-view v-slot="{ Component }">
		<Suspense>
			<component :is="Component" />
		</Suspense>
	</router-view>
</template>

<style scoped></style>
