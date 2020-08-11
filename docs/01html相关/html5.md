# 3. HTML5

## 3.1 HTML5相关概念

- W3C 万维网联盟
- WHATWG 是 web 超文本技术工作组（Web Hypertext Application Technology Working Group）
- XHTML 中有 DTD 为文档类型定义(Document Type Definition)
```
可扩展超文本标记语言（英语：eXtensible HyperText Markup Language，XHTML），
是一种标记语言，表现方式与超文本标记语言（HTML）类似，不过语法上更加严格。
从继承关系上讲，HTML是一种基于标准通用标记语言（SGML）的应用，是一种非常灵活的置标语言，
而XHTML则基于可扩展标记语言（XML），XML是SGML的一个子集。
XHTML 1.0在2000年1月26日成为W3C的推荐标准。

XHTML1.1为XHTML最后的独立标准，2.0止于草案阶段。
XHTML5则是属于HTML5标准的一部分，且名称已改为“以XML序列化的HTML5”，而非“可扩展的HTML”。
在今日(2017年)，XHTML5比起HTML5仍远远并非主流。
```
- HTML5=HTML+CSS+Javascript
- HTML5 移动发展非常多

> HTML5 文档定义

```html 
<!--文档定义，声明必须位于 HTML5 文档中的第一行-->
<!DOCTYPE html>
<!--中文编码来解析-->
<html lang="zh-CN">
<!--utf-8编码来解析-->
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Document</title>
</head>
<body>

</body>
</html>
```

```
HTML与XHTML之间的差别，粗略可以分为两大类比较：一个是功能上的差别，另外是书写习惯的差别。
关于功能上的差别，主要是XHTML可兼容各大浏览器、手机以及PDA，并且浏览器也能快速正确地编译网页。
  XHTML的规则：
     1:所有标签都必须小写。
     2:标签必须成双成对。
     3:标签顺序必须正确。
     4:所有属性都必须使用双引号。
     5:不允许使用target="_blank。
```

## 3.2 HTML5 新特性

### 3.2.1语义标签

- 同 div，span 标签
- 有语义化标签实现盒子
  - header  文档头部标签
  - nav     导航标签
  - aside   侧边栏标签
  - footer  页脚标签
  - section 栏目标签，定义文档中的节
  - article	定义文章
  - aside   定义页面以外的内容
  - details	定义用户可以看到或者隐藏的额外细节
  - summary	标签包含details元素的标题 
  - dialog	定义对话框 
  - figure	定义自包含内容，如图表
  - main	定义文档主内容
  - mark	定义文档的主内容
  - time	定义日期/时间

