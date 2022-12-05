<template>
	<h1 id="title" @click="router.push('/')">
		<span class="first-name">
			{{ first + " " }}
		</span>
		<span>&nbsp;</span>
		<span class="middle-name">
			{{ middle + " " }}
		</span>
		<span>&nbsp;</span>
		<span class="last-name">
			{{ last }}
		</span>
	</h1>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

defineProps({
	first: {
		type: String,
		default: "Resume",
	},
	middle: {
		type: String,
		default: "Template",
	},
	last: {
		type: String,
		default: "Example",
	},
});
</script>

<style lang="scss" scoped>
@use "@/assets/main.scss" as *;

body {
	h1 {
		font-size: 48pt;
		@include text-effect();

		span {
			cursor: pointer;
			pointer-events: auto;
			position: relative;
		}
	}
}
</style>
