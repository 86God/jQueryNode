# jQuery 框架

## 01、jQuery 简介

jQuery 是一个 JavaScript 库。

jQuery 极大地简化了 JavaScript 编程。

**先来感受一下jQuery的魅力：**

**之前的js处理：**

```html
<!DOCTYPE html>
<!--
	作者：2584966199@qq.com
	时间：2020-05-28
	描述：利用js给按钮添加事件
-->
<html>

	<head>
		<meta charset="UTF-8">
		<title></title>
		<style>
			div {
				width: 200px;
				height: 200px;
			}
		</style>
		<script>
			
			//入口函数
			window.onload = function() {
				var btnOne = document.getElementById("btnOne");
				var btnTwo = document.getElementById("btnTwo");
				var divs = document.getElementsByTagName("div");
				console.log(btnOne);
				btnOne.onclick = function() {
					for(var i = 0; i < divs.length; i++) {
						divs[i].style.border = '1px solid red';
					}
				}

				btnTwo.onclick = function() {
					for(var i = 0; i < divs.length; i++) {
						divs[i].innerText = "我是设置的文本";
					}
				}
			}
	
			//只能有一个入口函数	
//			window.onload = function(){
//				console.log("我又是一个入口函数");
//			}


		</script>
	</head>

	<body>
		<input type="button" value="设置边框" id="btnOne" />
		<input type="button" value="设置文本" id="btnTwo" />
		<div></div>
		<div></div>
		<div></div>
	</body>

</html>
```

 

### 原生 js 的缺点：

- 只能有一个入口函数，后面的会把前面的覆盖掉
- 原生js的api名字太长
- 原生js有的时候代码冗余
- 原生js的api有兼容问题
- 原生js的容错率比较低，前面代码出问题，后面的代码执行不了



**现在使用 jQuery 处理：**

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>jQuery解决上述问题</title>
		<style>
			div {
				width: 200px;
				height: 200px;
			}
		</style>	
	</head>
		<body>
		<input type="button" value="设置边框" id="btnOne" />
		<input type="button" value="设置文本" id="btnTwo" />
		<div></div>
		<div></div>
		<div></div>
	</body>
</html>



<script src="js/jQuery.js"></script>
<script>
	//入口函数
	$(document).ready(function(){
		//设置边框
		$('#btnOne').click(function(){
			$('div').css('border','1px solid red');
		})
		
		//设置文本
		$('#btnTwo').click(function(){
			$('div').text("我是设置的文本");
		})
	});
	
	//入口函数
	$(document).ready(function(){
		console.log("我又是一个入口函数");
	})
		
</script>
```



### jQuery 的优点：

- 是可以有多个入口函数
- jQuery的api名字简单
- jQuery代码简洁（隐式迭代）
- jQuery帮我们解决浏览器兼容问题
- 容错率较高，前面代码出现问题，后面代码不受影响



## 02、如何使用 jQuery ？

### 使用步骤：

1. 从 [jquery.com](http://jquery.com/download/) 下载 jQuery 库
2. 在html文件中引入jQuery文件
3. 先写一个入口函数
4. 找到你要操作的元素（jQuery 选择器）
5. 去操作他的属性，样式



```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
	</head>
	<body>
		<div></div>
	</body>
</html>

<script src="js/jQuery3.5.1.js">	</script>

<script>
	//如何使用jQuery?
		//1.引入jQuery文件
		//2.先写一个入口函数
		//3.找到你要操作的元素（jQuery 选择器）
		//4.去操作他的属性，样式
	
	$(document).ready(function(){
		//链式编程
		$('div').width(100).height(100).css('backgroundColor','red').text('呵呵');
	})
	
</script>
```



## 03、jQuery 入口函数

### jQuery 入口函数有两种写法：

两种写法效果是一样的

（1）

```js
$(document).ready(function(){
		
});
```

（2）

```js
$(function(){
		
});
```



### jQuery入口函数与window.onload的区别

(1) 可执行次数不同：

- window.onload入口函数不能写多个，但是jQuery的入口函数是可以写多个的。
- JQuery的方式相当于页面加载的事件,可以执行多次.效率比window.onload要高.

(2) 执行时机不同：

- windows onload方法是在网页中所有的元素（包括元素的所有关联文件）完全加载到浏览器后才执行，即JavaScript此时才可以访问网页中的任何元素。
- jQuery中的$（document）.ready（）方法注册的时间处理程序， 在DOM完全就绪时就可以被调用。此时，网页的所有元素对jQuery而言都是可以访问的，但是，这并不意味着这些元素关联的文件都已经下载完毕。



## 04、$ 函数

### $ 是什么？

（1）如果报了错误：$ is not defined,就说明没有引入jQuery文件

（2）jQuery文件结构：

- jQuery 其实是一个自执行函数
- window.jQuery = window.$ = jQuery;

（3）jQuery 的源码刨析

- 引入一个js文件，是会执行这js文件中的代码的
- jQuery文件是一个自执行函数，执行这个jQuery文件中的代码，其实就是执行这个自制行函数
- 这个自制行文件就是给window对象添加了一个jQuery 属性和$属性
- jQuery 其实是一个自执行函数

（4）$是一个函数，参数不同效果也不同

- 如果传递一个匿名函数————入口函数

  ```js
  $(function(){
  		console.log('sss');
  		
  })
  ```

- 如果传递的是一个字符串————选择器/创建一个标签

  ```js
  $('#btnOne')
  $('<div>我是一个div标签</div>')
  ```

- 如果传递一个dom对象，那么他就会把dom对象转换成jQuery对象

  ```js
  var div1 = document.getElementById('divOne');
  var $divOne = $(div1);
  console.log($divOne);
  ```

  

## 05、DOM 对象和 jQuery 对象

### dom对象：

- 原生js选择器获取到对象

  ```js
  var div1 = document.getElementById("divOne");
  ```

  

- 特点：只能调用dom方法和属性，不能调用jQuery的方法和属性

  ```js
  		//dom对象是可以调用dom的属性和方法
  		div1.style.backgroundColor = "red";
  		
  		//dom对象是不可以调用jQuery的属性和方法
  //		div1.css('backgroundColor','red');
  ```



### jQuery对象

- 利用jQuery选择器获取的对象

  ```js
  var $div1 = $('#divOne');
  ```

- jQuery对象是可以调用jQuery的属性和方法

  ```js
  $div1.css('background-color','green');
  ```

- jQuery对象是不可以调用dom的属性和方法

  ```js
  //  $div1.style.backgroundColor = "red";
  ```

- jQuery 不是一个数组对象，jQuery是一个伪数组，jQuery对象其实就是dom对象的包装集

  ```js
  console.log($div1);
  console.log($div1.__proto__ === Array.prototype);
  ```



### dom 对象和 jQuery 对象的相互转换

- 将dom对象转换为jQuery对象

  ```js
  var div1 = document.getElementById('divOne');
  var $divOne = $(div1);
  console.log($divOne);
  ```

- 将jQuery对象转换为dom对象

  ```js
  var $divs = $('div');
  
  //5.1通过下标取出来
  var div11 = $divs[0];
  console.log(div11);
  		
  //5.2通过jQuery的get()
  var div12 = $divs.get(1);
  console.log(div12);
  ```

  

## 06、一个简单的案例——开关灯

```js
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
	</head>
	<body>
		<button>开灯</button>
		<button>关灯</button>
		<img src="img/1.jpg" />
	</body>
</html>

<script type="text/javascript" src="js/jQuery未压缩版.js" ></script>
<script>
	var btns = $('button');
	console.log(btns);
//	btns[0].onclick = function(){
//		$('body').css('background-color','white');
//	}
//	
//	btns[1].onclick = function(){
//		$('body').css('background-color','black');
//	}
	
	$(btns[0]).click(function(){
		$('body').css('background-color','white');
	});
	
	btns[1].onclick = function(){
		$('body').css('background-color','black');
	}
	
</script>

```



## 07、设置和获取文本

### 获取文本：text()方法，无参数

- 通过id获取div1的文本，会把div的以及子类的文本全部获取

  ```js
  $('#but1').click(function(){
  	console.log($('#div1').text());
  });
  ```

- 通过标签获取多个dom，会把所有dom标签的文本获取到

  ```js
  $('#but1').click(function(){
  	console.log($('div').text());
  });
  ```



### 设置文本：text()方法，传参数

注意：设置文本会覆盖原来的内容，如果文本中用标签，是不会解析出来的

- 通过id设置div1的文本，会把div1的以及子类的全部替换

  ```js
  $('#but2').click(function(){
  	console.log($('#div1').text('我是新设置的文本<a>我的连接</a>'));
  });
  ```

- 通过标签设置多个dom，会把所有dom标签及其子类的文本全部替换掉

```js
$('#but2').click(function(){
	console.log($('div').text('我是新设置的文本<a>我的连接</a>'));
});
```



完整案例：

```js
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
	</head>
	<body>
		<div id='div1'>
			我的一个div1标签
			<p>我是p标签</p>
			<span>我是一个span标签</span>
		</div>
		
		<div id='div3'>
			我的一个div2标签
			<p>我是p标签</p>
			<span>我是一个span标签</span>
		</div>
		<button id="but1">获取文本</button>
		<button id="but2">设置文本</button>
	</body>
</html>

<script type="text/javascript" src="js/jQuery未压缩版.js" ></script>
<script>
	$(function(){
		
		//1获取文本，text()方法
		//1.1 通过id获取div1的文本，会把div的以及子类的文本全部获取
//		$('#but1').click(function(){
//			console.log($('#div1').text());
//		});
		
		//1.2 通过标签获取多个dom，会把所有dom标签的文本获取到
		$('#but1').click(function(){
			console.log($('div').text());
		});
		
		
		
		//2.设置文本 
		//设置文本会覆盖原来的内容，如果文本中用标签，是不会解析出来的
		//2.1 通过id设置div1的文本，会把div1的以及子类的全部替换
		$('#but2').click(function(){
			console.log($('#div1').text('我是新设置的文本<a>我的连接</a>'));
		});
		
		//2.2 通过标签设置多个dom，会把所有dom标签及其子类的文本全部替换掉
		$('#but2').click(function(){
			console.log($('div').text('我是新设置的文本<a>我的连接</a>'));
		});
		
	});
</script>
```



## 08、设置和获取样式

### 获取样式，css()方法，无参

- 获取id为div1的样式

  ```js
  console.log($('#div1').css('width'));
  console.log($('#div1').css('height'));
  console.log($('#div1').css('background-color'));
  console.log($('#div1').css('border'));
  
  //在IE浏览器中，获取边框样式，一定要给准确的属性
  console.log($('#div1').css('border-top-width'));
  ```

- 通过标签获取标签为div的样式（只能获取到第一个div的样式）

  ```js
  console.log($('div').css('width'));
  console.log($('div').css('height'));
  console.log($('div').css('background-color'));
  console.log($('div').css('border'));
  
  //在IE浏览器中，获取边框样式，一定要给准确的属性
  console.log($('div').css('border-top-width'));
  ```



### 设置样式：css(样式名,样式值)

- 给id为div1的元素设置样式

  ```js
  //设置单样式
  $('#div1').css('width',200);
  $('#div1').css('height','200px');
  $('#div1').css('background-color','red');
  $('#div1').css('border','10px solid green');
  
  //设置多样式
  $('#div1').css({
      width:300,
      'height':300,
      backgroundColor:'red',
   //	'background-color':'red',
      border:'10px solid green',
  });
  ```

- 给标签为div的元素们设置样式
  注意：会给所有的div元素全部设置到新样式

  ```js
  $('div').css({
  	width:300,
  	'height':300,
  	backgroundColor:'red',
  //	'background-color':'red',
  	border:'10px solid green',
  });
  ```

完整案例：

```js
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
		<style>
			div{
				width: 100px;
				height: 100px;
				border: 2px solid red;
				background-color: skyblue;
			}
		</style>
	</head>
	<body>
		<button id='but1'>获取</button>
		<button id='but2'>设置</button>
		<div id='div1'></div>
		<div id='div2'></div>
		<div id='div3'></div>
	</body>
</html>

<script type="text/javascript" src="js/jQuery未压缩版.js" ></script>
<script>
	$(function(){
		//1.获取样式，css()方法
		$('#but1').click(function(){
			//1.1 获取id为div1的样式
			console.log($('#div1').css('width'));
			console.log($('#div1').css('height'));
			console.log($('#div1').css('background-color'));
			console.log($('#div1').css('border'));
//			
//			//在IE浏览器中，获取边框样式，一定要给准确的属性
//			console.log($('#div1').css('border-top-width'));
			
			//1.2 获取标签为div的样式（只能获取到第一个div的样式）
			//获取包含多个dom对象的样式，只能回去到第一个元素的样式
			console.log($('div').css('width'));
			console.log($('div').css('height'));
			console.log($('div').css('background-color'));
			console.log($('div').css('border'));
			
			//在IE浏览器中，获取边框样式，一定要给准确的属性
			console.log($('div').css('border-top-width'));
			
		})
		
		
		//2.设置样式：css(样式名,样式值)
		//设置的样式是行内样式
		$('#but2').click(function(){
			//2.1 给id为div1的元素设置样式
			//设置单样式
//			$('#div1').css('width',200);
//			$('#div1').css('height','200px');
//			$('#div1').css('background-color','red');
//			$('#div1').css('border','10px solid green');
			
			//设置多样式
			$('#div1').css({
				width:300,
				'height':300,
				backgroundColor:'red',
//				'background-color':'red',
				border:'10px solid green',
				
			});
			
			//2.2 给标签为div的元素们设置样式
			//会给所有的div元素全部设置到新样式
			
			$('div').css({
				
				width:300,
				'height':300,
				backgroundColor:'red',
//				'background-color':'red',
				border:'10px solid green',
				
			});
			
			
		})
	})
