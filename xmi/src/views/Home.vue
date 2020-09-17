<template>
	<div>
		<div class="top">
			<mheader ></mheader>
			<subheader :tabs="tabs" @itemchange="activeTab=$event" ></subheader>
		</div>
		
		<!-- <swiper :gallery="gallery"></swiper>
		{{activeTab}} -->
		<!-- 实现缓存数据 -->
		<keep-alive>
			<page
			v-for="item in tabs" 
			:key="item.page_id" 
			v-if="item==activeTab"
			:tab="item"
			class="pagess"
			>
			</page>
		</keep-alive>
		
		
		
		 
	</div>	
</template>
<script>
	 import mheader from '@/components/Header/index.vue'
	 import subheader  from "@/components/SubHeader/index.vue"
	 import page  from "@/components/Page/index.vue"
	 // import swiper from "@/components/Swiper"
	 import swiper from '../components/Swiper/index.vue'
	 
	 //import axios from 'axios';
	export default {
		components:{mheader,subheader,page,swiper},
		created(){
			this.getPage()
		},
		methods:{
			getPage(){
				this.$http.get("https://www.520mg.com/mi/page.php")
				.then(res=>{
					this.tabs=res.data.data.tabs;
					this.activeTab=this.tabs[0];
				})
				.catch(err=>{
					console.log(err)
				})
			}
			
			
		},
		data(){
			return {
				users:[],
				ad_info:{},
				activeTab:null,
				tabs:[],
				gallery:[
					"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ee5cdc2ea0617bfca37fb478112e620a.jpg?thumb=1&w=720&h=360",
					"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/222a7c88144d66f53a62a988aada9d37.jpg?thumb=1&w=720&h=360",
					"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/386fc144cb48e644e8f59af7a35810b2.jpg?thumb=1&w=720&h=360",
					"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/03ff022009a635262d53451d532518ed.jpg?thumb=1&w=720&h=360"
				]
			}
		},
		 
	}

</script>

<style>
	.top{
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 399;
	}
	.pagess{
		margin-top: 1.76rem;
	}
	
</style>
 