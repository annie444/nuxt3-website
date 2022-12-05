<template>
	<div id="letters">
		<div class="container toggled" ref="containterRef">
			<span v-for="letter in letters" :key="letter.value + letter.uniqueID" :id="letter.value + letter.uniqueID"
				:class="letter.name">
				<span id="text1" class="letter"
					:style="{ color: letter.color1, fontFamily: letter.font1 }">{{ letter.value }}</span>
				<span id="text2" class="letter"
					:style="{ color: letter.color2, fontFamily: letter.font2 }">{{ letter.value }}</span>
			</span>
		</div>
	</div>

	<svg id="filters">
		<defs>
			<filter id="threshold">
				<feColorMatrix in="SourceGraphic" type="matrix" values="1 0 0 0 0
                  0 1 0 0 0
                  0 0 1 0 0
                  0 0 0 255 -140" />
			</filter>
		</defs>
	</svg>
</template>

<script setup>
import WebFont from "webfontloader";
import headers from "./safe/headers.json";

const fonts = ref(null);

const getFonts = async () => {
	const response = await fetch(
		`https://www.googleapis.com/webfonts/v1/webfonts?key=${headers.key}`
	);
	if (!response.ok) {
		const error = (response && response.message) || response.statusText;
		console.error(error);
		return error;
	} else {
		let data = await response.json();

		data = Array.from(data.items).map((font) => {
			if (
				font.variants.includes("regular") &&
				font.kind === "webfonts#webfont" &&
				font.subsets.includes("latin")
			) {
				return font.family;
			}
		});

		fonts.value = [];

		for (let i = 0; i < 16; i++) {
			const randIndex = Math.floor(Math.random() * data.length);
			if (typeof data[randIndex] !== "undefined") {
				fonts.value.push(data[randIndex]);
			}
		}
	}
};

const loadFonts = () => {
	WebFont.load({
		google: {
			families: fonts.value,
		},
	});
};

const colors = [
	"#e50000",
	"#ff8000",
	"#ffee00",
	"#028121",
	"#004cff",
	"#760088",
	"#613915",
];

const letters = [
	{
		value: "A",
		uniqueID: 1,
		name: "first",
		color1: colors[Math.floor(Math.random() * colors.length)],
		color2: colors[Math.floor(Math.random() * colors.length)],
		font1: null,
		font2: null,
	},
	{
		value: "n",
		uniqueID: 2,
		name: "first",
		color1: colors[Math.floor(Math.random() * colors.length)],
		color2: colors[Math.floor(Math.random() * colors.length)],
		font1: null,
		font2: null,
	},
	{
		value: "a",
		uniqueID: 3,
		name: "first",
		color1: colors[Math.floor(Math.random() * colors.length)],
		color2: colors[Math.floor(Math.random() * colors.length)],
		font1: null,
		font2: null,
	},
	{
		value: "l",
		uniqueID: 4,
		name: "first",
		color1: colors[Math.floor(Math.random() * colors.length)],
		color2: colors[Math.floor(Math.random() * colors.length)],
		font1: null,
		font2: null,
	},
	{
		value: "e",
		uniqueID: 5,
		name: "first",
		color1: colors[Math.floor(Math.random() * colors.length)],
		color2: colors[Math.floor(Math.random() * colors.length)],
		font1: null,
		font2: null,
	},
	{
		value: "t",
		uniqueID: 6,
		name: "first",
		color1: colors[Math.floor(Math.random() * colors.length)],
		color2: colors[Math.floor(Math.random() * colors.length)],
		font1: null,
		font2: null,
	},
	{
		value: "t",
		uniqueID: 7,
		name: "first",
		color1: colors[Math.floor(Math.random() * colors.length)],
		color2: colors[Math.floor(Math.random() * colors.length)],
		font1: null,
		font2: null,
	},
	{
		value: "a",
		uniqueID: 8,
		name: "first",
		color1: colors[Math.floor(Math.random() * colors.length)],
		color2: colors[Math.floor(Math.random() * colors.length)],
		font1: null,
		font2: null,
	},
	{
		value: "E",
		uniqueID: 9,
		name: "last",
		color1: colors[Math.floor(Math.random() * colors.length)],
		color2: colors[Math.floor(Math.random() * colors.length)],
		font1: null,
		font2: null,
	},
	{
		value: "h",
		uniqueID: 10,
		name: "last",
		color1: colors[Math.floor(Math.random() * colors.length)],
		color2: colors[Math.floor(Math.random() * colors.length)],
		font1: null,
		font2: null,
	},
	{
		value: "l",
		uniqueID: 11,
		name: "last",
		color1: colors[Math.floor(Math.random() * colors.length)],
		color2: colors[Math.floor(Math.random() * colors.length)],
		font1: null,
		font2: null,
	},
	{
		value: "e",
		uniqueID: 12,
		name: "last",
		color1: colors[Math.floor(Math.random() * colors.length)],
		color2: colors[Math.floor(Math.random() * colors.length)],
		font1: null,
		font2: null,
	},
	{
		value: "r",
		uniqueID: 13,
		name: "last",
		color1: colors[Math.floor(Math.random() * colors.length)],
		color2: colors[Math.floor(Math.random() * colors.length)],
		font1: null,
		font2: null,
	},
];

