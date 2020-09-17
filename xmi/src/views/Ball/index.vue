<template>
	<div>
		<h1>星球</h1>
		<p>{{$store.state.User.name}}</p>
		<p @click="$store.commit('changeName')">改名</p>
		<button  @click="$store.dispatch('addNum')">actions</button>
		<br>
		<button>{{$store.getters.nameLen}}</button>
	</div>
</template>

<script>
	/* 接收封装的东西 */
	import request from '@/utils/request.js'
	// 通过令牌获取 笑话信息
	export default {
		created(){
			this.getJoks();
		},
		methods:{
			getJoks(){
			request.get("/mi/list2.php")
				.then(res=>{
					console.log(res.data);
				})
			}
		}
	}
</script>

<style>
</style>
