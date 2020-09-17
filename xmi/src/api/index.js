import request from '@/utils/request.js'

export const GetUserInfo=()=>{
	return new Promise((resolve,reject)=>{
		request.get("/member/ajax_login.php")
		.then(res=>resolve(res))
		.catch(err=>reject(err))
	})
}

export const Exit=data=>{
	return new Promise((resolve,reject)=>{
		request.postURL("/member/index_login.php",data)
		.then(res=>resolve(res))
		.catch(err=>reject(err))
	})
}