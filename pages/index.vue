<template>
	<div class="home">
		<table class="table">
			<tr>
				<th scope="row" class="cursor-hover-item" data-cursor-text="ABOUT ME" data-cursor-text-repeat="4">
					<NuxtLink to="/about"><span>About Me</span></NuxtLink>
				</th>
			</tr>
			<tr>
				<th scope="row" class="cursor-hover-item" data-cursor-text="EDUCATION&amp;TRAINING" data-cursor-text-repeat="2">
					<NuxtLink to="/education"><span>Education &amp; Training</span></NuxtLink>
				</th>
			</tr>
			<tr>
				<th scope="row" class="cursor-hover-item" data-cursor-text="EMPLOYMENT" data-cursor-text-repeat="3">
					<NuxtLink to="/employment"><span>Work Experience</span></NuxtLink>
				</th>
			</tr>
			<tr>
				<th scope="row" class="cursor-hover-item" data-cursor-text="PUBLICATIONS" data-cursor-text-repeat="3">
					<NuxtLink to="/publications"><span>Publications</span></NuxtLink>
				</th>
			</tr>
			<tr>
				<th scope="row" class="cursor-hover-item" data-cursor-text="RESEARCH" data-cursor-text-repeat="3">
					<NuxtLink to="/research"><span>Research Experience</span></NuxtLink>
				</th>
			</tr>
			<tr>
				<th scope="row" class="cursor-hover-item" data-cursor-text="PROJECTS" data-cursor-text-repeat="3">
					<NuxtLink to="/projects"><span>Personal Projects</span></NuxtLink>
				</th>
			</tr>
			<tr>
				<th scope="row" class="cursor-hover-item" data-cursor-text="CONTACT" data-cursor-text-repeat="4">
					<NuxtLink to="/contact"><span>Get In Contact</span></NuxtLink>
				</th>
			</tr>
		</table>
	</div>
</template>

<script setup lang="ts">
import resume from "../assets/resume.json";

console.log(Object.keys(resume));
</script>

<style lang="scss" scoped>
@use "@/assets/main.scss" as *;

.home {
	table {
		margin-top: 1rem;
		margin-left: 10rem;

		tr {
			text-align: left;

			a {
				@include text-effect();
				font-size: 36pt;
				font-weight: normal;
				text-decoration: none;

				span {
					cursor: pointer;
					pointer-events: auto;
				}
			}
		}
	}
}
</style>
