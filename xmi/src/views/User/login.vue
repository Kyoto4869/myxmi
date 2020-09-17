<template>
	<div>
		<h1>登录</h1>
		用户名：<input type="text" v-model="userid"/> <br/>
		密码：<input type="password" v-model="pwd"/><br/>
		<button @click="login()">登录</button>
	</div>
</template>

<script>
	import request from '@/utils/request.js'
	export default {
		data(){
			return {userid:'',pwd:''}
			// 用户名，密码
		},
		methods:{
			login(){
				// this.$http.post(
				// "/member/index_login2.php",
				// `fmdo=login&dopost=login&userid=${this.userid}&pwd=${this.pwd}`,
				// {headers:{"Content-Type":"application/x-www-form-urlencoded"}}
				// )
				// 根据接口，url，data参数，header
				request.postURL(
				"/member/index_login2.php",
				{userid:this.userid,pwd:this.pwd,fmdo:"login",dopost:"login"})
				.then(res=>{
					if(res.data.status){ //如果status为1 成功
						var that = this; // 保存个this
						sessionStorage.setItem("token",res.data.token)
						this.$notify({ 
							type:"success", //类型成功
							message:res.data.msg, //提示文本
							duration:300, //显示时间
							onClose(){ //当关闭跳转
							
							if (that.$route.query.redirect) {
								that.$router.push(that.$route.query.redirect);
							} else{
								/*为了不留记录，使用replace */
								that.$router.replace("/");
							}
							
						}});
						
					}else{
						this.$notify({type:"danger",message:res.data.msg});
						// 提示登录失败信息
					}
				})
				.catch(err=>{})
			}
		}
	}
</script>

<style>
</style>
