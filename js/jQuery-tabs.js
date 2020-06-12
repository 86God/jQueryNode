$(function($){
	/**
	 * 给$原型添加tabs()方法
	 * @param option.tabHeads		需要注册事件的页签选择器
	 * @param option.tabHeadsClass	触发事件页签需要给页签添加的类
	 * @param option.tabBodys		需要显示的页面选择器
	 * @param option.tabBodysClass 	触发事件页签需要给页面添加的类
	 * 
	 */
	$.fn.tabs = function(option){
		var $bigDiv = this;
		
		//通过参数传递过来的页签选择器，获取到页签,给这些页签注册单击事件
		$bigDiv.find(option.tabHeads).on('click',function(){
			//给当前鼠标点击的页签添加option.tabHeadsClass类，其他的兄弟移除option.tabHeadsClass类
			$(this).addClass(option.tabHeadsClass).siblings().removeClass(option.tabHeadsClass);
		
			//获取当前点击的页签的索引
			var idx = $(this).index();
			console.log(idx);
			
			//获取索引一致的页面，给他添加option.tabBodysClass类，其他兄弟页面移除option.tabBodysClass类
			$bigDiv.find(option.tabBodys).eq(idx).addClass(option.tabBodysClass).siblings().removeClass(option.tabBodysClass);
		});
		
		return $bigDiv;
	};
}(jQuery));
