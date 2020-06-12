(function($){
	/**
	 * 给$原型添加table方法
	 * @param {Object} arrTableHead	生成表格表头的数据
	 * @param {Object} arrTableBody	生成表格主体的数据
	 */
	$.fn.table = function(arrTableHead,arrTableBody){
//		console.log(this); //调用table方法的jQuery对象
		var list = [];
		list.push('<table>');
		//生成表头
		list.push('<thead>');
		list.push('<tr>');
		for(var i = 0 ;i<arrTableHead.length;i++){
			list.push('<th>');
			list.push(arrTableHead[i]);
			list.push('</th>');
		}
		list.push('</tr>');
		list.push('</thead>');
		
		//生成表格主体
		for(var i = 0;i<arrTableBody.length;i++){
			list.push('<tr>');
			list.push('<td>');
			list.push(i+1);
			list.push('</td>');
			//遍历arrTableBody数组元素
			for(var key in arrTableBody[i]){
				list.push('<td>');
				list.push(arrTableBody[i][key]);
				list.push('</td>');
			}
			list.push('</tr>');
		}
		
		
		list.push('</table>');
//		console.log(list.join(""));
		this.html(list.join(""));
		
		return this;
	}
}(window.jQuery));