</script>
```



## 9、选择器

### jQuery 基本选择器：

| 名称       | 用法              | 描述                               |
| ---------- | ----------------- | ---------------------------------- |
| ID选择器   | $('#id');         | 获取指定ID的元素                   |
| 类选择器   | $('.class');      | 获取同一类class的元素              |
| 标签选择器 | $('div');         | 获取同一类标签的所有元素           |
| 并集选择器 | $('div,p,li');    | 使用逗号分隔，只要符合条件之一即可 |
| 交集选择器 | $('div.redClass') | 获取class为redClass的div元素       |

注意：跟css的一摸一样

案例：

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>基本选择器</title>
	</head>
	<body>
		<div>
			<ul>
				<li id="slg">国公联合司令官</li>
			</ul>
			<ul id="dlt">
				<li class="tz">独立团团长——李云龙</li>
				<li>狙击手</li>
				<li>士兵</li>
				<li>士兵</li>
				<li>士兵</li>
				<li class="hf">伙夫</li>
				<li class="wsy">卫生员</li>
			</ul>
			
			<ul id="t358">
				<li class="tz">358团团长——楚云飞</li>
				<li>狙击手</li>
				<li class="nj">士兵</li>
				<li>士兵</li>
				<li>士兵</li>
				<li class="hf">伙夫</li>
				<li class="wsy">卫生员</li>
			</ul>
			<ul id="lbx">
				<li class="nj">老百姓</li>
				<li>老百姓</li>
				<li>老百姓</li>
				<li>老百姓</li>
			</ul>
		</div>		
	</body>
</html>

<script type="text/javascript" src="js/jQuery.js" ></script>
<script>
	$(function(){
		/*
		 * (1)让国公联合司令官讲话
		 * 将国公联合司令官标签放大
		 * 利用 元素选择器 —— $('#id');
		 */
		$('#slg').css("font-size",40);
		
		/*
		 * (2)让团长讲话
		 * 将团长的标志放大
		 * 利用 类选择器 —— $('.class');
		 */
		$('.tz').css("font-size",30);
		
		/*
		 * (3)全军出击
		 * 让司令官、团长、军队标签背景色变成红色
		 * 利用 并集选择器 —— $('div,p,li');
		 */
		$('#t358,#dlt').css("background-color",'red');
		
		/*
		 * (4)抓出内奸，不能惊动老百姓
		 * 让内奸标签的背景色变成绿色
		 * 利用 交集选择器 —— $('div.redClass');
		 */
		$('#t358 .nj').css('background-color','green');
	});
	
</script>
```



### jQuery 层级选择器

| 名称       | 用法          | 描述                                                         |
| ---------- | ------------- | ------------------------------------------------------------ |
| 子代选择器 | $('ul > li'); | 使用 > 符号，获取儿子层级的元素，注意，并不会获取到孙子级别的元素 |
| 后代选择器 | $('ul li');   | 使用 空格，代表后代选择器，获取url下的所有li元素，包括子孙   |

注意：跟css的一摸一样

案例：

```js
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>层级选择器</title>
	</head>
	<body>
		<div id='father'>爸爸div
			<span>舅舅</span>
			<span>大伯</span>
			<p>二伯</p>
			<p>三伯</p>	
				
			<div id='son'>儿子div
				<span>儿子1</span>
				<span>儿子2</span>
				<p>儿子3</p>
				<div id='grandson'>孙子div
					<span>孙子1</span>
					<span>孙子2</span>
					<p>孙子3</p>
				</div>
			</div>
			
		</div>
	</body>
</html>
<script type="text/javascript" src="js/jQuery.js" ></script>
<script>
	$(function(){		
		//1.子代选择器		
		//(1)获取到id为father的直接子代div，不能获取到孙子元素		
		console.log($('#father > div'));
				
		//(2)获取id为father的直接子代div和span		 
		console.log($('#father > div , #father > p '))
		
		//2.后代选择器
		//获取id为father的所有子代div，包括孙子代
		console.log($('#father div'));
		
	})
</script>
```



### jQuery 过滤选择器

该类选择器都带有冒号

| 名称       | 用法          | 描述                                           |
| ---------- | ------------- | ---------------------------------------------- |
| :eq(index) | $('li:eq(2)') | 获取到li元素中索引号为2的元素，索引是从0开始的 |
| :odd       | $('li:odd')   | 获取到li元素中索引号为奇数的元素               |
| :even      | $('li:even')  | 获取到li元素中索引号为偶数的元素               |

案例:

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>过滤选择器</title>
	</head>
	<body>
		<ul>
			<li>我的第0个li标签</li>
			<li>我的第1个li标签</li>
			<li>我的第2个li标签</li>
			<li>我的第3个li标签</li>
			<li>我的第4个li标签</li>
			<li>我的第5个li标签</li>
			<li>我的第6个li标签</li>
			<li>我的第7个li标签</li>
			<li>我的第8个li标签</li>
			<li>我的第9个li标签</li>
			
		</ul>
	</body>
</html>
<script type="text/javascript" src="js/jQuery.js" ></script>
<script>
	$(function(){
		
		//设置索引号为奇数的li标签颜色
		$('li:odd').css('background-color','green');
		
		//设置索引号为偶数的li标签颜色
		$('li:even').css('background-color','yellow');
        
        //设置索引号为5的li标签颜色
		$('li:eq(5)').css('background-color','red');
	})
</script>
```



### jQuery 属性选择器：

可以根据属性进行筛选

语法：

```js
//在li标签中筛选出带有flag属性为flag的元素
$('li[flag=flag]')
```



### jQuery筛选选择器（方法）

| 名称               | 用法                       | 描述                              |
| ------------------ | -------------------------- | --------------------------------- |
| children(selector) | $('ul').children('li')     | 相当于$('ul > li')，子代选择器    |
| find(selector)     | $('ul').find('li')         | 相当于$('ul li')，后代选择器      |
| siblings(selector) | $('#first').siblings('li') | 查找兄弟结点，不包括自己          |
| parent()           | $('#first').parent()       | 查找父亲                          |
| eq(index)          | $('li').eq(2)              | 相当于$('li:eq(2)')，index从0开始 |
| next()             | $('li').next()             | 找下一个兄弟                      |
| prev()             | $('li').prev()             | 找上一个兄弟                      |

#### 案例：下拉菜单

```js
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>筛选选择器</title>
		<style>
			/*
			 * 先让二级菜单隐藏
			 */
			.wrap ul li ul{
				display: none;
			}
		</style>
	</head>
	<body>
		<div class="wrap">
			<ul>
				<li>
					<a href="">一级菜单</a>
					<ul>
						<li><a href="">二级菜单1</a></li>
						<li><a href="">二级菜单2</a></li>
						<li><a href="">二级菜单3</a></li>
					</ul>
				</li>
				
				<li>
					<a href="">一级菜单</a>
					<ul>
						<li><a href="">二级菜单1</a></li>
						<li><a href="">二级菜单2</a></li>
						<li><a href="">二级菜单3</a></li>
					</ul>
				</li>
				<li>
					<a href="">一级菜单</a>
					<ul>
						<li><a href="">二级菜单1</a></li>
						<li><a href="">二级菜单2</a></li>
						<li><a href="">二级菜单3</a></li>
					</ul>
				</li>
			</ul>
		</div>
		
		
	</body>
</html>

<script type="text/javascript" src="js/jQuery.js" ></script>

<script>
	$(function(){
		
		//给一级菜单设置鼠标移入事件
		$('.wrap > ul > li').mouseenter(function(){
			//this是触发事件的dom对象
//			console.log(this);
			//让二级菜单显示
			//让组件显示有两种方式：两种方式的本质是相同的
			//(1)更改 display属性为block
//			$(this).children('ul').css('display','block');
			
			//(2)调用show()方法
			$(this).children('ul').stop(true,false).show(300);
		})
		
		//给一级菜单设置鼠标离开事件
		$('.wrap > ul > li').mouseleave(function(){
			//this是触发事件的dom对象
			console.log(this);
			//让二级菜单隐藏
			//让组件隐藏有两种方式：两种方式的本质是相同的

			//(1)更改 display属性为none
//			$(this).children('ul').css('display','none');
			
			//(2)调用hide()方法
			$(this).children('ul').hide(150);
			
		})
		
	})
	
</script>
```

总结：

- 显示组件：调用show()方法
- 隐藏组件：调用hide()方法
- mouseout() 鼠标移出事件,注意：在鼠标移出该组件及其子类组件都会触发
- mouseleave() 鼠标移出事件，只会在鼠标移出选取的元素上才会触发
- mouseover() 鼠标移入事件，注意：在鼠标移入该组件及其子类组件都会触发
- mouseenter() 鼠标移入事件，只会在鼠标移入选取的元素上才会触发



#### 案例：高亮显示

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>高亮显示</title>
		<style>
			body{
				background: #000;
			}
			img{
				width: 150px ;
				height: 150px;
			}
			.wrap{
				margin: 100px auto 0;
				width: 570px;
				height: 350px;
				padding: 10px 0 0 10px;
				background: #000;
				overflow: hidden;
				border: 1px solid #fff;
			}
			.wrap li{
				float: left;
				margin: 0 10px 10px 0;
			}
			li{
				display: list-item;
				text-align: -webkit-match-parent;
			}
		</style>
	</head>
	<body>
		<div class="wrap">
			<ul>
				<li>
					<img src="img/img2.jpg" alt=""/>
				</li>
				<li>
					<img src="img/img5.jpg" alt=""/>
				</li>
				<li>
					<img src="img/img6.jpg" alt=""/>
				</li>
				<li>
					<img src="img/img7.jpg" alt=""/>
				</li>
				<li>
					<img src="img/img8.jpg" alt=""/>
				</li>
				<li>
					<img src="img/img9.jpg" alt=""/>
				</li>
			</ul>
		</div>
	</body>
</html>

<script type="text/javascript" src="js/jQuery.js" ></script>
<script>
	
	$(function(){
		//添加鼠标移入事件，给移入的li标签透明度设为1，其他的兄弟设为0.4
		//鼠标离开大盒子，所有li标签透明度设为1
//		$('.wrap li')   //可以的
		$('.wrap').find("li").mouseenter(function(){
			$(this).css('opacity',1).siblings('li').css('opacity',0.4);
		})
		
		$('.wrap').mouseleave(function(){
			$(this).find('li').css('opacity',1);
		})
		
	})
	
</script>
```



## 10、类操作

### 添加类：addClass(类名)

```js
//添加单个类
$('#div1').addClass('fontSize30');

//添加多个类
$('#div1').addClass('fontSize30 width200');
```



### 移除类： removeClass(类名)

```js
//移除单个类
$('#div1').removeClass('fontSize30');

//移除多个类
$('#div1').removeClass('fontSize30 width200');

//移除所有类
$('#div1').removeClass();
```



### 判断类：hasClass(类名)

```js
//判断元素有没有某个类
console.log($('#div1').hasClass('fontSize30'));
```



### 切换类：toggleClass(类名)

```js
//如果元素有某个类，就移除这个类；如果没有，就添加这个类
$('#div1').toggleClass('fontSize30');
```



### 完整案例：

```js
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>class操作</title>
		<style>
			div{
				width: 100px;
				height: 100px;
				margin-top: 10px;
			}
			
			.bgc{
				background-color: green;
			}
			
			.fontSize30{
				font-size: 30px;
			}
			.width200{
				width:200px;
			}
			
		</style>
	</head>
	<body>
		<input type="button" value="添加类" id="addClass" />
		<input type="button" value="移除类" id="removeClass" />
		<input type="button" value="判断类" id="hasClass" />
		<input type="button" value="切换类" id="toggleClass" />
		<div id="div1" class="bgc">div</div>
	</body>
</html>
<script type="text/javascript" src="js/jQuery.js" ></script>
<script>
	$(function(){
		//1.添加类 addClass(类名)
		$('#addClass').click(function(){
			//添加单个类
//			$('#div1').addClass('fontSize30');
			
			//添加多个类
			$('#div1').addClass('fontSize30 width200');
		});
		
		//2.移除类 removeClass(类名)
		$('#removeClass').click(function(){
			//移除单个类
//			$('#div1').removeClass('fontSize30');
			
			//移除多个类
//			$('#div1').removeClass('fontSize30 width200');

			//移除所有类
			$('#div1').removeClass();
		});
		
		//3.判断类：hasClass(类名)
		$('#hasClass').click(function(){
			//判断元素有没有某个类
			console.log($('#div1').hasClass('fontSize30'));
		})
		
		//4.切换类：toggleClass(类名)
		$('#toggleClass').click(function(){
			//如果元素有某个类，就移除这个类；如果没有，就添加这个类
			$('#div1').toggleClass('fontSize30');
		})
		
	})
	
</script>
```



