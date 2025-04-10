import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import VueSetupExtend from 'vite-plugin-vue-setup-extend';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Vue from '@vitejs/plugin-vue';

export default defineConfig({
	base: './',
	plugins: [
		vue(),
		VueSetupExtend(),
		AutoImport({
			resolvers: [ElementPlusResolver()]
		}),
		Components({
			resolvers: [ElementPlusResolver()]
		}),
		
	],
	server:{
		hmr: true, // 确保热更新开启
		host: '0.0.0.0',
		proxy: {
			'/regedit_login': {
				target: 'http://192.168.1.6:1818',
				changeOrigin: true,
		
			},
			'/login':{
				target: 'http://192.168.1.6:1818',
				changeOrigin: true,
			},
			'/speciality': {
				target: 'http://192.168.1.6:1818',
				changeOrigin: true,
		
			},
			'/dify_data': {
				target: 'http://192.168.1.6:1818',
				changeOrigin: true,
		
			},
			'/dify_code': {
				target: 'http://192.168.1.6:1818',
				changeOrigin: true,
		
			},
			'/dify_aq': {
				target: 'http://192.168.1.6:1818',
				changeOrigin: true,
		
			},
			'/dify_memory': {
				target: 'http://192.168.1.6:1818',
				changeOrigin: true,
		
			},
			'/dify_teaching': {
				target: 'http://192.168.1.6:1818',
				changeOrigin: true,
		
			},
			'/dify_language': {
				target: 'http://192.168.1.6:1818',
				changeOrigin: true,
		
			},
			'/dify_customer': {
				target: 'http://192.168.1.6:1818',
				changeOrigin: true,
		
			}
			
			
			
			
			

		}
	},
	optimizeDeps: {
		include: ['schart.js']
	},
	resolve: {
		alias: {
			'@': '/src',
			'~': '/src/assets'
		}
	},
	define: {
		__VUE_PROD_HYDRATION_MISMATCH_DETAILS__: "true",
	},
});
