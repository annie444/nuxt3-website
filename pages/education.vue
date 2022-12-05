<template>
	<div class="education">
		<div class="degree">
			<span class="bachalors">
				{{ education.degree }}
			</span>
			in
			<span class="field">
				{{ education.fieldOfStudy }}
			</span>
		</div>
		<div class="school">
			from
			<span class="college">
				{{ " " + education.school }}
			</span>
			in
			<span class="town">
				{{ " " + education.location }}
			</span>
			on the
			<span class="date">
				{{
						" " +
						education.dateOfConferral.day +
						"st of " +
						education.dateOfConferral.month +
						", " +
						education.dateOfConferral.year
				}}
			</span>
		</div>
		<div class="table-intro">Courses:</div>
		<table class="courses">
			<tr>
				<td v-for="course in education.courses.slice(0, 4)" :key="course" class="course">
					<span>{{ course }}</span>
				</td>
			</tr>
			<tr>
				<td v-for="course in education.courses.slice(5, 9)" :key="course" class="course">
					<span>{{ course }}</span>
				</td>
			</tr>
			<tr>
				<td v-for="course in education.courses.slice(10, 14)" :key="course" class="course">
					<span>{{ course }}</span>
				</td>
			</tr>
			<tr>
				<td v-for="course in education.courses.slice(15, 19)" :key="course" class="course">
					<span>{{ course }}</span>
				</td>
			</tr>
			<tr>
				<td v-for="course in education.courses.slice(20, 23)" :key="course" class="course">
					<span>{{ course }}</span>
				</td>
			</tr>
		</table>
	</div>
</template>

<script setup lang="ts">
import { education } from "@/assets/resume.json";

console.log(Object.keys(education.courses).length);
</script>

<style lang="scss" scoped>
@use "@/assets/main.scss" as *;

div.education {
	display: grid;
	min-width: 100%;
	font-size: 24pt;
	grid-template: 5rem 5rem 5rem / auto;
	margin: 1rem 0;
	position: relative;

	div {
		font-size: 20pt;

		span {
			font-size: 36pt;
			text-transform: uppercase;
			@include text-effect-simple();
		}
	}

	.table-intro {
		padding: 1rem 0;
		font-size: 30pt;
		font-family: Verdana, Geneva, Tahoma, sans-serif;
	}

	table.courses {
		table-layout: fixed;
		width: 100%;

		tr {
			padding: 1rem 0;
			height: 5rem;

			td {
				width: 20%;

				span {
					@include text-effect-simple();
				}
			}
		}
	}
}
</style>