### 案例：tab栏切换

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>tab栏切换</title>
		
		
		<style>
			*{
				margin: 0;
				padding: 0;
			}
			
			
			ul{
				list-style: none;
			}
			
			.wrapper{
				width: 1000px;
				height: 475px;
				margin: 0 auto;
				margin-top:100px ;
			}
			
			
			.tab{
				border: 1px solid #ddd;
				border-bottom: 0;
				height: 36px;
				width: 320px;
			}
			
			.tab li{
				position: relative;
				float: left;
				width: 80px;
				height: 34px;
				line-height: 34px;
				text-align: center;
				cursor: pointer;
				border-top: 4px solid #FFFFFF ;
			}
			
			.tab span{
				position: absolute;
				right: 0;
				top:10px;
				background: #DDDDDD;
				width: 1px;
				height: 14px;
				overflow: hidden;

			}
			
			.products .main{
				float: left;
				display: none;
			}
			
			.products .main.selected{
				display: block;
			}
			
			.tab li.active{
				border-color: red;
				border-bottom: 0;
			}
		</style>
		
	</head>
	<body>
		<div class="wrapper">
			<ul class="tab">
				<li class="tab-item active">国际大牌</li>
				<li class="tab-item">国妆名牌</li>
				<li class="tab-item">清洁用品</li>
				<li class="tab-item">男士精品</li>
			</ul>
			<div class ="products">
				<div class="main selected">
					<a href=""><img src="img/2.jpg" alt="" /></a>
				</div>
				<div class="main ">
					<a href=""><img src="img/3.jpg" alt="" /></a>
				</div>
				<div class="main ">
					<a href=""><img src="img/4.jpg" alt="" /></a>
				</div>
				<div class="main ">
					<a href=""><img src="img/5.jpg" alt="" /></a>
				</div>
			</div>
		</div>
	</body>
</html>
<script type="text/javascript" src="js/jQuery.js" ></script>

<script>
	$(function(){
		//(1)给tab栏的每一个li标签添加移入事件，当前li添加active类，其他兄弟组件移除action类	
		//(2)找到当前tab栏索引一致的div，让他添加selected类，其他的兄弟移除selected类
		$('.tab').children().mouseenter(function(){
			$(this).addClass('active').siblings('li').removeClass('active');
			var idx = $(this).index();
			console.log(idx);
			$('.products').children('div').eq(idx).addClass('selected').siblings().removeClass('selected');
		})
		
	})
</script>
```



## 11、jQuery 动画

### 11.1 三组基本动画

- 显示(show)与隐藏(hide)是一组动画；
- 滑入(slideDown)与划出(slideUp)与切换(slideToggle)，效果与卷帘门类似
- 淡入(fadeln)与淡出(fadeOut)与切换(fadeToggle)



#### 显示与隐藏：

（1）show(参数1,参数2)：显示

- 参数1：动画时长，可以是数值（单位毫秒）、代表时长的字符串（fast,normal,slow）、
- 参数2：动画执行完毕后的回调函数
- 无参：没有动画效果

（2）show(参数1,参数2)：隐藏

- 参数1：动画时长，可以是数值（单位毫秒）、代表时长的字符串（fast,normal,slow）、
- 参数2：动画执行完毕后的回调函数
- 无参：没有动画效果

##### 显示与隐藏案例：

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
		<style>
			div{
				height: 500px;
				width: 500px;
				background: red;
				display: none;
				
			}
		</style>
	</head>
	<body>
		<input type="button" value="显示" id='show' />
		<input type="button" value="隐藏" id='hide' />
		<input type="button" value="切换" id='toggle' />
		<br />
		<div id ="div1"></div>
	</body>
</html>
<script type="text/javascript" src="js/jQuery.js" ></script>
<script>
	$(function(){
		//(1)显示
		//1.1 如果使用show()无参，是没有动画效果的
		$('#show').click(function(){
			//1.1 如果使用show()无参，是没有动画效果的
//			$('#div1').show();
			
			//1.2 使用show(duration: String, easing: String, callback: Function)可以传入动画参数
			//参数1：代表动画执行的时间，单位是毫秒，也可以是时长的代表字符串：fast,normal,slow
//			$('#div1').show(2000);
//			$('#div1').show('fast');     	//200毫秒
//			$('#div1').show('normal');		//400毫秒
			$('#div1').show('slow');		//600毫秒	
//			$('#div1').show('sadasda');		//如果代表时长的单词写错了，相当于写了normal
		
			//1.3 回调函数
//			$('#div1').show('slow',function(){
//				alert('动画执行完毕。。。');
//			});
		
		});
		//(2)隐藏
		//1.1 hide()无参，是没有动画效果的
		$('#hide').click(function(){
			//1.1 如果使用hide()无参，是没有动画效果的
//			$('#div1').hide();
			
			//1.2 使用hide(duration: String, callback: Function)可以传入动画参数
			//参数1：代表动画执行的时间，单位是毫秒，也可以是时长的代表字符串：fast,normal,slow
			//参数2：回调函数
//			$('#div1').hide(2000);
//			$('#div1').hide('fast');     	//200毫秒
//			$('#div1').hide('normal');		//400毫秒
			$('#div1').hide('slow');		//600毫秒	
//			$('#div1').hide('sadasda');		//如果代表时长的单词写错了，相当于写了normal
		
			//1.3 回调函数		
//			$('#div1').hide('slow',function(){
//				alert('动画执行完毕。。。');
//			});
		
		});
		
		//3.切换
		//将元素在隐藏和显示之间切换
		//1.1 toggle()无参，是没有动画效果的
		$('#toggle').click(function(){
			//1.1 toggle()无参，是没有动画效果的
//			$('#div1').toggle();
			
			//1.2 使用toggle(duration: String, easing: String, callback: Function)可以传入动画参数
			//参数1：代表动画执行的时间，单位是毫秒，也可以是时长的代表字符串：fast,normal,slow
//			$('#div1').toggle(2000);
//			$('#div1').toggle('fast');     	//200毫秒
//			$('#div1').toggle('normal');		//400毫秒
			$('#div1').toggle('slow');		//600毫秒	
//			$('#div1').toggle('sadasda');		//如果代表时长的单词写错了，相当于写了normal
		
			//1.3  回调函数
//			$('#div1').toggle('slow',function(){
//				alert('动画执行完毕。。。');
//			});
		
		});
		
	})	
</script>
```



#### 滑入和划出：

（1）slideDown(参数1，参数2)：滑入

- 参数1：动画时长，可以是数值（单位毫秒）、代表时长的字符串（fast,normal,slow）、
- 参数2：动画执行完毕后的回调函数
- 无参：默认动画时长为400ms

（2）slideUp(参数1，参数2)：划出

- 参数1：动画时长，可以是数值（单位毫秒）、代表时长的字符串（fast,normal,slow）、
- 参数2：动画执行完毕后的回调函数
- 无参：默认动画时长为400ms

##### 滑入划出案例：

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>滑入划出</title>
		<style>
			div{
				height: 500px;
				width: 500px;
				background: red;
				display: none;
				
			}
		</style>
	</head>
	<body>
		<input type="button" value="滑入" id='slideDown' />
		<input type="button" value="划出" id='slideUp' />
		<input type="button" value="切换" id='slideToggle' />
		<br />
		<div id ="div1"></div>
	</body>
</html>
<script type="text/javascript" src="js/jQuery.js" ></script>
<script>
	$(function(){
		/*
		 * 滑入    slideDown(参数1，参数2)
		 * 参数1：动画执行时长,可以是数字，可以是字符串
		 * 参数2：动画执行完毕后的回调函数
		 */
		$('#slideDown').click(function(){
			//让id为div1的元素滑入
//			$('#div1').slideDown();    //无参，默认时长为400毫秒
			$('#div1').slideDown(2000);
			$('#div1').slideDown(2000,function(){
				alert("滑入完成");
			});
		});
		
		/*
		 * 划出   slideUp(参数1，参数2)
		 * 参数1：动画执行时长,可以是数字，可以是字符串
		 * 参数2：动画执行完毕后的回调函数
		 */
		$('#slideUp').click(function(){
			//让id为div1的元素划出
//			$('#div1').slideUp();    //无参，默认时长为400毫秒
//			$('#div1').slideDown(2000);
			$('#div1').slideUp(2000,function(){
				alert("划出完成");
			});
		});
		
		
		/*
		 * 切换  
		 * 参数1：动画执行时长,可以是数字，可以是字符串
		 * 参数2：动画执行完毕后的回调函数
		 */
		$('#slideToggle').click(function(){
			//让id为div1的元素切换
//			$('#div1').slideToggle();    //无参，默认时长为400毫秒
//			$('#div1').slideToggle(2000);
			$('#div1').slideToggle('fast');
//			$('#div1').slideToggle(2000,function(){
//				alert("切换完成");
//			});
		});
	})	
</script>
```



#### 淡入与淡出：

（1） fadeIn(参数1，参数2)：淡入

- 参数1：动画时长，可以是数值（单位毫秒）、代表时长的字符串（fast,normal,slow）、
- 参数2：动画执行完毕后的回调函数
- 无参：默认动画时长为400ms

（2）fadeOut(参数1，参数2)：淡出

- 参数1：动画时长，可以是数值（单位毫秒）、代表时长的字符串（fast,normal,slow）、
- 参数2：动画执行完毕后的回调函数
- 无参：默认动画时长为400ms

（3）fadeToggle(参数1，参数2)：切换

- 参数1：动画时长，可以是数值（单位毫秒）、代表时长的字符串（fast,normal,slow）、
- 参数2：动画执行完毕后的回调函数
- 无参：默认动画时长为400ms

（4）fadeTo(参数1，参数2，参数3)：淡入到什么程度

- 参数1：动画时长，可以是数值（单位毫秒）、代表时长的字符串（fast,normal,slow）、
- 参数2：透明度
- 参数3：动画执行完毕后的回调函数

##### 淡入与淡出案例：

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>淡入淡出</title>
		<style>
			div{
				height: 500px;
				width: 500px;
				background: red;
				display: none;				
			}
		</style>
	</head>
	<body>
		<input type="button" value="淡入" id='fadeIn' />
		<input type="button" value="淡出" id='fadeOut' />
		<input type="button" value="切换" id='fadeToggle' />
		<input type="button" value="淡入到哪里" id='fadeTo' />
		<br />
		<div id ="div1"></div>
	</body>
</html>

<script type="text/javascript" src="js/jQuery.js" ></script>
<script>
	$(function(){
		/*1.淡入  fadeIn(参数1，参数2)
		 * 参数1：动画时长
		 * 参数2：回调函数
		 */
		$('#fadeIn').click(function(){
			//让id为div1的元素淡入
//			$('#div1').fadeIn();    //默认的动画时长，400ms
//			$('#div1').fadeIn(2000);
			$('#div1').fadeIn(1000,function(){
				alert('淡入完成');
			});			
		});
		
		/*2.淡出  fadeOut(参数1，参数2)
		 * 参数1：动画时长
		 * 参数2：回调函数
		 */
		$('#fadeOut').click(function(){
			//让id为div1的元素淡入
//			$('#div1').fadeOut();    //默认的动画时长，400ms
//			$('#div1').fadeOut(2000);
			$('#div1').fadeOut(1000,function(){
				alert('淡出完成');
			});			
		});
		
		/*3.切换  fadeToggle(参数1，参数2)
		 * 参数1：动画时长
		 * 参数2：回调函数
		 */
		$('#fadeToggle').click(function(){
			//让id为div1的元素淡入
			$('#div1').fadeToggle(1000);    //默认的动画时长，400ms
//			$('#div1').fadeToggle(2000);
//			$('#div1').fadeToggle(1000,function(){
//				alert('切换完成');
//			});			
		});
		
		/*3.淡入到哪里  fadeTo(参数1，参数2,参数3)
		 * 参数1：动画时长
		 * 参数2：透明度
		 * 参数2：回调函数
		 */
		$('#fadeTo').click(function(){
			//让id为div1的元素淡入
//			$('#div1').fadeTo(1000,0.5);    //默认的动画时长，400ms
			
			$('#div1').fadeTo(1000,0.5,function(){
				alert('淡入完成');
			});			
		});
	})
</script>
```



### 11.2 自定义动画

自定义动画： animate(参数1，参数2，参数3，参数4)

- 参数1：必选的  对象  代表的是需要做动画的属性
- 参数2：可选的  代表执行动画的时长
- 参数3：可选的  代表的是缓动还是匀速   linear(匀速),swing(缓动，默认)
- 参数4：动画执行完毕后的回调函数

