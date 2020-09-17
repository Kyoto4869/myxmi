// var Mock = require('mockjs')
import Mock from 'mockjs'
// Mock.mock("http://www.mi.com/list","get",function() {
// 	return {
// 		status: 0,
// 		name: "mumu",
// 		age: 18
// 	}
// })

// Mock.mock(/list/,"get",function() {
// 	return {
// 		status: 0,
// 		name: "mumu",
// 		age: 18
// 	}
// })

Mock.mock(/api\/echo/,"post",function(options) {
	var data= JSON.parse(options.body);
	// console.log(data,options)
	return {
		status: 0,
		msg:`${data.name}的年纪是${data.age}`
	}
})

/* mock 随机数 
    
	用户列表
	name：姓名
	age: 年龄
	gender：性别
	salary ：薪资
	pic 头像
	tel 电话
	email 邮箱
	address 地址
	motto 格言 
	QQ 6~12

*/

Mock.mock(/api\/users/,{
	msg:"成功",
	status:0,
	"list|10":[
		{
			"name":"@cname",
			"id|+1":996,
			"age|16-80":1,
			"gender|1":[1,2,3],
			"salary|5000-1500.2":1,
			"pic":function(){
				return Mock.Random.dataImage("200x100",this.name)
			},
			"tel":/1\d{10}/,
			"email":/\w{2,5}\d{0,3}@126\.com/,
			"address":"@county(true)",
			"motto":"@csentence",
		     "qq":/\d{5,12}/,
			 
			
		}
	]
	
})