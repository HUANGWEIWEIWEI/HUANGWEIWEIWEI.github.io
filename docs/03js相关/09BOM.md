# 5.JS BOM

浏览器对象模型（Browser Object Model (BOM)）尚无正式标准。

由于现代浏览器已经（几乎）实现了 JavaScript 交互性方面的相同方法和属性，因此常被认为是 BOM 的方法和属性。

## Window 对象

[Window对象属性和方法](https://www.runoob.com/jsref/obj-window.html)

所有浏览器都支持 window 对象。它表示浏览器窗口。

所有 JavaScript 全局对象、函数以及变量均自动成为 window 对象的成员。

全局变量是 window 对象的属性。

全局函数是 window 对象的方法。

甚至 HTML DOM 的 document 也是 window 对象的属性之一：
```js
window.document.getElementById("header");
```
与此相同：
```js
document.getElementById("header");
```

### Window的尺寸方法
有三种方法能够确定浏览器窗口的尺寸。

对于Internet Explorer、Chrome、Firefox、Opera 以及 Safari：

* window.innerHeight - 浏览器窗口的内部高度(包括滚动条)
* window.innerWidth - 浏览器窗口的内部宽度(包括滚动条)
对于 Internet Explorer 8、7、6、5：

* document.documentElement.clientHeight
* document.documentElement.clientWidth
或者

* document.body.clientHeight
*document.body.clientWidth

### 其他 Window 方法
一些其他方法：

window.open() - 打开新窗口
window.close() - 关闭当前窗口
window.moveTo() - 移动当前窗口
window.resizeTo() - 调整当前窗口的尺寸

### window.screen对象

window.screen对象在编写时可以不使用 window 这个前缀。

一些属性：

* screen.availWidth - 可用的屏幕宽度
* screen.availHeight - 可用的屏幕高度

screen.availHeight 属性返回访问者屏幕的高度，以像素计，减去界面特性，比如窗口任务栏。

### alert / prompt / confirm


## Navigator

![](https://gitee.com/hello_hww/img/raw/master/img1/20200808063507.png)