#### 自定义动画案例：

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>自定义动画</title>
		<style>
			div{
				height: 100px;
				width: 100px;
				background: red;
				position: absolute;
				left: 0px;
			}
			#div1{
				top: 50px;
			}
			#div2{
				top:300px
			}
		</style>
	</head>
	<body>
		<input type="button" value="从左到右800" id="lr800" />
		<div id="div1"></div>
		<div id="div2"></div>
	</body>
</html>

<script type="text/javascript" src="js/jQuery.js" ></script>
<script>
	$(function(){
		/*
		* 自定义动画    animate(参数1，参数2，参数3，参数4)
		* 参数1：必选的  对象  代表的是需要做动画的属性
		* 参数2：可选的  代表执行动画的时长
		* 参数3：可选的  代表的是缓动还是匀速   linear(匀速),swing(缓动，默认)
		* 参数4：动画执行完毕后的回调函数
		*/
		$('#lr800').click(function(){
			//让id为lr800的元素移动到800位置
//			$('#div1').animate({
//				left:800,
//				width:200,
//				height:200,
//				opacity:0.5
//			},2000,'linear',function(){
//				alert('动画执行完毕');
//			});
//			
//			$('#div2').animate({
//				left:800,
//				width:200,
//				height:200,
//				opacity:0.5
//			},2000,'swing');
			
			$('#div1').animate({
				left:800,
				width:200,
				height:200,
				opacity:0.5
			},2000,'linear',function(){
				//回调函数里面可以接着做动画
				$('#div1').animate({
				left:400,
				width:300,
				height:300,
				top:150,
				opacity:0.5
				},2000)
			});			
		})
	})
</script>
```



#### 案例：模拟开机动画

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>模拟开机动画</title>
		<style>
		
			.box{
				position: fixed;
				bottom: 0;
				right: 0;
				clear: none;
			}
			#closeButton{
				bottom: 200;
				right: 0;

			}
		</style>
	</head>
	<body>
		<div class="box" id="box">
			<img id="closeButton" src="img/关  闭.png" ></img>
			
			<div class="hd" id="headPart">
				<img src="img/6.jpg" />
			</div>
			<div class="bd" id="bottomPart">
				<img src="img/7.jpg" />
			</div>
		</div>
	</body>
</html>

<script type="text/javascript" src="js/jQuery.js" ></script>
<script>
	$(function(){
		$('#closeButton').click(function(){
			//让下面的部分高度变为0
			$('#bottomPart').animate({
				height:0
			},1000,function(){
				//让整个大盒子的向右移动为0
				$('#box').animate({
					width:0
				},1000);
			});
		});
		
	})
</script>
```



### 11.3 动画队列——stop方法

**停止动画：stop(参数1，参数2)**

- 参数1：是否清除动画队列
- 参数2：是否跳转到最终结果



取消动画队列案例：

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
		<style>
			#div1{
				width: 300px;
				height: 300px;
				background: red;
				display: none;
			}
		</style>
	</head>
	<body>
		<input type="button" value="开始动画" id="start" />
		<input type="button" value="停止动画" id="stop" />
		<div id="div1"></div>
	</body>
</html>

<script type="text/javascript" src="js/jQuery.js" ></script>
<script>
	$(function(){
		//1.开始动画，模拟动画队列
		$('#start').click(function(){
			$('#div1').slideDown(2000).slideUp(2000);
		})
		
		//2.停止动画，执行stop()
		/*
		 * 停止动画：stop(参数1，参数2)
		 * 参数1：是否清除动画队列
		 * 参数2：是否跳转到最终结果
		 */
		$('#stop').click(function(){
//			$('#div1').stop(true,true);
//			$('#div1').stop(true,false);
//			$('#div1').stop(false,true);
			$('#div1').stop(false,false);   //无参默认(false,false)
			
			
		})
	})
</script>
```



## 12、动态创建元素

（1）原生js创建节点：

- document.write()
- innerHTML()
- document.createElement()

（2）jQuert创建节点：

- html()
- $()

**html()：**

- 获取内容：html()无参是获取内容
- 设置内容：html()有参数，设置的内容会把原先的内容覆盖

 **$()：**

- 能够创建元素，创建元素在内存中
- 如果需要显示，则需要使用append()追加元素



案例：

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
		<style>
			#div1{
				width: 300px;
				height: 300px;
				border: 1px solid red;
			}
		</style>
	</head>
	<body>
		<input type="button" value="html()" id="btnHtml" />
		<input type="button" value="$()" id="btn1" />
		
		<div id="div1">
			<p>p1
				<span>span1</span>
			</p>
		</div>
	</body>
</html>

<script type="text/javascript" src="js/jQuery.js" ></script>
<script>
	$(function(){
		/*
		 * 原生js创建节点：
		 * (1) document.write()
		 * (2)innerHTML()
		 * (3)document.createElement()
		 */
		
		/*
		 * jQuert创建节点：
		 * (1)html()
		 * (2)$()
		 */
		
		//1. html()
		$('#btnHtml').click(function(){
			//1.1 获取内容：html()无参是获取内容
//			console.log($('#div1').html());
			
			//1.2设置内容：html()有参数
			//设置的内容会把原先的内容覆盖
			$('#div1').html('我是设置的内容<a href="https://www.baidu.com">百度一下</a>');
		});
		
		//2. $()
		//能够创建元素，创建元素在内存中
		$('#btn1').click(function(){
			var $link = $('<a href="https://leetcode-cn.com/problemset/all/">我的Leetcode</a>');
//			console.log($link);
			//追加元素
			$('#div1').append($link);
		});
		
	})
</script>
```

案例：表格生成案例

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>动态生成表格</title>
		<style>
			*{
				padding: 0;
				margin: 0;
			}
			table{
				border-collapse:collapse ;
				border-spacing: 0;
			}
			
			thead{
				display: table-header-group;
				vertical-align: middle;
				border-color:inherit ;
			}
			
			tbody{
				display: table-row-group;
				vertical-align: middle;
				border-color: inherit;
			}
			th{
				padding: 10px 10px;
				background-color: skyblue;
				border: 1px solid white;
			}
			td{
				padding: 10px 10px;
				background-color: #eeeeee;
				border: 1px solid #999999;
			}
			
		</style>
	</head>
	<body>
		<input type="button" value="获取数据" id="but_get" />
		<table>
			<thead>
				<tr>
					<th>标题</th>
					<th>地址</th>
					<th>说明</th>
				</tr>
			</thead>
			<tbody id="tbDate">
				
			</tbody>
		</table>
	</body>
</html>

<script type="text/javascript" src="js/jQuery.js" ></script>
<script>
	$(function(){
		var data = [{
			name:"知乎",
			url:"https://www.zhihu.com/",
			type:"找到你想知道的"
		},{
			name:"CSDN",
			url:"https://www.csdn.net/",
			type:"个人博客"
		},{
			name:"Leetcode",
			url:"https://leetcode-cn.com/problemset/all/",
			type:"刷题网站"
		}];
		
		//点击获取数据按钮，将data数据添加至表格
		$('#but_get').click(function(){
			//1.html()
			//设置内容，内容中有标签会解析，会覆盖掉原来的内容
//			var list= [];
//			for(var i = 0;i<data.length;i++){
//				//生成tr
//				list.push("<tr>");
//				//生成td
//				for(var key in data[i]){
//					list.push("<td>");
//					list.push(data[i][key]);
//					list.push("</td>");
//				}
//				
//				list.push("</tr>");
//			}
//			//连接列表中的字符串
//			console.log(list.join(""));
//			$('#tbDate').html(list.join(""));


			//2.$()
			for(var i = 0;i<data.length;i++){
				var $tr = $("<tr><td>"+data[i]['name'] +"</td><td>"+data[i]['url'] +"</td><td>"+data[i]['type'] +"</td></tr>")
				console.log($tr);
				//把创建出来的$tr追加tbody中 
				$('#tbDate').append($tr);
			}

			
		});
		
	})
</script>
```



## 13、添加元素的几种方式

添加元素的几种方式：

（1）append()

- 父元素.append(子元素)，把子元素添加到父元素的末尾
- 新创建标签，添加到父元素中，会添加到父元素的末尾
- 将已有的标签元素，添加到父元素中，会剪贴到父元素末尾

（2）prepend() 

- 父元素.prepend(子元素)，把子元素添加到父元素的头部
- 新创建标签，添加到父元素中，会添加到父元素的头部
- 将已有的标签元素，添加到父元素中，会剪贴到父元素头部

（3）before()

- 元素A.prepend(元素B)，把元素B添加到元素A的兄弟元素，添加到A的头部

（4）after()

- 元素A.after(元素B) 把元素B作为元素A的兄弟元素添加元素A的后面

（5）appendTo()

- 子元素.appendTo(父元素)  把子元素添加到父元素末尾

**代码案例：**

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
	</head>
	<body>
		<input type="button" value="append" id="btnAppend" />
		<input type="button" value="prepend" id="btnPrepend" />
		<input type="button" value="before" id="btnBefore" />
		<input type="button" value="after" id="btnAfter" />
		<input type="button" value="appendTo" id="btnAppendTo" />
		
		<ul id="ul1">
			<li>我是第1个li标签</li>
			<li>我是第2个li标签</li>
			<li id="li3">我是第3个li标签</li>
			<li>我是第4个li标签</li>
			<li>我是第5个li标签</li>
		</ul>
		<ul id="ul2">
			<li>我是第1个li标签2</li>
			<li>我是第2个li标签2</li>
			<li id="li32">我是第3个li标签2</li>
			<li>我是第4个li标签2</li>
			<li>我是第5个li标签2</li>
		</ul>
	</body>
</html>

<script type="text/javascript" src="js/jQuery.js" ></script>
<script>
	$(function(){
		//添加标签的几种方式
		//1.append()
		//父元素.append(子元素)，把子元素添加到父元素的末尾
		$('#btnAppend').click(function(){
			//1.1 新创建一个li标签，添加ul中去，会添加到父元素的末尾
//			var $liNew = $("<li>我是新创建的li标签</li>");
//			$('#ul1').append($liNew);

			//1.2 把ul1中已经有的元素，再次添加到url中，剪切后作为最后一个元素添加
//			var $li3 = $('#li3');
//			$('#ul1').append($li3);
			
			//1.3 把ul2中已经存在的标签，添加到ul1中，剪切后作为最后一个元素添加
			var $li32 = $('#li32');
			$('#ul1').append($li32);
		});
		
		//2.prepend() 
		//父元素.prepend(子元素)，把子元素添加到父元素的头部
		$('#btnPrepend').click(function(){
			//2.1 新建一个li标签，添加到ul1中，把新元素作为第一个子元素添加
//			var $liNew = $("<li>我是新创建的li标签</li>");
//			$('#ul1').prepend($liNew);
			
			//2.2 把ul1中已经有的元素，再次添加到url中，剪切后作为第一个元素添加
//			var $li3 = $('#li3');
//			$('#ul1').prepend($li3);
			
			//1.3 把ul2中已经存在的标签，添加到ul1中，剪切后作为第一个元素添加
			var $li32 = $('#li32');
			$('#ul1').prepend($li32);
			
		});
		
		//3.before()
		//元素A.before(元素B) 把元素B作为元素A的兄弟元素添加元素A的前面
		$('#btnBefore').click(function(){
			//新建一个div
			var $divNew = $('<div>我是新建的div</div>');
			$('#ul1').before($divNew);
		});
		
		//4.after()
		//元素A.after(元素B) 把元素B作为元素A的兄弟元素添加元素A的后面
		$('#btnAfter').click(function(){
			//新建一个div
			var $divNew = $('<div>我是新建的div</div>');
			$('#ul1').after($divNew);
		});
		
		//5.appendTo()
		//子元素.appendTo(父元素)  把子元素添加到父元素末尾
		$('#btnAppendTo').click(function(){
			var $liNew = $("<li>我是新创建的li标签</li>");
			$liNew.appendTo($('#ul1'));
		});
	})
</script>
```



**案例——城市选择**

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>城市选择</title>
		<style type="text/css">
			select{
				width: 200px;
				background: teal;
				height: 200px;
				font-size: 20px;
			}
			option{
				font-weight: normal;
				display: block;
				white-space: pre;
				padding: 0px 2px 1px;
			}
			.btn-box{
				width: 30px;
				display: inline-block;
				vertical-align: top;
			}
		</style>
		
	</head>
	<body>
		<h1>城市选择</h1>
		<select id="src-city" name="src-city" multiple="multiple">
			<option value="1">北京</option>
			<option value="2">上海</option>
			<option value="3">广州</option>
			<option value="4">杭州</option>
		</select>
		<div class="btn-box">
			<input type="button" value=">>" id="btn-sel-all" />
			<input type="button" value="<<" id="btn-sel-none" />
			<input type="button" value=">" id="btn-sel" />
			<input type="button" value="<" id="btn-back" />
		</div>
		<select id="tar-city" name="tar-city" multiple="multiple"></select>
	</body>
</html>

