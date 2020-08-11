# 前端分类词汇

## HTML中

头部/页眉：header  
首页/索引：index  
标志：logo  
个人中心：member  
显示：show  
隐藏：hide  
导航：nav  
子导航：sub_nav  
横幅广告：banner  
主体：main  
内容：content  
包裹：wrapper  
菜单：menu  
子菜单：sub_menu  
二级菜单：second_menu  
列表：list  
分块：section  
文章：article  
侧边栏/广告：aside  
页脚/底部：footer  
标题：title  
副标题：sub_title  
新闻：news   
热点：hot  
产品：product  
公司：company  
消息：message  
广告：advertising  
小图标：icon  
图片：img  
版权：copyright  
联系我们：contact_us  
友情连接：friend_link  
地址：address  
密码：password  
无序列表：ul (Unordered List)  
有序列表：ol (Ordered List)  
列表项：li (List Item)  
自定义列表：dl (Definition List)  
表单：form   
地址：action  
方法：method  
输入框：input  
单选：radio  
多选：checkbox  
提交按钮：submit  
选择：select  
光标：cursor  
标准光标：auto  
标准箭头：default  
手形光标：pointer  
移动标：move  
十字标：crosshair  

## CSS中

padding 内边距  
margin 外边距  
border 边线  
solid 直线  
dashed 虚线  
dotted 点线  
overflow 溢出  
hidden 隐藏  
visibility 可见度  
table 表格  
thead 表头  
tbody 表格内容  
tr (table row) 行  
td/th (table data, table headline)列  
rowspan 合并行  
colspan 合并列  
collapse 合并  
position 定位   
relative 绝对定位  
absolute 相对定位  
fixed 固定定位  
static 静态定位  

不透明度：opacity  
占位符：placeholder  
透明的：transparent  
静态定位：static  
过渡：transition  
变形：transform  
不管内容到了多少 到了长度就截断：word-break：break-all;  
使盒子边框自适应：box-sizing：border-box;  
允许长单词换行：word-wrap：break-word；  
阻止文本域下拉：resize：none；  

## JS中  
  
字符串转整数：parseInt  
字符串转浮点型：parseFloat  
不明确的：undefined  
没有定义：is not defined  
全局作用域：window  
正确的：true  
错误的：false  
长度：length  
函数：function  
警告框：alert  
输入框：prompt  
确认框：confirm  
打断：break   
继续：continue  
返回：return  
参数：arguments  
原型：prototype  
构造器：constructor   
计时器：setInterval  
解除计时器：clearIterval  
指定时间后调用：setTimeOut  
偏移：offset  
滚动：scroll  
父级：parent  
事件对象：event  
dom2级：addEventListener ie：attachEvent  
键盘编码：keyCode  

阻止事件冒泡：event.stopPropagation?event.stopPropagation( ):event.cancelBubble = true;  
阻止事件默认行为：event.preventDefault?event.preventDefault( ):event.returnValue = false;  

## 浏览器中 

浏览器的内核:  
　　ie trident  
　　谷歌 webkit 或 blink  
　　火狐 Gecko  
　　Opera presto  
　　Safari webkit  

 

事件:  
　　鼠标进入：mouseenter  
　　鼠标离开：mouseleave  
　　鼠标移动：mousemove  
　　鼠标悬浮：mouseover  
　　鼠标移除：mouseout  
　　鼠标按下：mousedown  
　　鼠标抬起：mouseup  
　　表单聚焦：focus  
　　失去焦点：blur  
　　表单内容被修改：change  
　　浏览器加载完成：load  
　　用户输入：input  
　　键盘按下：keydown  
　　键盘抬起：keyup  
　　右键出菜单事件：contextmenu  

 

获取属性节点:  
　　判断节点类型：nodeType  
　　获取元素身上所有属性构成的集合：obj.attributes  
　　获取元素身上指定属性的属性值：obj.getAttribute('class')  
　　修改元素身上指定属性的属性值：obj.setAttribute('class','class')  
　　删除元素中的一个属性：obj.removeAttribute('class')  
 
 

