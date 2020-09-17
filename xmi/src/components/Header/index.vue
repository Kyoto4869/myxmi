<template>
	<div class="header">
		<div class="left">
			<img src="../../assets/logo.png" width="22" alt="">
		</div>
		<input type="text">
		<div class="right">
			<img src="../../assets/user.png" width="22" alt="">
		</div>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
	.header{
		height: .88rem;
		background-color: #F0F0F0;
		display: flex;
		align-items: center;
		
	}
	
	.header input{
		flex: 1;
		height: .6rem;
		padding: 0 0.05rem;
	}
	
	.header .left,.header .right{
		padding: 0 .3rem;
	}
	
	
</style>