![](https://gitee.com/hello_hww/img/raw/master/img1/20200728214405.png)

### 3.2.2增强型表单

#### 新增五个表单元素
```
<datalist>	用户会在他们输入数据时看到域定义选项的下拉列表
<progress>	进度条，展示连接/下载进度
<meter>	刻度值，用于某些计量，例如温度、重量等
<keygen> 
提供一种验证用户的可靠方法
生成一个公钥和私钥
<output>	
用于不同类型的输出
比如尖酸或脚本输出
```

#### 表单控件新增属性

- required 属性值为本身，作用为表单控件一定要有内容，不会提交内容
- placeholder 属性内容为：显示提示内容
- autofocus 值为本身，规定在页面加载时，自动获取焦点
- 新增Input标签的type属性
  - email 限制输入为 Email 类型
  - url 限制输入为网站 包含`http://`
  - date 限制输入为 日期
  - week 限制输入为周类型
  - time 限制输入为时间类型 小时和分钟
  - month 限制输入为月类型
  - number 限制输入为数值型
  - color 颜色拾色器
  - range 范围（滑动条）属性 min、max、value 表示设定值
  - 如果浏览器不解析 type 的值，则当成文本框使用

[更多相关：HTML5新的Input类型](https://www.runoob.com/html/html5-form-input-types.html)

```html
<!-- 此类型要求输入格式正确的email地址 -->
<input type=email >
<!-- 要求输入格式正确的URL地址  -->
<input type=url >
<!-- 要求输入格式数字，默认会有上下两个按钮 -->
<input type=number >
<!-- 时间系列，但目前只有 Opera和Chrome支持 -->
<input type=date >
<input type=time >
<input type=datetime >
<input type=datetime-local >
<input type=month >
<input type=week >
<!-- 默认占位文字 -->
<input type=text placeholder="your message" >
<!-- 默认聚焦属性 -->
<input type=text autofacus="true" >
```

### 3.2.3音频

- audio 标签同视频控件
- autoplay loop controls 等
- 支持格式 Ogg Vorbis，MP3，Wav

```html
<audio controls>    //controls属性提供添加播放、暂停和音量控件。
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mpeg">
您的浏览器不支持 audio 元素。        //浏览器不支持时显示文字
</audio>
```


### 3.2.4视频

- video 标签，支持格式 Ogg，MPEG4,WebM
- src 属性为资源，播放 url
- autoplay 自动播放视频
- controls 播放控制控件
- loop 重复播放视频
- width 视频宽
- height 视频高度，一般不设置
- 解决兼容性问题

  - 多选几种格式

  ```html 兼容性
  <video controls>
    <source src="xx.mp4">
    <source src="xx.ogg">
    <source src="xx.webm">
  </video>
  ```

```html
<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
您的浏览器不支持Video标签。
</video>
```


### 3.2.4Canvas绘图

- HTML5的canvas元素可以实现画布功能，该元素通过自带的API结合使用JavaScript脚本语言在网页上绘制图形和处理，拥有实现绘制线条、弧线以及矩形
- 用样式和颜色填充区域，书写样式化文本，以及添加图像的方法，且使用JavaScript可以控制其每一个像素-
- HTML5的canvas元素使得浏览器无需Flash或Silverlight等插件就能直接显示图形或动画图像
- 通过canvas绘制图像
- 通过canvas绘制路径
- 通过canvas绘制文本
- 通过canvas绘制渐变
- 通过canvas绘制图像

[菜鸟教程 HTML5 Canvas](https://www.runoob.com/w3cnote/html5-canvas-intro.html)

### 3.2.5SVG绘图

什么是SVG?

  SVG指可伸缩矢量图形(Scalable Vector Graphics)

  SVG用于定义用于网络的基于矢量的图形

  SVG使用XML格式定义图形

  SVG图像在放大或改变尺寸的情况下其图形质量不会有损失

  SVG是万维网联盟的标准

SVG的优势

与其他图像格式相比，是哟个SVG的优势在于：

   SVG图像可通过文本编译器来创建和修改

   SVG图像可被搜索、索引、脚本化或压缩

   SVG是可伸缩的

   SVG图像可在任何的分辨率下被高质量的打印

   SVG可在图像质量不下降的情况下被放大

 

SVG与Canvas区别

*SVG适用于描述XML中的2D图形的语言

*Canvas随时随地绘制2D图形（使用javaScript）

*SVG是基于XML的，意味这可以操作DOM，渲染速度较慢

*在SVG中每个形状都被当做是一个对象，如果SVG发生改变，页面就会发生重绘

*Canvas是一像素一像素地渲染，如果改变某一个位置，整个画布会重绘。

Canvas	SVG
依赖分辨率	不依赖分辨率
不支持事件处理器	支持事件处理器
能够以.png或.jpg格式保存结果图像	复杂度会减慢搞渲染速度
文字呈现功能比较简单	适合大型渲染区域的应用程序
最合适图像密集的游戏	不适合游戏应用


### 3.2.6地理位置

- HTML5通过引入Geolocation的API可以通过GPS或网络信息实现用户的定位功能，定位更加准确、灵活
- 通过HTML5进行定位，除了可以定位自己的位置，还可以在他人对你开放信息的情况下获得他人的定位信息

### 3.2.7拖放API

 拖放是一种常见的特性，即捉取对象以后拖到另一个位置。

在html5中，拖放是标准的一部分，任何元素都能够拖放。
```html
<div draggable="true"></div>
当元素拖动时，我们可以检查其拖动的数据。

<div draggable="true" ondragstart="drag(event)"></div>
<script>
function drap(ev){
    console.log(ev);
}
</script>
```
```
拖动生命周期	属性名	描述
拖动开始	ondragstart	在拖动操作开始时执行脚本
拖动过程中	ondrag	只要脚本在被拖动就运行脚本
拖动过程中	ondragenter	当元素被拖动到一个合法的防止目标时，执行脚本
拖动过程中	ondragover	只要元素正在合法的防止目标上拖动时，就执行脚本
拖动过程中	ondragleave	当元素离开合法的防止目标时
拖动结束	ondrop	将被拖动元素放在目标元素内时运行脚本
拖动结束	ondragend	在拖动操作结束时运行脚本
```

### 3.2.8WebStorage

- WebStorage数据存储，HTML5支持DOM Storage和Web SQL Database 两种存储机制
- localStorage用于长久保存整个网站的数据，保存的数据没有过期时间，直到手动去除
- sessionStorage - 用于临时保存同一窗口(或标签页)的数据，在关闭窗口或标签页之后将会删除这些数据

### 3.2.9WebWorker

- WebWorker多线程，通过创建一个Web Worker对象就可以实现多线程操作
- HTML5新增加了一个WebWorkerAPI，用户可以创建多个在后台的线程，将耗费较长时间的处理交给后台面不影响用户界面和响应速度，这些处理不会因用户交互而运行中断
- 大致步骤如下
  - ①先创建发送数据的子线程；
  - ②执行子线程任务，把要传递的数据发送给主线程；
  - ③在主线程接受到子线程传递回的消息时创建接收数据的子线程，然后把发送数据的子线程中返回的消息传递给接收数据的子线程；
  - ④执行接收数据子线程中的代码
- 此API解决js单线程的限制，使得大量的处理数据不会影响到js主线程的执行

### 3.2.10WebSocket

- WebSocket是HTML5开始提供的一种在单个 TCP 连接上进行全双工通讯的协议
- 浏览器通过 JavaScript 向服务器发出建立 WebSocket 连接的请求，连接建立以后，客户端和服务器端就可以通过 TCP 连接直接交换数据
- 当你获取 Web Socket 连接后，你可以通过 send() 方法来向服务器发送数据，并通过 onmessage 事件来接收服务器返回的数据
- 解决HTML4.01的轮询问题