获取元素节点:  
　　获取元素的所有子节点包括文本：obj.childNodes  
　　获取元素的所有子节点不包括文本：obj.children  
　　获取元素里第一个子节点：obj.firstElementChild  
　　获取元素里最后一个子节点：obj.lastElementChild  
　　获取元素的父节点：obj.parentNode  
　　获取上一个兄弟节点：obj.previousElementSibling  
　　获取下一个兄弟节点：obj.nexElementSibling  

 

创建子节点:  
　　创建：span = document.createElement('span')  

　　把创建的节点插入到元素的子节点里：obj.appendChild(span)  

　　把创建的节点插入到指定的元素前面：obj.inserBefore(span,div.children[0])  

　　删除元素中的指定节点：obj.removeChild(obj.children[0])  

　　给元素添加内容：obj.innerHTML=span；  

　　给元素添加文本内容：obj.innerText=‘哈哈哈’；  

## 方法 

全局方法:  
　　将字符串转换成js代码：eval  
　　判断一个元素是不是数字：isNaN   
　　强制转换成数字：Number  
　　强制转换成小数：parseFloat   
　　强制转换成整数：ParseInt  
　　强制转换成字符串：String  

 

字符串的方法：  
　　返回指定位置的字符：charAt( )   
　　连接两个字符：concat( )  
　　查找字符在字符串中首次出现的位置：indexOf( )  
　　同上 从后开始查找：lastIndexOf( )  
　　截取字符串：slice( )  
　　把字符串分割成字符串数组：split( )  
　　截取字符串指定向后截取的个数：substr( )  
　　截取字符串：substring( )  
　　将所有大写转成小写：toLowerCase( )  
　　将所有小写转成大写：toUpperCase( )  
　　去除字符串两边的空格：trim( )  

 

数组方法：  
　　在数组的结尾添加一个元素：push( )  
　　在数组的开始添加一个元素：unshift( )  
　　删除数组中最后一个元素：pop( )  
　　删除数组中第一个元素：shift( )  
　　截取数组中的一部分 并返回一个新数组：slice( )  
　　在数组中添加或删除元素：splice( )  
　　给数组中的元素排序：sort( )  
　　反转数组中元素的顺序：reverse( )  
　　将数组转换成字符串格式的数组：toString( )  
　　合并多个数组 并返回新的数组：concat( )  
　　检索数组中的元素 并返回他所在的位置：indexOf( )  
　　将数组中的所有元素转换成字符串：join( )  
　　检测数组中的元素是否都满足条件 返回布尔值：every( )  
　　检测数组中的元素是否都满足条件 返回由满足条件的构成的新数组：filter( )  
　　检测数组中的第一个元素是否满足条件：find( )  
　　用于对数组进行遍历 并一个一个返回：foreach( )  
　　对数组进行遍历 将每个元素传入到回调函数加工 返回加工后的新数组：map( )  

## 对象方法

Math对象：  
　　弧度的π：Math.Pi( )  
　　平方根：Math.sqrt( )  
　　数字的绝对值：Math.abs( )  
　　上舍入：Math.ceil( )  
　　下舍入：Math.floor( )  
　　返回最大值：Math.max( )  
　　反回最小值：Math.min( )  
　　随机：Math.random( )  
　　返回x四舍五入后的数值：Math.round()  
　　返回正弦值：Math.sin( )  
　　返回余弦值：Math.cos( )  
　　返回正切值：Math.tan( )  
　　反正弦：Math.asin( )  
　　反余弦：Math.acos( )  
　　返回x的y次幂：Math.atan( )  

 

Date对象：  
　　get  
　　　　返回事件对象中的某一天：getDate( )  
　　　　返回周：getDay( )  
　　　　返回年：getFullYear( )  
　　　　返回月：getMonth( )  
　　　　返回时：getHours( )  
　　　　返回分：getMinutes( )  
　　　　返回秒：getSeconds( )   
　　　　获取1970.1.1至今的毫秒数：getTime( )  
　　　　返回毫秒：getMilliseconds( )  
　　　　返回指定时间到1970.1.1的毫秒数：parse( )  

　　set  
　　　　设置事件对象中的某一天：setDate( )   
　　　　设置年份：setFullYear( )  
　　　　设置月份：setMonth( )  
　　　　设置小时：setHours( )  
　　　　设置分钟数：setMinutes( )  
　　
## Vue中

mustache 胡子
computed 计算
watch 监听
filters 过滤器
mounted 挂载，生成

## 数据库中