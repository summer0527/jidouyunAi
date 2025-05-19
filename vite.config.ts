import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import VueSetupExtend from 'vite-plugin-vue-setup-extend';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

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
			'/api': {
				target: process.env.VITE_API_BASE_URL || '127.0.0.1:1819',
				changeOrigin: true,
			},
			'/regedit_login': {
				target: '192.168.1.18:1819',
				changeOrigin: true,
		
			},
			
			'/speciality': {
				target: '192.168.1.18:1819',
				changeOrigin: true,
		
			},
			'/dify_data': {
				target: '192.168.1.18:1819',
				changeOrigin: true,
		
			},
			'/dify_code': {
				target: '192.168.1.18:1819',
				changeOrigin: true,
		
			},
			'/dify_aq': {
				target: '192.168.1.18:1819',
				changeOrigin: true,
		
			},
			'/dify_memory': {
				target: '192.168.1.18:1819',
				changeOrigin: true,
		
			},
			'/dify_teaching': {
				target: '192.168.1.18:1819',
				changeOrigin: true,
		
			},
			'/dify_language': {
				target: '192.168.1.18:1819',
				changeOrigin: true,
		
			},
			'/dify_customer': {
				target: '192.168.1.18:1819',
				changeOrigin: true,
		
			},
			'/dify_knowledge':{
				target: '192.168.1.18:1819',
				changeOrigin: true,
			},
			'/newlanguage':{
				target: '192.168.1.18:1819',
				changeOrigin: true,
			},
			'/dify_class':{
				target: '192.168.1.18:1819',
				changeOrigin: true,
			},
			'/dify_lean':{
				target: '192.168.1.18:1819',
				changeOrigin: true,
			},
			'/dify_gang':{
				target: '192.168.1.18:1819',
				changeOrigin: true,
			},
			'/dify_sub':{
				target: '192.168.1.18:1819',
				changeOrigin: true,
			},
			'/dify_man':{
				target: '192.168.1.18:1819',
				changeOrigin: true,
			},
			'/dify_excel':{
				target: '192.168.1.18:1819',
				changeOrigin: true,
			},
			'/dify_doctor':{
				target: '192.168.1.18:1819',
				changeOrigin: true,
			},
			'/dify_physical':{
				target: '192.168.1.18:1819',
				changeOrigin: true,
			},
			'/dify_health':{
				target: '192.168.1.18:1819',
				changeOrigin: true,
			},
			'/dify_treatment':{
				target: '192.168.1.18:1819',
				changeOrigin: true,
			},
			'/dify_car':{
				target: '192.168.1.18:1819',
				changeOrigin: true,
			},
			'/dify_virtuallearning':{
				target: '192.168.1.18:1819',
				changeOrigin: true,
			},
			'/specialityss':{
				target: '192.168.1.18:1819',
				changeOrigin: true,
			},
			
			
			
			
			
			
			
			

		}
	},
	optimizeDeps: {
		include: ['schart.js','jquery']
	},
	resolve: {
		alias: {
			'@': '/src',
			'~': '/src/assets',
			'jquery': 'jquery/dist/jquery.min.js'
		}
	},
	define: {
		__VUE_PROD_HYDRATION_MISMATCH_DETAILS__: "true",
	},
	root: './', // 项目根目录
    build: {
        rollupOptions: {
            input: [
                'C:/Users/school-windows-web/jiAi/jidouyunAi/index.html',
                'C:/Users/school-windows-web/jiAi/jidouyunAi/src/assets/iconfont/demo_index.html'
            ]
        },
		// minify: 'terser',
		// terserOptions: {
		//   compress: {
		// 	drop_console: true, // 移除console
		// 	drop_debugger: true, // 移除debugger
		// 	pure_funcs: ['console.log'], // 移除特定的函数调用
		//   },
		// },
    }
});


