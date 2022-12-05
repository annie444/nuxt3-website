<script setup lang="ts">

const router = useRouter();

router.afterEach((to, from) => {
	const toDepth = to.path.split("/").length;
	const fromDepth = from.path.split("/").length;
	to.meta.transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
});

const appContainerRef = ref();

const onShowContent = () => {
	appContainerRef.value.classList.toggle("toggled");
	appContainerRef.value.classList.toggle("not-toggled");
};

provide('onShowContent', onShowContent);

</script>

<template>
	<BackgroundAnimation />

	<div class="row">
		<ResumeTitle />
	</div>
	<div class="row router">
		<slot />
	</div>
</template>
