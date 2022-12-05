<template>
	<NuxtLayout :name="layout">
		<NuxtPage />
	</NuxtLayout>
</template>

<script setup lang="ts">

const layout = "resume";

definePageMeta({
	title: "Resume",
	meta: [
		{
			hid: "description",
			name: "description",
			content: "Resume of Michael J. B. Smith",
		},
	],
});

</script>

<style lang="scss">
@-webkit-keyframes fadeIn {

	0%,
	50% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
}

@keyframes fadeIn {

	0%,
	50% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
}

@-webkit-keyframes fadeOut {
	0% {
		opacity: 1;
	}

	100% {
		opacity: 0;
	}
}

@keyframes fadeOut {
	0% {
		opacity: 1;
	}

	100% {
		opacity: 0;
	}
}

:root {
	.router {
		pointer-events: none;
		font-family: Verdana, Geneva, Tahoma, sans-serif;

		a,
		input,
		button,
		textarea {
			pointer-events: auto;
		}
	}

	.app-container {
		font-family: Verdana, Geneva, Tahoma, sans-serif;
		position: relative;
	}

	.toggled {
		-webkit-animation: fadeOut 0.5s linear forwards;
		animation: fadeOut 0.5s linear forwards;
	}

	.not-toggled {
		-webkit-animation: fadeIn 0.5s linear forwards;
		animation: fadeIn 0.5s linear forwards;
	}
}

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
	transition: opacity 1s, transform 1s;
}

.slide-left-enter-from,
.slide-left-leave-to {
	opacity: 0;
	transform: translate(-30%);
}

.slide-right-enter-from,
.slide-right-leave-to {
	opacity: 0;
	transform: translate(30%);
}
</style>
