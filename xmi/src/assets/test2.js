var name="tom";//创建变量
function fun(){
	alert(123);//创建一个方法
}

class person{
	// 创建一个类
	constructor(name) {
	    this.name=name;
	}
	say(){
		alert(name)
	}
}
function getNode(){
	var img =document.querySelector("img");
	alert(img.src);
}
export {fun,name,getNode};//导出
export default person;//默认导出