<template>
	<div class="contact">
		<div v-for="key in contactKeys" :key="key" class="key-row">
			<div class="arrow-col">
				<div p="x6" m="t1.5" i-mdi-arrow-right inline-icon size="5rem" />
			</div>
			<div v-if="typeof contact[key] !== 'object'" class="content-col">
				<span class="do-touch">
					<span class="key">{{ key }}:</span>
					{{ contact[key] }}
				</span>
			</div>
			<div v-else-if="typeof contact[key] === 'object'" class="content-col subkey-col">
				<span class="address-key">{{ key }}:</span>
				<div class="subkey-row">
					<div class="subkey-value-col">
						<span class="do-touch">
							{{ contact.address.street }}
						</span>
					</div>
					<div class="subkey-value-col">
						<span class="do-touch">
							{{
		contact.address.city +
		", " +
		contact.address.state +
		" " +
		contact.address.zipCode
							}}
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { contact } from "@/assets/resume.json";

console.log(contact);

const contactKeys = Object.keys(contact);

console.log(contactKeys);
</script>

<style lang="scss" scoped>
div.contact {
	min-width: 100%;
	font-size: 24pt;
	display: grid;
	grid-template: 5rem 5rem 5rem / auto;
	margin: 1rem 0;

	div.key-row {
		align-content: start;
		position: relative;
		display: grid;
		grid-template: auto / 8rem auto;

		.do-touch {
			pointer-events: auto;
		}

		div.arrow-col {
			position: relative;
			justify-content: end;
		}

		div.content-col {
			position: relative;
			justify-content: start;
		}
	}
}
</style>