<script type="text/javascript" src="js/jQuery.js" ></script>
<script>
	$(function(){
		//1.全部到右边
		$('#btn-sel-all').click(function(){
			//找到左边所以的option，剪切到右边的select下
			$('#src-city>option').appendTo($('#tar-city'));
		});
		
		//1.全部到右边
		$('#btn-sel-all').click(function(){
			//找到左边所有的option，剪切到右边的select下
			$('#src-city>option').appendTo($('#tar-city'));
		});
		
		//2.全部到左边
		$('#btn-sel-none').click(function(){
			//找到右边所有的option，剪切到左边的select下
			$('#tar-city>option').appendTo($('#src-city'));
		});
		
		//3.选中的到右边
		$('#btn-sel').click(function(){
			//找到左边选中的option，剪切到右边的select中
//			console.log($('#src-city>option:selected'));
			$('#src-city>option:selected').appendTo($('#tar-city'));
		});
		
		//3.选中的到左边
		$('#btn-back').click(function(){
			//找到右边选中的option，剪切到左边的select中
//			console.log($('#tar-city>option:selected'));
			$('#tar-city>option:selected').appendTo($('#src-city'));
		});
	})
</script>
```



**案例——表格删除**

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>表格删除</title>
		<style>
			*{
				padding: 0;
				margin: 0;
			}
			table{
				border-collapse:collapse ;
				border-spacing: 0;
			}
			
			thead{
				display: table-header-group;
				vertical-align: middle;
				border-color:inherit ;
			}
			
			tbody{
				display: table-row-group;
				vertical-align: middle;
				border-color: inherit;
			}
			th{
				padding: 10px 10px;
				background-color: skyblue;
				border: 1px solid white;
			}
			td{
				padding: 10px 10px;
				background-color: #eeeeee;
				border: 1px solid #999999;
			}
		</style>
	</head>
	<body>
		<div class="wrap">
			<input type="button" value="清空内容" id="btn" />
			<table>
				<thead>
					<tr>
						<th>专栏名称</th>
						<th>内容描述</th>
						<th>操作</th>
					</tr>
				</thead>
				<tbody id="tb">
					<tr>
						<td>JavaSE 学习笔记</td>
						<td>参考Oracle官方文档，系统学习JavaSE</td>
						<td><button class="del">删除</button></td>
					</tr>
					<tr>
						<td>Oracle数据库笔记</td>
						<td>参考Oracle官方文档，系统学习Oracle数据库</td>
						<td><button class="del">删除</button></td>
					</tr>
					<tr>
						<td>LeetCode热门算法100道</td>
						<td>刷题的必选之路</td>
						<td><button class="del">删除</button></td>
					</tr>
					<tr>
						<td>Linux学习笔记</td>
						<td>从零学习Linux系统</td>
						<td><button class="del">删除</button></td>
					</tr>
				</tbody>
			</table>
		</div>
	</body>
</html>

<script type="text/javascript" src="js/jQuery.js" ></script>
<script>
	$(function(){
		//1.清空内容
		$('#btn').click(function(){
			$('#tb').empty();
		})
		
		//2.删除一行
		$('#tb .del').click(function(){
			console.log("123");
			console.log($(this));
			$(this).parent().parent().remove();
		})
	})
</script>
```



## 14、克隆节点

### **click(参数1): 克隆节点**

- 无参：默认为false
- 参数：无论是true还是false都会克隆后代节点
- 参数为true：会把事件克隆    false:不会克隆事件

克隆的组件只存在于内存中，如果要显示，就要追加到页面上。

案例：

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
		<style>
			#div1{
				width: 400px;
				height: 200px;
				border: 1px solid red;
			}
			#div2{
				width: 400px;
				height: 200px;
				border: 1px solid blue;
			}
		</style>
	</head>
	<body>
		<input type="button" value="克隆" id="clone" />
		<div id="div1">
			<span>span1</span>
			<p>p1
				<b>b1</b>
			</p>
		</div>
		<br />
	</body>
</html>

<script type="text/javascript" src="js/jQuery.js" ></script>
<script>
	$(function(){
		$('#div1').click(function(){
			alert('我被点击到了');
		})
		//clone(参数)：克隆
		//无参：默认为false
		//参数：无论是true还是false都会克隆后代节点
		//参数为true：会把事件克隆    false:不会克隆事件
		
		//只存在于内存中，如果要显示，就要追加到页面上
		$('#clone').click(function(){
		 	var $cloneDiv = $('#div1').clone(false);
		 	console.log($cloneDiv);
		 	
		 	//修改克隆节点的id
		 	$cloneDiv.attr('id','div2');
		 	//把克隆的节点追加到body
		 	$('body').append($cloneDiv);
		})
	})
</script>
```



## 15、获取和设置表单内容

### val()：获取和设置表单内容

- 原生js是通过value属性来获取或者设置表单元素值
- jQuery是通过 var()
- val()，无参就是获取
- val(设置的值)，有参就是设置



案例：

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
	</head>
	<body>
		<input type="button" value="获取" id="btn-get" />
		<input type="button" value="设置" id="btn-set" />
		<input type="text" placeholder="请输入账号" value="" id="txt"/>
	</body>
</html>

<script type="text/javascript" src="js/jQuery.js" ></script>
<script>
	$(function(){
		//原生js是通过value属性来获取或者设置表单元素值
		//jQuery是通过 var()
		
		//1.val()，无参就是获取
		$('#btn-get').click(function(){
			console.log($('#txt').val());
		});
		
		//2.val(设置的值)，有参就是设置
		$('#btn-set').click(function(){
			$('#txt').val("我是设置的值");			
		});		
	})
</script>
```



### 案例：动态数据的添加和删除

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>表格删除</title>
		<style>
			*{
				padding: 0;
				margin: 0;
			}
			table{
				border-collapse:collapse ;
				border-spacing: 0;
				
			}
			
			thead{
				display: table-header-group;
				vertical-align: middle;
				border-color:inherit ;
			}
			
			tbody{
				display: table-row-group;
				vertical-align: middle;
				border-color: inherit;
			}
			th{
				padding: 10px 10px;
				background-color: skyblue;
				border: 1px solid white;
			}
			td{
				padding: 10px 10px;
				background-color: #eeeeee;
				border: 1px solid #999999;
			}
			.mask{
				position: absolute;
				left: 0px;
				top:0px;
				background-color: #EEEEEE;
				opacity:0.5;
				width: 100000px;
				height: 10000px;
				display: none;
			}
			
			.form-add{
				width: 400px;
	            height: 300px;
	            background: skyblue;
	            position:absolute;
	            left:0;
	            top: 0;
	            bottom: 0;
	            right: 0;
	          	display: none;
			}
			
			#j_hideFormAdd{
				position:absolute;
				top: 0px;
				right: 0px;
				font-size: 50px;
			}
			
		
			
			
		</style>
	</head>
	<body>
		<div class="wrap">
			<input type="button" value="添加数据" id="btn" />
			<table>
				<thead>
					<tr>
						<th>专栏名称</th>
						<th>内容描述</th>
						<th>操作</th>
					</tr>
				</thead>
				<tbody id="tb">
					<tr>
						<td>JavaSE 学习笔记</td>
						<td>参考Oracle官方文档，系统学习JavaSE</td>
						<td><button class="del">删除</button></td>
					</tr>
					<tr>
						<td>Oracle数据库笔记</td>
						<td>参考Oracle官方文档，系统学习Oracle数据库</td>
						<td><button class="del">删除</button></td>
					</tr>
					<tr>
						<td>LeetCode热门算法100道</td>
						<td>刷题的必选之路</td>
						<td><button class="del">删除</button></td>
					</tr>
					<tr>
						<td>Linux学习笔记</td>
						<td>从零学习Linux系统</td>
						<td><button class="del">删除</button></td>
					</tr>
				</tbody>
			</table>
		</div>
		
		<div id="j_mask" class="mask"></div>
		
		<div id="j_formAdd" class="form-add">
			<div class="form-add-title">
				<span>添加数据</span>
				<div id = "j_hideFormAdd">×</div>
			</div>
			<div class="form-item">
				<label class="lb" for="j_txtLesson">专栏名称:</label>
				<input class="txt" type="text" id="column" placeholder="请输入专栏名称" />
			</div>
			<div class="form-item">
				<label class="lb" for="j_txtBelSch">内容简述:</label>
				<input class="txt" type="text" id="content" placeholder="请输入内容描述" />
			</div>
			<div class="form-submit">
				<input type="button" id="j_btnAdd" value="添加" />
			</div>
		</div>
		
		
	</body>
</html>

<script type="text/javascript" src="js/jQuery.js" ></script>
<script>
	$(function(){		
		//1.删除一行
		$('#tb .del').click(function(){

			console.log($(this));
			$(this).parent().parent().remove();
		});
		
		//2.设置添加数据按钮事件
		$('#btn').click(function(){
			$('#j_formAdd').show();
			$('#j_mask').show();
		});
		
		//3.设置关闭按钮事件
		$('#j_hideFormAdd').click(function(){
			$('#j_formAdd').hide();
			$('#j_mask').hide();
		});
		
		//4.设置添加按钮事件
		$('#j_btnAdd').click(function(){
			//获取专栏名称和内容描述
			var $column = $('#column').val();
			var $content = $('#content').val();
			
			//把用户的输入专栏名称和内容描述，创建一个tr
			var $trNew = $('<tr>'+
			'<td>'+$column+'</td>'+
			'<td>'+$content+'</td>'+
			'<td><button class="del">删除</button></td></tr>');
			
			//把新创建的tr标签添加到tbody中
			$('#tb').append($trNew);
			
			//把添加数据面板和遮罩隐藏
			$('#j_hideFormAdd').click();
			
			 $trNew.find('.del').click(function(){
				 $trNew.remove();
			});
			
		});
	})
</script>
```



## 16、jQuery 对属性的操作

### attr()：

- attr(属性名)：获取属性
- attr(属性名，属性值)：修改或添加属性
- removeAttr(属性名)：移除属性

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>属性的操作</title>
	</head>
	<body>
		<input type="button" value="获取属性" id="btn1" />
		<input type="button" value="设置属性" id="btn2" />
		<input type="button" value="移除属性" id="btn3" />
		<br />
		<img src="img/img5.jpg" alt="穷极一生得不到的人" title="小可爱" aaa='aaa' />
	</body>
</html>
<script type="text/javascript" src="js/jQuery.js" ></script>
<script>
	$(function(){
		//jQuery中属性操作：attr()  removeAttr()
		
		//1.设置属性
		$('#btn2').click(function(){
			//设置单属性
//			$('img').attr('src','img/img2.jpg');  	//以前有的src属性，可以更改
//			$('img').attr('aaa','呵呵');				//修改自定义属性
//			$('img').attr('bbb','bbb');				//如果没有的属性，会添加属性
		
			//设置多属性
			$('img').attr({
				src:'img/img2.jpg',
				aaa:'hehe',
				bbb:'bbb'
			});
		});
		
		//2.获取属性
		$('#btn1').click(function(){
			 console.log($('img').attr('src'));		//系统自带的属性可以获取
			 console.log($('img').attr('aaa'));		//自定义的属性也可以获取
			 console.log($('img').attr('bbb'));		//如果没有这个属性，会返回undefined
		});
		
		//3.移除属性
		$('#btn3').click(function(){
			//移除单属性
//			$('img').removeAttr('src');				//系统自带的属性可以移除
//			$('img').removeAttr('aaa');				//自定义的属性也可以移除
//			$('img').removeAttr('bbb');				//如果没有这个属性，也不会报错
		
			//移除多属性
			$('img').removeAttr('src aaa alt');
		});	
	})
</script>
```

#### 案例：美女相册

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>美女相册</title>
		<style>
			body{
				margin-left: 100px;
			}
			ul{
				list-style-type: none;
				padding: 0px;
			}
			li{
				display:inline-block;
			}
			
			.imgSmall{
				width: 100px;
				height: 100px;
				margin-right: 10px;
			}
		</style>
	</head>
	<body>
		<h2>美女相册</h2>
		<ul id="imagellery">
			<li>
				<a href="img/img2.jpg" title="美女1">
					<img class="imgSmall" src="img/img2.jpg" />
				</a>
			</li>
			<li>
				<a href="img/img5.jpg" title="美女2">
					<img class="imgSmall" src="img/img5.jpg" />
				</a>
			</li>
			<li>
				<a href="img/img6.jpg" title="美女3">
					<img class="imgSmall" src="img/img6.jpg" />
				</a>
			</li>
			<li>
				<a href="img/img7.jpg" title="美女4">
					<img class="imgSmall" src="img/img7.jpg" />
				</a>
			</li>
		</ul>
		<div style="clear:both"></div>
		<img id="image" src="img/img2.jpg" alt="" width="450px" />
		<p id="des">选择一张图片</p>
		
	</body>
</html>

<script type="text/javascript" src="js/jQuery.js" ></script>
<script>
	$(function(){
		//1.给小图片的a标签添加事件
		//让大图的src与点击的小图的href一致
		//让id为des的p标签的值为小图title
		$('#imagellery>li>a').click(function(){
			var scrValue = $(this).attr('href');
			var titleValue = $(this).attr('title');
			console.log(scrValue);
			console.log(titleValue);
			$('#image').attr('src',scrValue);
			$('#des').text(titleValue);
			return false;
		})
	})
