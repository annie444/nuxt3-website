<template>
	<div id="grid">
		<div v-for="item in grid.items" :key="item.id" :id="item.id" :class="item.class" @click="item.onClick"></div>
		<div v-if="grid.toggled" id="letters">
			<fontAPI />
		</div>
	</div>
</template>

<script setup lang="ts">
import anime from "animejs";

const grid = reactive({
	columns: 0,
	rows: 0,
	toggled: false,
	total: 0,
	opacity: 1,
	items: Array(),
});

const onShowContent = inject<Function>("onShowContent");

const handleStagger = (e: any) => {
	grid.toggled = !grid.toggled;

	onShowContent();

	grid.opacity = grid.toggled ? 0 : 1;

	const el = e.target.id;

	anime({
		targets: ".grid-item",
		backgroundColor: "#ffffff",
		opacity: grid.toggled ? 0 : 1,
		delay: anime.stagger(50, {
			grid: [grid.columns, grid.rows],
			from: el,
		}),
	});
};

const getGridItems = () => {
	grid.columns = Math.floor(document.body.clientWidth / 50);
	grid.rows = Math.floor(document.body.clientHeight / 50);

	grid.total = grid.rows * grid.columns;

	grid.items = Array.from(Array(grid.total)).map((x, i) => {
		return {
			class: "grid-item",
			id: i,
			onClick: handleStagger,
		};
	});
};

onBeforeMount(() => {
	getGridItems();
});

onMounted(() => {
	window.addEventListener("resize", getGridItems);
});
</script>

<style lang="scss">
:root {
	body {
		.toggled {
			opacity: 0;
		}

		#grid>.grid-item {
			&:hover {
				opacity: 0.1 !important;
			}
		}

		#grid {
			width: 100vw;
			height: 100vh;
			display: grid;
			position: fixed;
			--columns: v-bind("grid.columns");
			--rows: v-bind("grid.rows");
			grid-template-columns: repeat(var(--columns), minmax(50px, 1fr));
			grid-template-rows: repeat(var(--rows), minmax(50px, 1fr));
			grid-gap: 5px;
			align-content: center;

			#letters {
				width: 100vw;
				height: 100vh;
				justify-content: center;
				align-items: center;
			}

			.grid-item {
				min-width: 100%;
				min-height: 100%;
				cursor: pointer;
				position: relative;
				--opacity: v-bind(grid.opacity);
				background-color: #ffffff;
				opacity: var(--opacity);
				z-index: 1;

				&:hover {
					opacity: 0.8;
				}
			}
		}
	}
}
</style>
