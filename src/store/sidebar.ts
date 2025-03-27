import { defineStore } from 'pinia';

export const useSidebarStore = defineStore('sidebar', {
	state: () => {
		return {
			collapse: false,
			bgColor: '#fff',
			textColor: '#3D3D3D'
		};
	},
	getters: {},
	actions: {
		handleCollapse() {
			this.collapse = !this.collapse;
		},
		setBgColor(color: string) {
			this.bgColor = color;
			localStorage.setItem('sidebar-bg-color', color);
		},
		setTextColor(color: string) {
			this.textColor = color;
			localStorage.setItem('sidebar-text-color', color);
		}
	}
});
