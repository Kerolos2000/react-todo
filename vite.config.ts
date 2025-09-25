import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

export default defineConfig({
	build: {
		cssMinify: true,
		minify: 'esbuild',
		modulePreload: true,
		sourcemap: false,
		target: 'esnext',
	},
	plugins: [react()],
	resolve: {
		alias: {
			src: '/src',
		},
	},
	server: {
		hmr: true,
	},
});
