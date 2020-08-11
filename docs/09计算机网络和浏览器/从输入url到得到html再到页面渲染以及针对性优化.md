# 从输入url到得到html再到页面渲染以及针对性优化.md
 相关或类似的题目
```
1、浏览器输入URL后发生了什么/从输入url到得到html的详细过程/加载一个资源的过程/3次握手4次挥手?
2、HTML页面渲染过程/浏览器渲染页面的过程?
3、window.onload和DOMContentLoaded的区别?
4、加载资源的形式?
5、浏览器主要组件?
```

题目详解
```
大致过程：url-->客户端-->DNS服务器-->服务器-->html-->解析渲染
针对此过程提出优化
```

---------------------------------------
## 1.从输入url到得到html的详细过程

### 1.域名解析得到IP
浏览器开一个线程处理URL请求，同时在**远程DNS服务器**启动一个DNS查询，这使浏览器得到请求对应的IP地址

>DNS（Domain Name Server，域名服务器）是进行域名(domain name)和与之相对应的IP地址 (IP address)转换的服务器。
DNS中保存了一张域名(domain name)和与之相对应的IP地址 (IP address)的表，以解析消息的域名。 
域名是Internet上某一台计算机或计算机组的名称，用于在数据传输时标识计算机的电子方位（有时也指地理位置）。域名是由一串用点分隔的名字组成的，通常包含组织名，而且始终包括两到三个字母的后缀，以指明组织的类型或该域所在的国家或地区。