</script>
```



### prop()：

有一类属性：比如checked，写在元素身上表示选中，没有表示没有被选中。

这一类属性jQuery 不能再用attr,要用prop方法，用attr()的话，无论选中或是没选中都是undefined

案例：

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
	</head>
	<body>
		<input type="button" value="按钮" id="btn1" />
		<input type="checkbox" id="ckb1" />
	</body>
</html>

<script type="text/javascript" src="js/jQuery.js" ></script>
<script>
	$(function(){
		//有一类属性：比如checked，写在元素身上表示选中，没有表示没有被选中
		//js如何操作？设置属性为true或false
//		document.getElementById("btn1").onclick=function(){
//			//设置
////			document.getElementById("ckb1").checked = true;
//			//获取
//			console.log(document.getElementById("ckb1").checked);
//
//		}
		
		//jQuery 不能再用attr,要用prop方法
		$('#btn1').click(function(){
			//无论选中或是没选中都是undefined
//			console.log($('#ckb1').attr('checked'));

			//如果多选框是选中状态返回true，未选中返回false
			console.log($('#ckb1').prop('checked'));
		})
	})
</script>
```



#### 案例：表格的全选反选

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>表格删除</title>
		<style>
			*{
				padding: 0;
				margin: 0;
			}
			table{
				border-collapse:collapse ;
				border-spacing: 0;
			}
			
			thead{
				display: table-header-group;
				vertical-align: middle;
				border-color:inherit ;
			}
			
			tbody{
				display: table-row-group;
				vertical-align: middle;
				border-color: inherit;
			}
			th{
				padding: 10px 10px;
				background-color: skyblue;
				border: 1px solid white;
			}
			td{
				padding: 10px 10px;
				background-color: #eeeeee;
				border: 1px solid #999999;
			}
		</style>
	</head>
	<body>
		<div class="wrap">
			
			<table>
				<thead>
					<tr>
						<th><input type="checkbox" id="ckb_all"/></th>
						<th>专栏</th>
						<th>内容描述</th>
						
					</tr>
				</thead>
				<tbody id="tb">
					<tr>
						<td><input type="checkbox" id="ckb1" class="ckb" /></td>
						<td>JavaSE 学习笔记</td>
						<td>参考Oracle官方文档，系统学习JavaSE</td>
						
					</tr>
					<tr>
						<td><input type="checkbox" id="ckb2" class="ckb"/></td>
						<td>Oracle数据库笔记</td>
						<td>参考Oracle官方文档，系统学习Oracle数据库</td>
					
					</tr>
					<tr>
						<td><input type="checkbox" id="ckb3" class="ckb"/></td>
						<td>LeetCode热门算法100道</td>
						<td>刷题的必选之路</td>
					
					</tr>
					<tr>
						<td><input type="checkbox" id="ckb4" class="ckb"/></td>
						<td>Linux学习笔记</td>
						<td>从零学习Linux系统</td>
					
					</tr>
				</tbody>
			</table>
		</div>
	</body>
</html>

<script type="text/javascript" src="js/jQuery.js" ></script>
<script>
	$(function(){
		//(1)设置全选按钮功能
		$('#ckb_all').click(function(){
			var ckb_all_value = $(this).prop('checked');
//			console.log(ckb_all_value);
			$('#tb .ckb').prop('checked',ckb_all_value);
		});
		
		//(2)如果多选框都选中了，则全选框也选中，如果有一个没选中，全选框就未选中
		$('#tb .ckb').click(function(){
			//判断下面的多选框是否都被选中了
			var flag = true;


			//(1)让每个多选框的checked值求与运算
//			for(var i = 0;i<$('#tb .ckb').length;i++){
////				console.log($($('#tb .ckb')[i]).prop('checked'));
//				flag = flag && $($('#tb .ckb')[i]).prop('checked');	
//			}
			
			//(2)统计选中的次数和总框数比较
			var numofAll = $('#tb .ckb').length;
			var numofChecked =  $('#tb .ckb:checked').length;
			$('#ckb_all').prop('checked',numofAll==numofChecked);
		});
	})
</script>
```



## 17、宽高

获取宽高的几种方式：

- css('height') / css('width')
  - 获取组件的宽高,带有px，是字符串
- width()，height() 
  - 获取或设置宽高，不包括padding/border/margin
- innerWidth()/innerHeight()  
  - 方法返回元素 的宽度/高度（包括内边距padding）
- outerWidth()/outerHeight 
  - 方法返回元素 的宽度/高度（包括内边距padding和边框border）
- outerWidth(true)/outerHeight(true)
  - 方法返回元素 的宽度/高度（包括内边距padding和边框border和外边框margin）
- $(window).width()  /  $(window).height()
  - 获取页面可视区域的宽高

**案例代码：**

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
		<style>
			.one{
				width:200px;
				border: 10px solid red;
				padding: 20px;
				margin: 30px;
			}
		</style>
	</head>
	<body>
		<input type="button" value="按钮" id="btn" />
		<div id="one" class="one" style="height: 200px;"></div>
	</body>
</html>

<script type="text/javascript" src="js/jQuery.js" ></script>
<script>
	$(function(){
		$('#btn').click(function(){
			//1.1 css('height'),css('width')
			//获取id为one的宽高,带有px，是字符串
//			console.log($('#one').css('height'));
//			console.log($('#one').css('width'));
			
			//1.2width()，height()  
			//获取或设置宽高，不包括padding/border/margin
			//(1)获取宽高
//			console.log($('#one').width());
//			console.log($('#one').height());
			
			//(2)设置宽高
//			$('#one').width(300);
//			$('#one').height(300);
			
			//1.3 innerWidth()/innerHeight()  
			//方法返回元素 的宽度/高度（包括内边距padding）
//			console.log($('#one').innerWidth());
//			console.log($('#one').innerHeight());
			
			//1.4 outerWidth()/outerHeight    
			//方法返回元素 的宽度/高度（包括内边距padding和边框border）
//			console.log($('#one').outerWidth());
//			console.log($('#one').outerHeight());
			
			//1.5 outerWidth(true)/outerHeight(true)    
			//方法返回元素 的宽度/高度（包括内边距padding和边框border和外边框margin）
//			console.log($('#one').outerWidth(true));
//			console.log($('#one').outerHeight(true));
			
			//1.6 获取页面可视区域的宽高
			console.log($(window).width());
			console.log($(window).height());
		})
	})
</script>
```



## 18、位置

方法：

- offset()
  - 获取一个对象，对象里面包含top和left；offset()获取元素距离document的位置
- position()
  - 获取一个对象，对象里面包含top和left；position()获取元素距离定位父级(offsetParent)的位置

代码案例：

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
		<style>
			*{
				margin: 0;
				padding: 0;
			}
			.father{
				width: 400px;
				height: 400px;
				border: 10px solid red;
				position: relative;
				top: 10px;
				left: 10px;
			}
			.son{
				width: 100px;
				height: 100px;
				border: 10px solid green;
				position: absolute;
				top: 100px;
				left: 100px;
			}
		</style>
	</head>
	<body>
		<input type="button" id="btn1" value="offset()" />
		<input type="button" id="btn2" value="position()" />
		
		<div class="father" id="father">
			<div class="son"  id="son">
				
			</div>
		</div>
	</body>
</html>

<script type="text/javascript" src="js/jQuery.js" ></script>
<script>
	$(function(){
		//1. offset()
		//获取一个对象，对象里面包含top和left
		//offset()获取元素距离document的位置
		$('#btn1').click(function(){
			console.log($('#son').offset());  //top:143 ,left:120
		});
		
		//2.position()
		//获取一个对象，对象里面包含top和left
		//position()获取元素距离定位父级(offsetParent)的位置
		$('#btn2').click(function(){
			console.log($('#son').position());  //top:100,left:100
		});
	})
</script>
```



## 19、卷曲距离(滚动条的位置)

方法：

- scrollLeft()	
  - 获取元素内容被卷曲进去的宽度
- scrollTop()
  - 获取元素内容被卷曲进去的高度
- scrollLeft(数值)	
  - 设置元素内容被卷曲进去的宽度
- scrollTop(数值)
  - 设置元素内容被卷曲进去的高度



案例代码：

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
		<style>
			*{
				padding: 0;
				margin: 0;
			}
			body{
				width: 2000px;
				height: 2000px;
			}
			div{
				width: 200px;
				height: 200px;
				border: 1px solid red;
				overflow: auto;
			}
			img{
				vertical-align: top;
				width: 400px;
				height: 400px;
			}
		</style>
	</head>
	<body>
		<input type="button" value="按钮" id="btn" />
		<div>
			<img src="img/1.jpg"/>
		</div>
	</body>
</html>

<script type="text/javascript" src="js/jQuery.js" ></script>
<script>
	$(function(){
		$('#btn').click(function(){
			
			//1.获取和设置元素被卷曲的距离
			//(1)获取
			//scrollLeft()	获取元素内容被卷曲进去的宽度
			//scrollTop()	获取元素内容被卷曲进去的高度
			console.log($('div').scrollLeft());
			console.log($('div').scrollTop());
			
			//(2)设置
			//scrollLeft(数值)	设置元素内容被卷曲进去的宽度
			//scrollTop(数值)		设置元素内容被卷曲进去的高度
			$('div').scrollLeft(200);
			$('div').scrollTop(100);
			
			
			//2.获取和设置页面被卷曲的距离
			//(1)获取
			//获取页面被卷曲的宽度
			console.log($(window).scrollLeft());
			//获取页面被卷曲的高度
			console.log($(window).scrollTop());
			
			//(2)设置
			$(window).scrollLeft(1000);
			$(window).scrollTop(1000)
		})
	})
</script>
```

### 案例：固定导航栏

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>固定导航栏</title>
		<style>
			body{
				width: 1080px;
				height: 720px;
			}
			.top{
				width: 1080px;
				height: 100px;
				background: red;
			}
			.nav{
				width: 1080px;
				height: 100px;
				background: navy;
			}
			.main{
				margin-top: 10px;
				width: 1080px;
				height: 5000px;
				background: green;
			}
		</style>
	</head>
	<body>
		<div class="top"></div>
		<div class="nav"></div>
		<div class="main"></div>
	</body>
</html>

<script type="text/javascript" src="js/jQuery.js" ></script>
<script>
	$(function(){
		//给页面设置一个滚动事件
		
		//计算头部的高度
		var topHeight = $('.top').height();
		
		//计算导航栏的高度
		var navHeight = $('.nav').height();
		
		$(window).scroll(function(){
			//1.获取页面被卷曲的距离
			var scrollTopValue = $(window).scrollTop();
			console.log(scrollTopValue);
			
			//2.判断
			if(scrollTopValue>=topHeight){
				//固定导航栏
				$('.nav').css({
					position:'fixed',
					top:0,
					left:0
				});
				//设置内容部分的margin-top的值为导航栏的高度
				$('.main').css({
					marginTop:navHeight+10
				});
			}else{
				//让导航栏的定位还原
				$('.nav').css({
					position:'static',
					top:0,
					left:0
				});
				//让内容部分的margin-top的值还原
				$('.main').css({
					marginTop:10
				});
			}	
		})
	})
</script>
```



## 20、jQuery 事件机制

### 原生js事件与jQuery事件：

（1）用原生的js给div注册事件

- 原生js注册相同的事件，后面的会把前面的覆盖

```js
document.getElementById("one").onclick=function(){
	alert("单击事件1");
};

document.getElementById("one").onclick=function(){
	alert("单击事件2");
}
```

（2）jQuery注册相同的事件，不会吧前面的覆盖

```js
$('#one').click(function(){
	alert("单击事件1");
});
$('#one').click(function(){
	alert("单击事件2");
});
```



### jQuery事件的发展历程：

（1）简单的事件绑定 click()

- 不支持同时注册，也不支持动态注册（新创建的组件不能自动注册应有的事件）

```js
//不支持同时注册
$('div').click(function(){
	console.log("鼠标单击事件");
});

$('div').mouseenter(function(){
	console.log("鼠标移入事件");
});

//新创建的节点对click()事件不支持动态注册
$('#btn').click(function(){
			var $divNew = $('<div class="two"></div>');
			$('body').append($divNew);
});
```



（2）bind方式注册事件

- 支持同时注册，也不支持动态注册（新创建的组件不能自动注册应有的事件）

```js
//支持同时注册
$('div').bind({
	mouseenter:function(){
		console.log("鼠标移入事件");
	},
click:function(){
		console.log("鼠标单击事件");
	}
});

