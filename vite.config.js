import path from 'path';
import { sveltekit } from '@sveltejs/kit/vite';
import basicSsl from '@vitejs/plugin-basic-ssl'

/** @type {import('vite').UserConfig} */
export default {
	build: {
		target: 'esnext'
	},

	logLevel: 'info',

	plugins: [
		// apply cross-origin isolation headers when previewing locally
		{
			name: 'cross-origin-isolation-for-preview',
			configureServer: (server) => {
				server.middlewares.use((_, res, next) => {
					res.setHeader('cross-origin-opener-policy', 'same-origin');
					res.setHeader('cross-origin-embedder-policy', 'require-corp');
					res.setHeader('cross-origin-resource-policy', 'cross-origin');
					next();
				});
			},
			configurePreviewServer: (server) => {
				server.middlewares.use((_, res, next) => {
					res.setHeader('cross-origin-opener-policy', 'same-origin');
					res.setHeader('cross-origin-embedder-policy', 'require-corp');
					res.setHeader('cross-origin-resource-policy', 'cross-origin');
					next();
				});
			},
		},

		sveltekit(),
		basicSsl()
	],

	server: {
		fs: {
			allow: [path.resolve('.apps')]
		},
		watch: {
			ignored: ['**/.apps/**']
		}
	},

	ssr: {
		noExternal: ['@sveltejs/site-kit']
	},

	optimizeDeps: {
		exclude: ['@sveltejs/site-kit']
	}
};
