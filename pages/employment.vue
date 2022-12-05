<template>
	<div class="modals">
		<h2>Modals</h2>
		<button @click="showModal = true">Show modal</button>
		<Teleport to="body">
			<div v-if="showModal" class="modal">
				<h1>This is a modal</h1>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
					exercitationem sed eius praesentium, consectetur rerum, incidunt
					explicabo dicta aliquid deleniti provident modi sequi accusamus
					aspernatur facere dolor facilis qui quod.
				</p>
				<button @click="showModal = false">Hide modal</button>
			</div>
		</Teleport>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const showModal = ref(false);
</script>

<style>
.modal {
	background-color: beige;
	color: black;
	padding: 10px;
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	z-index: 6;
}
</style>
