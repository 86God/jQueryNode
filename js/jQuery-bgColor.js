(function($){
	//需要给jQuery的原型添加方法
	$.fn.bgColor = function(color){
//		console.log(this); // 获取到的this是当前的调用对象div
		this.css('background-color',color);
		//返回jQuery对象
		return this;
	}
	
}(jQuery));