//新创建的节点对bind()事件不支持动态注册
$('#btn').click(function(){
			var $divNew = $('<div class="two"></div>');
			$('body').append($divNew);
});
```



（3） delegate注册委托事件

- 支持同时注册，也支持动态注册（新创建的组件可以自动注册应有的事件）
- 需要把事件注册在父亲节点上面
- 原理是事件冒泡

```js
$('body').delegate('div',{
	mouseenter:function(){
		console.log("鼠标移入事件");
	},
	click:function(){
		console.log("鼠标单击事件");
	}
});
```

（4）jQuery1.7之后，jQuery用on统一了所有事件的注册



### on 注册事件：

- jQuery1.7之后，jQuery用on统一了所有事件的注册
- 最现代的方式，兼容zepto（移动端类似jQuery的一个库），强烈建议使用。

（1）on简单注册事件

- 不支持动态创建

```js
$('div').on('click',function(){
	console.log("我是点击事件");
});
```

（2）on委托注册

- 需要把事件注册到父亲节点

```js
$('body').on('click','div,span',function(){
	console.log("我是点击事件");
});
```

### 案例：动态数据的添加和删除

```js
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>表格删除</title>
		<style>
			*{
				padding: 0;
				margin: 0;
			}
			table{
				border-collapse:collapse ;
				border-spacing: 0;
				
			}
			
			thead{
				display: table-header-group;
				vertical-align: middle;
				border-color:inherit ;
			}
			
			tbody{
				display: table-row-group;
				vertical-align: middle;
				border-color: inherit;
			}
			th{
				padding: 10px 10px;
				background-color: skyblue;
				border: 1px solid white;
			}
			td{
				padding: 10px 10px;
				background-color: #eeeeee;
				border: 1px solid #999999;
			}
			.mask{
				position: absolute;
				left: 0px;
				top:0px;
				background-color: #EEEEEE;
				opacity:0.5;
				width: 100000px;
				height: 10000px;
				display: none;
			}
			
			.form-add{
				width: 400px;
	            height: 300px;
	            background: skyblue;
	            position:absolute;
	            left:0;
	            top: 0;
	            bottom: 0;
	            right: 0;
	          	display: none;
			}
			
			#j_hideFormAdd{
				position:absolute;
				top: 0px;
				right: 0px;
				font-size: 50px;
			}			
		</style>
	</head>
	<body>
		<div class="wrap">
			<input type="button" value="添加数据" id="btn" />
			<table>
				<thead>
					<tr>
						<th>专栏名称</th>
						<th>内容描述</th>
						<th>操作</th>
					</tr>
				</thead>
				<tbody id="tb">
					<tr>
						<td>JavaSE 学习笔记</td>
						<td>参考Oracle官方文档，系统学习JavaSE</td>
						<td><button class="del">删除</button></td>
					</tr>
					<tr>
						<td>Oracle数据库笔记</td>
						<td>参考Oracle官方文档，系统学习Oracle数据库</td>
						<td><button class="del">删除</button></td>
					</tr>
					<tr>
						<td>LeetCode热门算法100道</td>
						<td>刷题的必选之路</td>
						<td><button class="del">删除</button></td>
					</tr>
					<tr>
						<td>Linux学习笔记</td>
						<td>从零学习Linux系统</td>
						<td><button class="del">删除</button></td>
					</tr>
				</tbody>
			</table>
		</div>
		
		<div id="j_mask" class="mask"></div>
		
		<div id="j_formAdd" class="form-add">
			<div class="form-add-title">
				<span>添加数据</span>
				<div id = "j_hideFormAdd">×</div>
			</div>
			<div class="form-item">
				<label class="lb" for="j_txtLesson">专栏名称:</label>
				<input class="txt" type="text" id="column" placeholder="请输入专栏名称" />
			</div>
			<div class="form-item">
				<label class="lb" for="j_txtBelSch">内容简述:</label>
				<input class="txt" type="text" id="content" placeholder="请输入内容描述" />
			</div>
			<div class="form-submit">
				<input type="button" id="j_btnAdd" value="添加" />
			</div>
		</div>
		
		
	</body>
</html>

<script type="text/javascript" src="js/jQuery.js" ></script>
<script>
	$(function(){		
		//1.删除一行
		//使用on委托注册事件
		$('#tb').on('click','.del',function(){
			//jQuery为了使用方便,把this修改了,为点击元素,不是父亲节点tbody
			$(this).parent().parent().remove();
		})
			
			
		
		//2.设置添加数据按钮事件
		$('#btn').click(function(){
			$('#j_formAdd').show();
			$('#j_mask').show();
		});
		
		//3.设置关闭按钮事件
		$('#j_hideFormAdd').click(function(){
			$('#j_formAdd').hide();
			$('#j_mask').hide();
		});
		
		//4.设置添加按钮事件
		$('#j_btnAdd').click(function(){
			//获取专栏名称和内容描述
			var $column = $('#column').val();
			var $content = $('#content').val();
			
			//把用户的输入专栏名称和内容描述，创建一个tr
			var $trNew = $('<tr>'+
			'<td>'+$column+'</td>'+
			'<td>'+$content+'</td>'+
			'<td><button class="del">删除</button></td></tr>');
			
			//把新创建的tr标签添加到tbody中
			$('#tb').append($trNew);
			
			//把添加数据面板和遮罩隐藏
			$('#j_hideFormAdd').click();	
		});
	})
</script>
```



### 事件解绑：

（1）unbind方式解绑事件（不推荐使用）

```js
//解绑所有事件
$('div').unbind();
//解绑指定事件
$('div').unbind('click');
```

（2）undelegate方式解绑事件（不推荐使用）

```js
//解绑所有事件
$('div').undelegate();
//解绑指定事件
$('div').undelegate('click');
```

（3）off方式解绑事件（推荐使用）

```js
//解绑所有事件
$('div').off();
//解绑指定事件
$('div').off('click');
```



案例：

```js
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
		<style>
			#one{
				width: 200px;
				height: 200px;
				border: 2px solid red;
			}
		</style>
	</head>
	<body>
		<input type="button" value="注册事件" id="btn1" />
		<input type="button" value="解绑事件" id="btn2" />
		<br />
		<div class="one" id="one"></div>
	</body>
</html>

<script type="text/javascript" src="js/jQuery.js" ></script>
<script>
	$(function(){
		//jQuery用on注册事件,用off来解绑
		//off()不给参数就是解绑所有的事件
		//off(参数)解绑指定事件
		
		//添加注册事件
		$('#btn1').click(function(){
			//给div注册事件
			$('#one').on({
				'click':function(){
					console.log("这个单击事件");
				}
			});
			$('#one').on({
				'mouseenter':function(){
					console.log("这个鼠标移入事件");
				}
			});
		});
		
		//添加解绑事件
		$('#btn2').click(function(){
			//给div解绑事件(无参数,解绑所有参数)
//			$('#one').off();
			
			//解绑指定事件(有参数,解绑指定事件)
			$('#one').off('click');
		})
		
		//添加解绑事件(不是用on注册的也可以用off解绑)
		$('#btn2').click(function(){
			$('#btn1').off('click');
		})
	})
</script>
```



### 事件触发：

方法：trigger()

（1）代码的方式触发事件

```js
		var i = 0;
		$('#btn').on('click',function(){
			i++;
			if(i>=3){
				//条件满足，触发事件
//				$('#one').click();
				$('#one').trigger('click');
			}
		});
```

（2）可以触发自定义事件

```js
		//给div注册一个自定义事件（没有触发事件）
		$('#one').on('kill',function(){
			console.log('我是kill事件');
		});
		
		//使用触发器触发
		$('#btn2').on('click',function(){
			var res = confirm('是否启动kill事件');
			if(res){
				//触发自定义kill事件
				$('#one').trigger('kill');
			}
		});
```



### jQuery事件对象：

1. 什么是事件对象？

   - 注册一个事件，系统会帮我们生成一个对象记录这个事件触发时候的一些信息
   - 比如事件是按那个键触发的，触发的位置坐标。。。
   - jQuery在事件中由参数e来获取
   - jQuery的事件对象是对元素js的事件进行了封装，处理了兼容性

2. 三个常用坐标

   - screenX,screenY触发事件的点距离屏幕左上角的坐标

- clientX,clientY触发事件的点距离可视区左上角的坐标（忽视滚动条）

  - pageX,pageY触发事件的点距离页面左上角的坐标

  

  ```JS
  //screenX,screenY触发事件的点距离屏幕左上角的坐标
  console.log('ScreenX'+':'+e.screenX+'---'+'ScreenY'+':'+e.screenY);
  
  //clientX,clientY触发事件的点距离可视区左上角的坐标（忽视滚动条）
  console.log('ClientX'+':'+e.clientX+'---'+'ClientY'+':'+e.clientY);
  
  //pageX,pageY触发事件的点距离页面左上角的坐标
  console.log('pageX'+':'+e.pageX+'---'+'pageY'+':'+e.pageY);
  ```

  

3. stopPropagation()  :  阻止事件冒泡

   ```JS
   $('#btn').on('click',function(e){
   	alert('我是按钮的点击事件');
   	e.stopPropagation();
   });
   ```

4. preventDefault() : 阻止默认行为,阻止a标签跳转

   ```js
   $('a').on('click',function(e){
       alert('我是a标签的单击事件');
       //stopPropagation():阻止事件冒泡
       e.stopPropagation();
   
       //4.preventDefault():阻止默认行为,阻止a标签跳转
       e.preventDefault();
   });
   ```

5. return false 既能阻止事件冒泡，又能阻止a标签跳转

   ```JS
   $('a').on('click',function(e){
   	alert('我是a标签的单击事件');
   
   	//5.return false 既能阻止事件冒泡，又能阻止a标签跳转
   	return false;
   });
   ```

6. keydown 获取键盘按键

   ```
   $(document).on('keydown',function(e){}
   ```

### 案例：按键变色

```js
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
		<style>
			#bgChage{
				height: 50px;
				font-size: 40px;
			}
		</style>
	</head>
	<body>
		<div class="wrop">
			<h1>按键变色</h1>
			<div id="bgChage" style="background-color: blue">
				keyCode为:
				<span id="keyCodeSpan"></span>
			</div>
		</div>
	</body>
</html>

<script type="text/javascript" src="js/jQuery.js" ></script>
<script>
	$(function(){
		//获取div
		var $div = $('#bgChage');
		
		//显示按键的span
		var $showCode = $('#keyCodeSpan');
		
		//给页面注册一个键盘按键事件
		$(document).on('keydown',function(e){
			console.log(e.keyCode); // r:82   g:71   b:66    y:89  
			switch(e.keyCode){
				case 82:
					$div.css('background-color','red');
					$showCode.text('82');
				break;
				case 71:
					$div.css('background-color','green');
					$showCode.text('71');
				break;
				case 66:
					$div.css('background-color','blue');
					$showCode.text('66');
				break;
				case 89:
					$div.css('background-color','yellow');
					$showCode.text('89');
				break;	
				default:
					$div.css('background-color','pink');
					$showCode.text('没有这个键');
			}
		})
	})
</script>
```



### 案例：五角星评分

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>五角星评分案例</title>
		<style>
			ul{
				list-style: none;
			}
			li{
				display: inline-block;
			}
			.comment{
				font-size:40px ;
				color: red;
			}
		</style>
	</head>
	<body>
		<ul class="comment">
			<li>☆</li>
			<li>☆</li>
			<li>☆</li>
			<li>☆</li>
			<li>☆</li>
		</ul>
	</body>
</html>

<script type="text/javascript" src="js/jQuery.js" ></script>
<script>
	$(function(){
		//需求1:鼠标移入五角星，会把当前li标签和前面的li标签显示为实心五角星，后面的显示空心五角星
		//需求2:鼠标离开li，会把所有的li标签设为空心五角星
		//需求3:点击li，鼠标离开后，刚才被点击的li标签及前面的li标签为实心，后面为空心
		
		//prev():上一个兄弟
		//prevAll():前面所有兄弟
		//next():下一个兄弟
		//nextAll():后面所有兄弟
		
		
		//需求1：
		$('.comment>li').on('mouseenter',function(){
//			console.log('鼠标进入');
			//需求1
			$(this).text('★').prevAll().text('★');
			$(this).nextAll().text('☆');
			
		}).on('mouseleave',function(){
//			console.log('鼠标离开');
			//需求2
			$('.comment>li').text('☆');
			
			//获取刚才点击的li(属性选择器)
			$('.comment>li[flag]').text('★').prevAll().text('★');
			
			$('.comment>li[flag]').nextAll().text('☆');

		}).on('click',function(){
//			console.log('鼠标单击');
			//需求3：给当前的li添加记号
			//给当前鼠标点击的li添加独一无二的属性
			$(this).attr('flag','flag').siblings().removeAttr('flag');
		})	
	})
</script>
```



## 21、链式编程和end方法

### 1. 什么时候可以链式编程？

- 如果给元素调用一个方法，返回值为一个jQuery对象，那就可以继续在点出jQuert方法
- 如果返回值不是我们想要的，那就不要继续链式编程了

```js
$('div').width(100).height(100).css('background-color','red');
```

### 2. end()方法会返回上一层的结果

```js
$(this).text('★').prevAll().text('★').end().nextAll().text('☆');
```



## 22、each方法

