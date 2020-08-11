# 4.JS DOM

文档对象模型 🔍

通过 HTML DOM，可访问 JavaScript HTML 文档的所有元素。

DOM定义了表示和修改文档所需的方法，DOM对象即为宿主对象，由浏览器厂商定义，用来操作html和xml功能的一类对象的集合。也称为是对html和xml的标注编程接口。

HTML DOM 树
![](https://gitee.com/hello_hww/img/raw/master/img1/20200802131149.png)

## 作用
### 改变 HTML

改变 HTML 输出流--document.write()

改变 HTML 内容
```js
document.getElementById(id).innerHTML=新的 HTML
```

改变 HTML 属性
```js
document.getElementById(id).attribute=新属性值
```

```html
<img id="image" src="smiley.gif">
<script>
document.getElementById("image").src="landscape.jpg";
</script>
```

### 改变CSS
改变 HTML 样式
```js
document.getElementById(id).style.property=新样式
```

使用事件
```html
<h1 id="id1">我的标题 1</h1>
<button type="button"
onclick="document.getElementById('id1').style.color='red'">
点我!</button>
```

### 事件触发改变DOM

onclick=JavaScript执行代码


## DOM 基本操作汇总

### 查/获取节点
document//代表整个文档

- document.getElementById()//定义在Document.prototype上，通过id选择元素
- document.getElementsByName()//定义在Document.prototype上，通过元素name属性选择元素
- document.getElementsByTagName()//定义在Document.prototype和Element.prototype上，通过标签名选择元素
- document.getElementsByClassName()///定义在Document.prototype和Element.prototype上，通过类名选择元素
- document.querySelector()///定义在Document.prototype和Element.prototype上，css选择器
- document.querySelectorAll()///定义在Document.prototype和Element.prototype上，css选择器

### 查/遍历节点树

- Node.parentNode //父节点
- Node.childNodes //子节点
- Node.firstChild //第一个子节点
- Node.lastChild //最后一个子节点
- Node.nextSibling //后一个兄弟节点
- Node.previousSibling //前一个兄弟节点

基于元素节点树的遍历
- Node.parentElement//返回当前元素的父元素节点
- Node.children//只返回当前元素的元素子节点
- Node.childElementCount===Node.children.length//返回当前元素的元素子节点个数
- Node.firstElementChild//返回的是第一个元素的节点
- Node.lastElementChild//返回的是最后一个元素的节点

节点的四个属性
- nodeName :元素的标签名，一大写形式表示，只读。
- nodeValude：Text节点或Comment节点的文本内容，可读可写。
- nodeType：该节点的类型，只读
节点的类型：
|元素类型	|返回值 |英文 |
|:----|:----|:----|
|元素节点	|1|Element|
|属性节点	|2|Attruibute|
|文本节点	|3|Text|
|注释节点	|8|r|
|document	|9|r|
|DocumentFragment	|11|r|
- attributes：Element节点的属性结合。

### 增/创建节点
- document.createElement();
- document.createTextNode();
- document.createComment();
- document.createDocumentFragment();

### 增/插入节点
- document.appendChild();//可以向节点的子节点列表的末尾添加新的子节点
- document.insertBefore();//可在已有的字节点前中插入一个新的子节点
不同点：appendChild方法是在父节点中的字节点的末尾添加新的节点（相对于父节点来说）。insertBefor方法是在已有的节点前添加新的节点（相对于子节点来说的）

### 删除节点
- document.removeChild();
- document.remove();

### 替换节点
- document.replaceChild(a,b)；

### Element节点的一些属性
- innerHTML//获取或改变元素内容
- innerText/获取或改变元素文本内容

### Element节点的一些方法
- setAttruibute()；//设置元素行间的属性
- getAttruibute();//获取元素行间的属性
- removeAttruibute();//删除元素行间的属性

### 文本操作

- insertData(offset,String)
- appendData(string)
- deleteData(offset,count)
- replaceData(off,count,string)
- splitData(offset)
- substring(offset,count)


![](https://upload-images.jianshu.io/upload_images/16910815-d5b512913261e749.png)