onBeforeMount(async () => {
	await getFonts();
	loadFonts();

	const elts = Array.from(letters).map((x) => {
		const children = document.getElementById(`${x.value + x.uniqueID}`).childNodes;

		return {
			text1: children[0],
			text2: children[1],
		};
	});

	const morphTime = 1;
	const cooldownTime = 1;

	let time = new Date();
	let morph = 0;
	let cooldown = cooldownTime;

	const setMorph = (fraction) => {
		const savedFraction = fraction;
		for (let i = 0; i < letters.length; i++) {
			fraction = savedFraction;
			elts[i].text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
			elts[i].text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

			fraction = 1 - fraction;
			elts[i].text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
			elts[i].text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

			elts[i].text1.style.color = letters[i].color1;
			elts[i].text1.style.fontFamily = letters[i].font1;

			elts[i].text2.style.fontFamily = letters[i].font2;
			elts[i].text2.style.color = letters[i].color2;
		}
	};

	const doMorph = () => {
		morph -= cooldown;
		cooldown = 0;

		let fraction = morph / morphTime;

		if (fraction > 1) {
			cooldown = cooldownTime;
			fraction = 1;
		}

		setMorph(fraction);
	};

	const doCooldown = () => {
		morph = 0;

		for (let i = 0; i < letters.length; i++) {
			elts[i].text2.style.filter = "";
			elts[i].text2.style.opacity = "100%";

			elts[i].text1.style.filter = "";
			elts[i].text1.style.opacity = "0%";
		}
	};

	const nextAnimation = () => {
		for (let i = 0; i < letters.length; i++) {
			letters[i].color1 = letters[i].color2;
			letters[i].font1 = letters[i].font2;

			const textIndex = Math.floor(Math.random() * fonts.value.length);

			letters[i].color2 = colors[Math.floor(Math.random() * colors.length)];
			letters[i].font2 = fonts.value[textIndex];
		}
	};

	const animateFont = () => {
		requestAnimationFrame(animateFont);

		const newTime = new Date();
		const shouldIncrementIndex = cooldown > 0;
		const dt = (newTime - time) / 1000;
		time = newTime;

		cooldown -= dt;

		if (cooldown <= 0) {
			if (shouldIncrementIndex) {
				nextAnimation();
			}
			doMorph();
		} else {
			doCooldown();
		}
	};

	nextAnimation();
	animateFont();
});

const containterRef = ref(null);

onMounted(() => {
	setTimeout(() => {
		containterRef.value.classList.toggle("toggled");
		containterRef.value.classList.toggle("not-toggled");
	}, 1000);
});

onBeforeUnmount(() => {
	containterRef.value.classList.toggle("toggled");
	containterRef.value.classList.toggle("not-toggled");
});
</script>

<style>
.toggled {
	opacity: 0;
}

.not-toggled {
	-webkit-animation: fadeIn 0.5s linear forwards;
	animation: fadeIn 0.5s linear forwards;
}

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

#filters {
	z-index: 0;
	position: absolute;
}

#letters {
	height: 100%;
	width: 100%;
	display: grid;
	grid-template: 1fr 50% 2fr / 1fr 50% 1fr;
	margin: auto;
	z-index: 0;
	position: absolute;
}

.container {
	grid-column: 2 / 3;
	grid-row: 2 / 3;
	height: 50%;
	width: 100%;
	display: flex;
	justify-content: center;
	flex-flow: row wrap;
	align-items: flex-start;
}

.letter {
	display: inline-flex;
	align-items: flex-start;
	justify-items: center;
}

#text1,
#text2 {
	position: absolute;
	text-align: center;
	display: inherit;
	font-size: 10rem;
	grid-column: 1 / 2;
	grid-row: 1 / 2;
}

.first {
	display: inline-flex;
	height: 100%;
	width: 12.5%;
}

.last {
	display: inline-flex;
	height: 100%;
	width: 12.5%;
}
</style>
