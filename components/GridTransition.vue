<script setup lang="ts">

const beforeEnter = (el) => {

};

const enter = (el, done) => {

};
const afterEnter = (el) => {

};
const beforeLeave = (el) => {

};
const leave = (el, done) => {

};
const afterLeave = (el) => {

};
</script>

<template>

	<Transition appear name="grid" mode="in-out" @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter"
		@before-leave="beforeLeave" @leave="leave" @after-leave="afterLeave" />
</template>
