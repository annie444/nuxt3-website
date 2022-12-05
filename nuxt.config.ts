import { NuxtLoadingIndicator } from './.nuxt/components.d';
// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'node:url';

export default defineNuxtConfig({
	alias: {
		"@": fileURLToPath(new URL('.', import.meta.url)),
		"~": fileURLToPath(new URL('.', import.meta.url)),
		".": fileURLToPath(new URL('.', import.meta.url)),
		'images': fileURLToPath(new URL('./assets/images', import.meta.url)),
		'style': fileURLToPath(new URL('./assets/styles', import.meta.url)),
		'data': fileURLToPath(new URL('./assets/data', import.meta.url))
	},
	app: {
		baseURL: '/',
		buildAssetsDir: 'assets',
		pageTransition: { name: 'page', mode: 'out-in' },
		head: {
			"meta": [
				{
					"name": "viewport",
					"content": "width=device-width, initial-scale=1"
				},
				{
					"charset": "utf-8"
				}
			],
			"link": [
				{ rel: 'stylesheet', href: fileURLToPath(new URL('./assets/styles/main.scss', import.meta.url)) }
			],
			"style": [],
			"script": [],
			"noscript": [
				{ children: 'Javascript is required' }
			]
		},
		rootId: 'app',
		rootTag: 'div',
	},
	build: {
		analyze: true,
		transpile: ['animejs', 'webfontloader']
	},
	css: ["style/main.scss"],
	components: {
		dirs: [
			{
				"path": "~/components/global",
				"global": true
			},
			"~/components"],
	},
	devServer: {
		https: {
			key: fileURLToPath(new URL('./devServer.pem', import.meta.url)),
			cert: fileURLToPath(new URL('./devCertificate.pem', import.meta.url))
		}
	},
	extensions: [
		".js",
		".jsx",
		".mjs",
		".ts",
		".tsx",
		".vue"
	],
	imports: {
		// Auto-import pinia stores defined in `~/stores`
		dirs: ['stores']
	},
	modules: [
		// Using package name
		'@nuxt/content',
		'@nuxtjs/google-fonts'
	],
	runtimeConfig: {
		apiKey: '', // Default to an empty string, automatically set at runtime using process.env.NUXT_API_KEY
		public: {
			baseURL: '' // Exposed to the frontend as well.
		}
	},
	googleFonts: {
		families: {
			Roboto: true,
			'Josefin+Sans': true,
			Lato: [100, 300],
			Raleway: {
				wght: [100, 400],
				ital: [100]
			},
		}
	}
})