![](https://gitee.com/hello_hww/img/raw/master/img1/20200621151917.png)

从客户端到本地服务器属于递归查询，而DNS服务器之间的交互属于迭代查询。

正常情况下，本地DNS服务器的缓存中已有comDNS服务器的地址，因此请求根域名服务器这一步不是必需的。

![](https://gitee.com/hello_hww/img/raw/master/img1/20200621151949.png)

>客户端收到你输入的域名地址后，它首先去找本地的hosts文件，检查在该文件中是否有相应的域名、IP对应关系，如果有，则向其IP地址发送请求，如果没有，再去找DNS服务器。一般用户很少去编辑修改hosts文件。

### 2.建立TCP链接

对于客户端与服务器的TCP链接，必然要说的就是『三次握手』。

![](https://gitee.com/hello_hww/img/raw/master/img1/20200621160602.png)

上图也可以这么理解：

客户端：“你好，在家不，有你快递。”

服务端：“在的，送来就行。”

客户端：“好嘞。”

客户端发送一个带有SYN标志的数据包给服务端，服务端收到后，回传一个带有SYN/ACK标志的数据包以示传达确认信息，最后客户端再回传一个带ACK标志的数据包，代表握手结束，连接成功。

### 3.发送http请求

与服务器建立了连接后，就可以向服务器发起请求了。这里我们先看下请求报文的结构（如下图）：

![](https://gitee.com/hello_hww/img/raw/master/img1/20200621160901.png)

在浏览器中查看报文首部（以google浏览器为例）：

![](https://gitee.com/hello_hww/img/raw/master/img1/20200621161429.png)

请求行包括请求方法、URI、HTTP版本。首部字段传递重要信息，包括请求首部字段、通用首部字段和实体首部字段。我们可以从报文中看到发出的请求的具体信息。具体每个首部字段的作用，这里不做过多阐述。

### 4.服务器处理http请求

服务器端收到请求后的由web服务器（准确说应该是http服务器）处理请求，诸如Apache、Ngnix、IIS等。web服务器解析用户请求，知道了需要调度哪些资源文件，再通过相应的这些资源文件处理用户请求和参数，并调用数据库信息，最后将结果通过web服务器返回给浏览器客户端。

![](https://gitee.com/hello_hww/img/raw/master/img1/20200621161927.png)



### 5.服务器返回响应结果

响应报文的组成结构：

![](https://gitee.com/hello_hww/img/raw/master/img1/20200621162018.png)

在响应结果中都会有个一个HTTP状态码，比如我们熟知的200、301、404、500等。通过这个状态码我们可以知道服务器端的处理是否正常，并能了解具体的错误。

状态码由3位数字和原因短语组成。根据首位数字，状态码可以分为五类：

| | 类别|原因短语|
|---------|-----------------|--------------------|
|1xx|信息性状态码|接收请求正在处理|
|2xx|成功状态码|请求正常处理完毕|
|3xx|重定向状态码|需要进行附加操作以完成请求|
|4xx|客户端错误状态码|服务器无法处理请求|
|5xx|服务器错误状态码|服务器处理请求出错|


### 6.关闭TCP连接

为了避免服务器与客户端双方的资源占用和损耗，当双方没有请求或响应传递时，任意一方都可以发起关闭请求。与创建TCP连接的3次握手类似，关闭TCP连接，需要4次握手。

![](https://gitee.com/hello_hww/img/raw/master/img1/20200621162920.png) 

上图可以这么理解：

客户端：“兄弟，我这边没数据要传了，咱关闭连接吧。”

服务端：“收到，我看看我这边有木有数据了。”

服务端：“兄弟，我这边也没数据要传你了，咱可以关闭连接了。”

客户端：“好嘞。”



>浏览器与远程Web服务器通过TCP3次握手建立一个TCP/IP连接.该握手包括一个同步报文，一个同步-应答报文和一个应答报文，这3个报文在浏览器和服务器之间传递。该握手首先由客户端尝试建立起通信，而后服务器应答并接受客户端的请求，最后由客户端发出该请求已被接收的报文。
一旦TCP/IP连接建立，浏览器会通过该链接向远程服务器发送HTTP的**GET请求**。远程服务器找到资源并使用HTTP响应返回该资源，值为200的HTTP响应状态表示一个正确的响应。
此时，Web服务器提供资源服务，客户端开始下载资源。

---------------------------------------

## 2.HTML页面解析渲染过程

### 1.解析html文件，创建DOM树
　　自上而下解析，遇到任何样式（link、style）和脚本（script）都会阻塞
　　1）css加载不会阻塞html文件的解析，但会阻塞dom的渲染
　　2）css加载会阻塞后面js语句的执行
　　3）js会阻塞html的解析和渲染，因为js有权利改变DOM结构，避免冲突从上到下执行
　　4）没有defer和async标签的script会立即加载并执行
　　5）有async标签的js，js的加载执行和html的解析和渲染并行
　　6）有defer标签的js，js的加载和html的解析和渲染并行，但会在html解析完成后执行,在触发DOMContentLoaded事件前执行
　　7）DOMContentLoaded和onload的区别：DOMContentLoaded在html解析完毕后执行，loload在页面完全加载完成后执行（包括样式和图片）

>为什么要把CSS放在head中？
先加载默认，又加载样式，用户体验差，性能体验差
为什么要把script放在body最下面？
不会阻塞HTML结构渲染，可以拿到所有的HTML

构建过程：Bytes->Characters->Tokens->Nodes->Dom

![](https://gitee.com/hello_hww/img/raw/master/img1/20200621224616.png)

### 2.解析css，生成CSSOM，css对象模型

构建过程：Bytes->Characters->Tokens->Nodes->CSSOM

![](https://gitee.com/hello_hww/img/raw/master/img1/20200621224754.png)



### 3.dom和css合并，构建渲染树（Render Tree）
1、过滤掉不可见节点(脚本标记、元标记)
2、过滤掉样式隐藏的节点（display:none）

### 4.布局（Layout）和绘制（Paint），重绘（repaint）和重排（reflow/回流）
布局计算每个对象的精确位置和大小。
绘制，使用最终渲染树将像素渲染到屏幕上。
1）重绘：根据元素的新属性重新绘制，使元素呈现新的外观
2）重排：当渲染树中的一部分因为元素的规模尺寸，布局，隐藏等改变而需要重新构建
>重排必定会引发重绘，但重绘不一定会引发重排


```
补充：
监听资源加载完成有四种方式
　　1. window.onload = function(){....}
　　2. window.addEventListener("load",function(){....});
　　3. document.body.onload = function(){....}
　　4. <body onload = "load()">
```
---------------------------------------

## 3.window.onload和DOMContentLoaded的区别

```js
window.addEventListener('load',function(){
    //页面的全部资源加载完才会执行，包括图片，视频
})
window.addEventListener('DOMContentLoaded',function(){
    //DOM 渲染完即可执行，此时图片，视频换坑能没有加载完成
})
```

## 4.加载资源的形式
输入url（或跳转页面）加载html
```
http://coding.m.imooc.com
```
加载html中的静态资源
```
<script src="/static/js/jquery.js"></script>
```



## 7.浏览器主要组件
![](https://gitee.com/hello_hww/img/raw/master/img1/20200621151133.png)

---------------------------------------

## 8.优化

#### 1.问题
白屏时间过长;h5浪费用户流量,用户体验差
产生的原因：网络问题、关键渲染路径（CRP）问题

#### 2.怎么做优化
如何做好优化呢，网上随便一搜，就有很多优化总结，无非就是网络优化、静态资源（html、js、css、image）优化。下面我们撇开网络方面的优化，只分析静态资源方面的优化。而静态资源的优化关键在于你要去深入理解关键渲染路径（CRP）的运行原理和规则。

使用一些工具，帮助我们去评估现有页面的CRP(关键渲染路径)性能。
>测试工具：Lighthouse 可以快速测试你的网页，并提供性能报告
监控工具：Nivigation Timing Api 设置你的代码，实时监控用户使用过程中的性能。

javascript阻止DOM构建（ DOMContentLoaded触发被延迟），css的下载和完成阻止javascript的执行。在没有javascript或者只含有异步javascript的页面中，DOM的构建和CSSOM的构建互不影响。

以下是优化方案：

```
1、降低请求数量
    a、减少获取数据的接口数（初始数据尽量通过一个接口返回）
    b、减少js、css的数量（提取公共js、css利用缓存、减少后续加载访问。有些代码直接注入页面无需外链形式访问加载。）
    c、图片懒加载
2、降低文件大小
    a、图片压缩以及使用webp
    b、压缩js、css
    c、gzip（设置content-encoding:gzip）
    d、icon或者svg绘制图标
3、加快请求速度
    a、DNS预解析
    b、减少域名数量(页面、js、css、image、接口域名、同种类型文本请求尽量同域名。)
    c、静态资源cdn分发
    d、提前加载（提前加载一部分可能被用户访问的图片或者数据信息）
4、缓存
    a、http协议缓存
    b、离线数据缓存localStorage
5、渲染
    a、js、css优化(按照规范来写)
    b、服务器渲染
    c、能异步加载的js要异步加载
    d、js不要修改dom和css，避免重绘
```

>DNS预解析 https://developer.mozilla.org/zh-CN/docs/Controlling_DNS_prefetching
>google规范 https://google.github.io/styleguide/jsguide.html#guide-notes

# 参考文章

“天龙八步”细说浏览器输入URL后发生了什么
https://www.xuecaijie.com/it/157.html#1Q64dG0mJ2gKFF

页面渲染过程解析
https://segmentfault.com/a/1190000015019450#item-2-3

前端性能优化知识点汇总
https://segmentfault.com/a/1190000013363147

