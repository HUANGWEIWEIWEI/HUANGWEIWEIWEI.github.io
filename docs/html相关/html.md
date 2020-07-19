# 2. HTML



## 2.1 语法用法

### 2.1.1 属性

 元素可以设置属性，一般描述于开始标签，键/值对形式，比如：name="value"，单双引号皆可  
 class属性为html元素定义一个或多个类名（classname）(类名从样式文件引入)  
id属性定义元素的唯一id  
style属性规定元素的行内样式（inline style）  
title属性描述了元素的额外信息 (作为工具条使用)  
> class 属性可以多用 class=" " （引号里面可以填入多个class属性）
> id 属性只能单独设置 id=" "（只能填写一个，多个无效）

#### 颜色属性



### 2.1.2 标签

严格讲，元素大于标签，元素以开始标签起始至结束标签终止。

#### 文本标签
```html
<h1>-<h6>定义标题

<hr>创建水平线

<!-- 这是一个注释 -->
command+/ 可快速注释一行或一段代码

<br>创建折行
如果您希望在不产生一个新段落的情况下进行换行（新行）
·HTML 代码中的所有连续的空行（换行）也被显示为一个空格

HTML 文本格式化标签:
<b>定义粗体文本
<em>定义着重文字
<i>定义斜体字
<small>定义小号字
<strong>定义加重语气
<sub>定义下标字
<sup>定义上标字
<ins>定义插入字/下划线
<del>定义删除字

HTML "计算机输出" 标签：
<code>定义计算机代码
<kbd>定义键盘码
<samp>定义计算机代码样本
<var>定义变量
<pre>定义预格式文本

HTML 引文, 引用, 及标签定义：
<abbr>定义缩写
<address>定义地址
<bdo>定义文字方向
<blockquote>定义长的引用
<q>定义短的引用语
<cite>定义引用、引证
<dfn>定义一个定义项目。
```
#### 链接标签--a
```html
用标签<a>来设置超文本链接，有href、target、id、rel、rev属性。

1.href 属性描述了链接的目标。
<a href="url">


2.target 属性定义被链接的文档在何处显示
<a target="value">

_blank在新窗口中打开被链接文档。
_self默认。在相同的框架中打开被链接文档。
_parent在父框架集中打开被链接文档。
_top在整个窗口中打开被链接文档。
framename在指定的框架中打开被链接文档。

3.id属性创建在一个HTML文档书签标记，在HTML文档中不显示
<a id="tips">有用的提示部分</a>

在HTML文档中插入ID:
<a id="tips">有用的提示部分</a>

在HTML文档中创建一个链接到"有用的提示部分(id="tips"）"：
<a href="#tips">访问有用的提示部分</a>

或者，从另一个页面创建一个链接到"有用的提示部分(id="tips"）"：
<a href="url#tips">
访问有用的提示部分</a>

4.rel 属性用于指定当前文档与被链接文档的关系、rev 属性则指定从目标文档到源文档的关系，这两种属性可以在 <a> 标签中同时使用。
<a href="part_12.html" rel="next" rev="prev">

<a rel="value">

alternate文档的可选版本（例如打印页、翻译页或镜像）。
stylesheet文档的外部样式表。
start集合中的第一个文档。
next集合中的下一个文档。
prev集合中的前一个文档。
contents文档目录。
index文档索引。
glossary文档中所用字词的术语表或解释。
copyright包含版权信息的文档。
chapter文档的章。
section文档的节。
subsection文档的子段。
appendix文档附录。
help帮助文档。
bookmark相关文档。
nofollow  Google 使用 "nofollow"，用于指定 Google 搜索引擎不要跟踪链接。
licence
tag
friend
```
#### 头部的标签/元素--head
```html
0.HTML head 元素：
<head>	定义了文档的信息
<title>	定义了文档的标题
<base>	定义了页面链接标签的默认链接地址
<link>	定义了一个文档和外部资源之间的关系
<meta>	定义了HTML文档中的元数据
<script>	定义了客户端的脚本文件
<style>	定义了HTML文档的样式文件

1.<base> 元素
<base> 标签描述了基本的链接地址/链接目标，该标签作为HTML文档中所有的链接标签的默认链接:
<head>
<base href="" target="_blank">
</head>

2.HTML <link> 元素
<link> 标签定义了文档与外部资源之间的关系。
<link> 标签通常用于链接到样式表:
<head>
<link rel="stylesheet" type="text/css" href="mystyle.css">
</head>

type 属性规定被链接文档的 MIME 类型。该属性最常见的 MIME 类型是 "text/css"，该类型描述样式表。

3.HTML <style> 元素
<style> 标签定义了HTML文档的样式文件引用地址.
在<style> 元素中你也可以直接添加样式来渲染 HTML 文档:
<head>
<style type="text/css">
body {background-color:yellow}
p {color:blue}
</style>
</head>

4.HTML <meta> 元素
meta标签描述了一些基本的元数据。
<meta> 标签提供了元数据.元数据也不显示在页面上，但会被浏览器解析。
META 元素通常用于指定网页的描述，关键词，文件的最后修改时间，作者，和其他元数据。
元数据可以使用于浏览器（如何显示内容或重新加载页面），搜索引擎（关键词），或其他Web服务。
<meta> 一般放置于 <head> 区域
<meta> 标签- 使用实例
为搜索引擎定义关键词:
<meta name="keywords" content="HTML, CSS, XML, XHTML, JavaScript">
为网页定义描述内容:
<meta name="description" content="免费 Web & 编程 教程">
定义网页作者:
<meta name="author" content="Runoob">
每30秒钟刷新当前页面:
<meta http-equiv="refresh" content="30">







```

>MIME (Multipurpose Internet Mail Extensions) 是描述消息内容类型的因特网标准，即多用途互联网邮件扩展类型。
>这是HTTP协议中用来定义文档性bai质及du格式的标准。IETF RFC 6838，对HTTP传输内容类型进行了全面定义。而 IANA(互联网号码分配机构)是负责管理所有标准MIME类型的官方机构。可以在这里)找到所有的标准MIME。
>服务器通过MIME告知响应内容类型，而浏览器则通过MIME类型来确定如何处理文档。
>MIME的格式：
type/subtype
这是一个两级的分类，第一级分类通常包含：text、image、audio、video、application、multi-part，分别代表普通文本、某种图像、音频文件、视频文件、应用数据、复合内容。
而二级类型则非常多，以下是一些常用的MIME：audio/wav,audio/webm,image/gif,image/svg+xml,application/json，分别代表wave音频流媒体文件、webn音频文件格式，gif图片，svg矢量图片，json格式。
[MIME 参考手册](https://www.w3school.com.cn/media/media_mimeref.asp)








#### 样式标签--style

#### 图像标签--img/map/area

#### 表格标签--table tr td

#### 列表标签--ol/ul>li,dl>dt-dd

#### 区块标签--div和span

#### 表单标签--form>input  HTML5新标签

#### 框架标签--iframe

#### 脚本标签--script


## 字符实体

## 统一资源定位器










