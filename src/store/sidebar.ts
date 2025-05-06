import { defineStore } from 'pinia';

export const useSidebarStore = defineStore('sidebar', {
	state: () => {
		return {
			isDa:true,
			collapse: true,
			bgColor: '#fff',
			textColor: '#3D3D3D'
		};
	},
	getters: {},
	actions: {
		handleCollapse() {
			console.log(this.collapse,'this.collapsethis.collapsethis.collapse')
			this.collapse = !this.collapse;
		},
		handleShowIcon(type:any) {


			if (type) {

				this.isDa=false
				console.log(this.isDa,'storisda')
			  } else {
				this.isDa=true
			
			  }
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