（1）each(function(index,element){}

- index 是索引
- element是遍历到的标签，为一个dom对象

（2）each作用

- 遍历jQuery对象集合，为每一个匹配的元素执行一个函数

（3）什么时候使用？

- 给每一个对象设置不同值的时候

**案例：显示迭代**

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
		<style>
			ul{
				
				list-style: none;
				font-size:20px ;
				color: black;
			}
			li{
				margin-top: 10px;
				margin-left: 10px ;
				display: inline-block;
				width: 200px;
				height: 200px;
				text-align: center;
				border: 2px solid red;
				background-color: red;
			}
			
		</style>
	</head>
	<body>
		<ul id="ulList">
			<li>我是一个li标签</li>
			<li>我是一个li标签</li>
			<li>我是一个li标签</li>
			<li>我是一个li标签</li>
			<li>我是一个li标签</li>
			<li>我是一个li标签</li>
			<li>我是一个li标签</li>
			<li>我是一个li标签</li>
			<li>我是一个li标签</li>
			<li>我是一个li标签</li>

		</ul>
	</body>
</html>

<script type="text/javascript" src="js/jQuery.js" ></script>
<script>
	$(function(){
		var $lis = $('#ulList').children();
		
		//给lis的每一个li设置透明度
		//each(function(index,element){}
		//each作用：遍历jQuery对象集合，为每一个匹配的元素执行一个函数
		//什么时候使用？
		//给每一个对象设置不同值的时候
		//index 是索引，element是遍历到的标签，为一个dom对象
		$lis.each(function(index,element){
			$(element).css('opacity',index/10);
			console.log(index/10);
		});
	})
</script>
```

## 23、多库共存

查询jQuery的版本号：

```js
console.log(jQuery.fn.jquery);
console.log(jQuery.prototype.jquery);
console.log($.fn.jquery);
console.log($.prototype.jquery);
```

**如果引入了多个jQuery版本，那么我们使用的$是 那个？**

- 后面引入的会把前面引入的覆盖掉



**如何解决多库共存？**

后面加入的jQuery可以把$控制器释放，然后用替代品代替

```
var _$ = $.noConflict();        //1.9.1把$元素的控制权释放掉
	console.log(_$.fn.jquery);		//1.9.1把_$作为替代品
	console.log(jQuery.fn.jquery); 	//1.9.1自己使用jQuery来操作
	console.log($.fn.jquery);		//3.5.1拥有$的控制权
```



**如果之前使用的1.9.1版本的$,现在$归3.5.1版本了，如何解决？**

- 可以把之前的js代码使用自执行函数框起来

```
(function($){
		//在这个自执行函数中，可以继续使用$了
}(_$));
```



## 24、jQuery插件库

网址：http://www.jq22.com/

案例：颜色插件

```js
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
		<style>
			div{
				width: 200px;
				height: 200px;
				background-color: red;
				position: relative;
				top: 0px;
				left: 0px;
			}
		</style>
	</head>
	<body>
		<input type="button" value="按钮" id="btn" />
		<div></div>
		
	</body>
</html>
<script type="text/javascript" src="js/jQuery1.9.1.js" ></script>
<script src="http://code.jquery.com/color/jquery.color-2.2.0.js" integrity="sha256-gvMJWDHjgDrVSiN6eBI9h7dRfQmsTTsGU/eTT8vpzNg=" crossorigin="anonymous"></script>
<script>
	$(function(){
		//需求：点击按钮，让div做动画，left改变为800,改变背景色
		//animate动画不能改变背景色，如果要改，就要使用插件
		$('#btn').on('click',function(){
			//让div做动画
			$('div').animate({
				left:800,
				width:100,
				height:100,
				backgroundColor:'green'
			},2000);
			
			//什么是插件？
			//就是用来扩展功能的
		})
	})
</script>
```



### 案例：省市联动

```html
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<script type="text/javascript" src="js/pcasunzip.js" charset="UTF-8"></script>

<script type="text/javascript">
function getValue(){ 
var getpro=document.getElementById("province").value;
var getcity=document.getElementById("city").value;
var getarea=document.getElementById("area").value;
alert(getpro+" "+getcity+" "+getarea);
 }
</script>
</head>
<body>
<font size="5" color="color<b></b>">根据需要可进行删除，删除须知：例如如果删除出生地该行，下面script中也要做想对应的操作，如果改动，下面script中的也要做相应的改动,得到select的值需在每个省市县三级三个select中添加上id的得到，例如：
select name="user.province" id="province"；
select name="user.city" id="city"；
select name="user.area" id="area"<br>
</font>
</br></br></br>

<form action="" method="">
<fieldset style="padding:5px;">
<legend>省市地区联动</legend>
出　　 生 　地：<select name="user.province" id="province"></select>
				<select name="user.city" id="city"></select>
				<select name="user.area" id="area"></select><br>
 <input type="button" name="bt" id="bt" value="测试" onclick="getValue()">
</fieldset>
</form>
<script language="javascript" defer>
new PCAS("user.province","user.city","user.area","山东省","济南市","济南市");

</script>
<br>
</body>
```



## 25、jQuery UI 插件的使用

**（1）下载jQuery UI 组件库**

官网地址：https://jqueryui.com/

将下载好的jquery-ui-1.12.1.zip进行解压，这是我用的最新的版本。

**（2）把相关文件复制到项目中**

打开解压好的文件夹，把jquery-ui.css 复制到自己项目的css文件夹下面，把jQuery-ui.js复制到自己项目的js文件夹下面。

**（3）调用相关文件**

在自己的html文件中，需要引入jquery-ui.css 和 jQuery-ui.js，当然还要有jQuery.js。

```html
<head>
		<meta charset="UTF-8">
		<title></title>
		<link rel="stylesheet" href="css/jquery-ui.css" />
</head>
<script type="text/javascript" src="js/jQuery3.5.1.js" ></script>
<script type="text/javascript" src="js/jquery-ui.js" ></script>	
```



**（4）找到自己心怡的组件**

使用浏览器打开里面的index.html，找到心怡的组件之后，然后查看网页源代码。

**（5）复制组件源代码**

查看网页源代码，然后使用ctrl+f，开始搜索组件名，找到组件的html部分进行复制。粘贴到自己的html文件中。

例如：

```html
<!-- Accordion -->
    <h2 class="demoHeaders">Accordion</h2>
    <div id="accordion">
        <h3>First</h3>
        <div>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</div>
        <h3>Second</h3>
        <div>Phasellus mattis tincidunt nibh.</div>
        <h3>Third</h3>
        <div>Nam dui erat, auctor a, dignissim quis.</div>
    </div>	
```

**（6）调用组件的对应方法**

查看网页源代码，在上一次使用ctrl+f查询到的结果，在找下一个，便是该组件的调用方法。调用后，便可生效。

例如：$( "#accordion" ).accordion();

```html
<script>
	$(function(){
		$( "#accordion" ).accordion();
	})
</script>
```

案例代码：

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
		<link rel="stylesheet" href="css/jquery-ui.css" />
	</head>
	<body>
		<!-- Accordion -->
		<h2 class="demoHeaders">Accordion</h2>
			<div id="accordion">
				<h3>First</h3>
				<div>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</div>
				<h3>Second</h3>
				<div>Phasellus mattis tincidunt nibh.</div>
				<h3>Third</h3>
				<div>Nam dui erat, auctor a, dignissim quis.</div>
			</div>	
		<!-- Tabs -->
		<h2 class="demoHeaders">Tabs</h2>
			<div id="tabs">
				<ul>
					<li><a href="#tabs-1">First</a></li>
					<li><a href="#tabs-2">Second</a></li>
					<li><a href="#tabs-3">Third</a></li>
				</ul>
				<div id="tabs-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
				<div id="tabs-2">Phasellus mattis tincidunt nibh. Cras orci urna, blandit id, pretium vel, aliquet ornare, felis. Maecenas scelerisque sem non nisl. Fusce sed lorem in enim dictum bibendum.</div>
				<div id="tabs-3">Nam dui erat, auctor a, dignissim quis, sollicitudin eu, felis. Pellentesque nisi urna, interdum eget, sagittis et, consequat vestibulum, lacus. Mauris porttitor ullamcorper augue.</div>
			</div>	
	</body>
</html>
<script type="text/javascript" src="js/jQuery3.5.1.js" ></script>
<script type="text/javascript" src="js/jquery-ui.js" ></script>
<script>
	$(function(){
		$( "#accordion" ).accordion();
		$( "#tabs" ).tabs();
	})
</script>
```



## 26、插件封装

### 如何封装自定义插件？

两种方式：

```
$.fn.method = function(){}			//实例方法
$.method = function(){}             //静态方法
```

两种方法的区别就在于，js代码中的自启动函数中，添加方法的对象不同，实例方法是添加到 $.fn上面，而静态方法是直接添加到$上面。



#### 方法一：

（1）创建jQuery-bgColor.js代码

```js
(function($){
	//需要给jQuery的原型添加方法
	$.fn.bgColor = function(color){
//		console.log(this); // 获取到的this是当前的调用对象div
		this.css('background-color',color);
		//返回jQuery对象
		return this;
	}
}(jQuery));
```

（2）调用

```html
<script type="text/javascript" src="js/jQuery3.5.1.js" ></script>
<script type="text/javascript" src="js/jQuery-bgColor.js" ></script>

<script>
	$(function(){
		$('div').width(100).height(100).bgColor('red');
	})
</script>
```



#### 方法二：

（1）创建jQuery-add.js代码

```js
(function($){
	$.add = function(num1,num2){
		return num1 + num2;
	}
}(jQuery))
```

（2）调用

```html
<script type="text/javascript" src="js/jQuery3.5.1.js" ></script>
<script type="text/javascript" src="js/jQuery-bgColor.js" ></script>
<script type="text/javascript" src="js/jQuery-add.js" ></script>
<script>
	$(function(){
		console.log($.add(10,20));
	})
</script>
```



### 案例：自定义表格插件

html文件：

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
		<style>
			table{
				display: table;
				border-spacing: 2px;
				border: 1px solid hotpink;
				width: 500px;
				border-collapse: collapse;
			}
			thead{
				display: table-header-group;
				vertical-align: middle;
				border-color: inherit;
			}
			th {
				border: 1px solid hotpink;
			}
			
			tbody{
				text-align: center;
			}
			
			td{
				border: 1px solid hotpink;
				
			}
		</style>
	</head>
	<body>
		<div id="c">
			
		</div>
	</body>
</html>

<script type="text/javascript" src="js/jQuery3.5.1.js" ></script>
<script type="text/javascript" src="js/jQuery-table.js" ></script>
<script>
	$('#c').table(['序号','姓名','年龄','工资'],[
	{n:'xy',age:20,s:10},
	{n:'wy',age:18,s:10},
	{n:'zf',age:18,s:9}
	]);
	
</script>
```



jQuery-table.js文件

```js
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
```



### 案例：自定义tab栏插件



html文件：

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>tab栏切换</title>
		
		<style>
			*{
				margin: 0;
				padding: 0;
			}
			
			
			ul{
				list-style: none;
			}
			
			.wrapper{
				width: 1000px;
				height: 475px;
				margin: 0 auto;
				margin-top:100px ;
			}
			
			
			.tab{
				border: 1px solid #ddd;
				border-bottom: 0;
				height: 36px;
				width: 320px;
			}
			
			.tab li{
				position: relative;
				float: left;
				width: 80px;
				height: 34px;
				line-height: 34px;
				text-align: center;
				cursor: pointer;
				border-top: 4px solid #FFFFFF ;
			}
			
			.tab span{
				position: absolute;
				right: 0;
				top:10px;
				background: #DDDDDD;
				width: 1px;
				height: 14px;
				overflow: hidden;

			}
			
			.products .main{
				float: left;
				display: none;
			}
			
			.products .main.selected{
				display: block;
			}
			
			.tab li.active{
				border-color: red;
				border-bottom: 0;
			}
		</style>
		
	</head>
	<body>
		<div id="wrapper">
			<ul class="tab" id="tab-menu">
				<li class="tab-item active">国际大牌</li>
				<li class="tab-item">国妆名牌</li>
				<li class="tab-item">清洁用品</li>
				<li class="tab-item">男士精品</li>
			</ul>
			<div class ="products" id="tab-main">
				<div class="main selected">
					<a href=""><img src="img/2.jpg" alt="" /></a>
				</div>
				<div class="main ">
					<a href=""><img src="img/3.jpg" alt="" /></a>
				</div>
				<div class="main ">
					<a href=""><img src="img/4.jpg" alt="" /></a>
				</div>
				<div class="main ">
					<a href=""><img src="img/5.jpg" alt="" /></a>
				</div>
			</div>
		</div>
	</body>
</html>
<script type="text/javascript" src="js/jQuery3.5.1.js" ></script>
<script type="text/javascript" src="js/jQuery-tabs.js" ></script>
<script>
	$(function(){
		$('#wrapper').tabs({
			tabHeads:'#tab-menu>li',
			tabHeadsClass:'active',
			tabBodys:'#tab-main>div',
			tabBodysClass:'selected'
		})
		
	})
</script>
```



jQuery-tabs.js文件：

```js
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

```







