# 2. HTML

## 2.1 属性

 元素可以设置属性，一般描述于开始标签，键/值对形式，比如：name="value"，单双引号皆可  

 class属性为html元素定义一个或多个类名（classname）(类名从样式文件引入)  

id属性定义元素的唯一id  

style属性规定元素的行内样式（inline style）  

title属性描述了元素的额外信息 (作为工具条使用)  

> class 属性可以多用 class=" " （引号里面可以填入多个class属性）
> id 属性只能单独设置 id=" "（只能填写一个，多个无效）

属性与标签要有空格

有些标签没属性

下面是一些很重要又不常见的属性:

### 2.1.1 src属性

- src属性设置其来源，可以是相对或者是绝对路径
- 在Audio、Video标签中的src是设置或返回音频/视频元素的当前来源
- img标签的 src 属性是必需的。它规定图像的 URL
- input的src表示作为提交按钮使用的图像的 URL
- script标签的src表示规定外部脚本文件的 URL
- src 用于替换当前内容

**当浏览器解析到src ，会暂停其他资源的下载和处理，直到将该资源加载或执行完毕**

### 2.1.2 href属性

- href 属性的值可以是任何有效文档的相对或绝对URL，或者是锚URL指向页面中的锚（href="#top"）
- a标签的 href 属性用于指定超链接目标的 URL
- href 用于在当前文档和引用资源之间确立联系
- 当点击带有href属性的标签是才会下载文件或者跳转到指定的URL，解析html时无影响

### 2.1.3 defer属性(只有ie支持)

- defer 属性规定是否对脚本执行进行延迟，直到页面加载为止
- 如果您的脚本不会改变文档的内容，可将 defer 属性加入到 script 标签中，以便加快处理文档的速度
- defer属性主要用于加载不会改变文档的script，如果你的script在文档加载的时候需要通过js代码对DOM操作那么请不要用defer
- defer会延迟加载，以便可以快速加载文档而不会出现阻塞，优化用户体验
- 对于defer的兼容，原则上只有ie支持，至于各大厂家最新版本是否对其待验证

### 2.1.4 async(html5新增)

- async 属性规定一旦脚本可用，则会异步执行
- async异步加载的script可能会乱序执行，所以加载的script尽量不要包含依赖，在加载完成后会立即执行
- 如果 async="async"：脚本相对于页面的其余部分异步地执行（当页面继续进行解析时，脚本将被执行）
- 如果不使用 async 且 defer="defer"：脚本将在页面完成解析时执行
- 如果既不使用 async 也不使用 defer：在浏览器继续解析页面之前，立即读取并执行脚本
- 当script同时有async和defer属性时，执行效果和async一致
- async与defer都只支持外部加载的script

### 2.1.5 label的for属性

- label的for属性的值与其关联控件的id一样，这样当点击label时就会关联到控件

```js label的for属性
显式的联系：
<label for="SSN">Social Security Number:</label>
<input type="text" name="SocSecNum" id="SSN" />

隐式的联系：
<label>Date of Birth: <input type="text" name="DofB" /></label>
```

- 显式联系，通过for属性与控件id对应
- 隐式联系，直接把关联的控件包含在label双标签内，无需for属性


## 2.2 标签

严格讲，元素大于标签，元素以开始标签起始至结束标签终止。

### 2.2.1文本标签
```html
<h1>-<h6>定义标题

<hr>创建水平线
--color 水平线颜色
--with 设置宽度（固定和%值）%比一定有参照物（当前 hr 的父元素）
--size 设置粗细
--noshade（值为自己）除去阴影

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
<address>定义地址,定义文档作者的联系信息
<bdo>定义文字方向
<blockquote>定义长的引用
<q>定义短的引用语
<cite>定义引用、引证
<dfn>定义一个定义项目。
```
### 2.2.2链接标签--a

anchor 锚

href（hypertext reference 超级链接地址）

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

rel属性值：

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
### 2.2.3头部的标签--head

#### 0.HTML head 元素：
```html
<head>	定义了文档的信息
<title>	定义了文档的标题
<base>	定义了页面链接标签的默认链接地址
<link>	定义了一个文档和外部资源之间的关系
<meta>	定义了HTML文档中的元数据
<script>	定义了客户端的脚本文件
<style>	定义了HTML文档的样式文件
```

#### 1.HTML base 元素
```html
<base> 标签描述了基本的链接地址/链接目标，该标签作为HTML文档中所有的链接标签的默认链接:

<head>
<base href="" target="_blank">
</head>
```

#### 2.HTML link元素
```html
<link> 标签定义了文档与外部资源之间的关系。

<link> 标签通常用于链接到样式表:
<head>
<link rel="stylesheet" type="text/css" href="mystyle.css">
</head>

type 属性规定被链接文档的 MIME 类型。
该属性最常见的 MIME 类型是 "text/css"，该类型描述样式表。
```

>MIME (Multipurpose Internet Mail Extensions) 是描述消息内容类型的因特网标准，即多用途互联网邮件扩展类型。

>这是HTTP协议中用来定义文档性bai质及du格式的标准。IETF RFC 6838，对HTTP传输内容类型进行了全面定义。而 IANA(互联网号码分配机构)是负责管理所有标准MIME类型的官方机构。可以在这里)找到所有的标准MIME。

>服务器通过MIME告知响应内容类型，而浏览器则通过MIME类型来确定如何处理文档。

>MIME的格式：  
type/subtype  
这是一个两级的分类，第一级分类通常包含：text、image、audio、video、application、multi-part，分别代表普通文本、某种图像、音频文件、视频文件、应用数据、复合内容。  
而二级类型则非常多，以下是一些常用的MIME：audio/wav,audio/webm,image/gif,image/svg+xml,application/json，分别代表wave音频流媒体文件、webn音频文件格式，gif图片，svg矢量图片，json格式。  
[MIME 参考手册](https://www.w3school.com.cn/media/media_mimeref.asp)

#### 3.HTML style元素
```html
style 标签定义了HTML文档的样式文件引用地址.

在style 元素中你也可以直接添加样式来渲染 html 文档:

<head>
<style type="text/css">
body {background-color:yellow}
p {color:blue}
</style>
</head>
```

#### 4.HTML meta元素
```html
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

##### 必选属性content

- 定义与 http-equiv 或 name 属性相关的元信息
- content 属性提供了名称/值对中的值。该值可以是任何有效的字符串
- content 属性始终要和 name 属性或 http-equiv 属性一起使用
- 但是所有服务器都至少要发送一个：content-type:text/html。这将告诉浏览器准备接受一个 HTML 文档

```html
<!-- 网页作者 -->
<meta name="author" content="开源技术团队"/>
<!-- 网页地址 -->
<meta name="website" content="https://baidu.com"/>
<!-- 网页版权信息 -->
 <meta name="copyright" content="2018-2019 demo.com"/>
<!-- 网页关键字, 用于SEO -->
<meta name="keywords" content="meta,html"/>
<!-- 网页描述 -->
<meta name="description" content="网页描述"/>
<!-- 搜索引擎索引方式，一般为all，不用深究 -->
<meta name="robots" content="all" />
<!-- 移动端常用视口设置 -->
<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0, user-scalable=no"/>
<!-- 
  viewport参数详解：
  width：宽度（数值 / device-width）（默认为980 像素）
  height：高度（数值 / device-height）
  initial-scale：初始的缩放比例 （范围从>0 到10）
  minimum-scale：允许用户缩放到的最小比例
  maximum-scale：允许用户缩放到的最大比例
  user-scalable：用户是否可以手动缩 (no,yes)
 -->
```

##### 可选属性name

- name提供名称，与把content属性关联到一个名称
- 通常情况下，您可以自由使用对自己和源文档的读者来说富有意义的名称
- "keywords" 是一个经常被用到的名称。它为文档定义了一组关键字。某些搜索引擎在遇到这些关键字时，会用这些关键字对文档进行分类

##### 可选属性http-equiv

顾名思义，相当于http的文件头作用，它可以向浏览器传回一些有用的信息，以帮助正确和精确地显示网页内容，与之对应的属性值为content，content中的内容其实就是各个参数的变量值。 

- http-equiv 属性为名称/值对提供了名称
- 指示服务器在发送实际的文档之前先在要传送给浏览器的 MIME 文档头部包含名称/值对
- 当服务器向浏览器发送文档时，会先发送许多名称/值对，服务器将把名称/值对添加到发送给浏览器的内容头部
- 只有浏览器可以接受这些附加的头部字段，并能以适当的方式使用它们时，这些字段才有意义

```html http-equiv
<!-- expires指定网页的过期时间。一旦网页过期，必须从服务器上下载。 -->
<meta http-equiv="expires" content="Fri, 12 Jan 2020 18:18:18 GMT"/>
<!-- 等待一定的时间刷新或跳转到其他url。下面1表示1秒 -->
<meta http-equiv="refresh" content="1; url=https://www.baidu.com"/>
<!-- 禁止浏览器从本地缓存中读取网页，即浏览器一旦离开网页在无法连接网络的情况下就无法访问到页面。 -->
<meta http-equiv="pragma" content="no-cache"/>
<!-- 也是设置cookie的一种方式，并且可以指定过期时间 -->
<meta http-equiv="set-cookie" content="name=value expires=Fri, 12 Jan 2001 18:18:18 GMT,path=/"/>
<!-- 使用浏览器版本 -->
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<!-- 针对WebApp全屏模式，隐藏状态栏/设置状态栏颜色，content的值为default | black | black-translucent -->
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
```

##### charset字符集(html5新增)

- 定义文档的字符编码

```html charset字符集
<!-- 定义网页文档的字符集 -->
<meta charset="utf-8" />
```

##### scheme(html5不支持)

- 定义用于翻译 content 属性值的格式
- 此方案应该在由 head 标签的 profile 属性指定的概况文件中进行了定义

##### 总结

meta主要定义此文档的一些信息，比如关键字，网站描述，服务器发送文档前发送给浏览器的MIME类型支持，以及网站信息，和部分http设置


### 2.2.4样式标签--style

### 2.2.5图像标签--img/map/area

jpg(jpeg)、png、gif、bmp

不能使用的 psd、ai

img=>image 图片 单边标签

---

src=>source 图片资源

alt 属性 alternate 替代无图片时的文字

title 当鼠标放在图片上面时，显示的文字

width 图片宽度

height 图片高度

最好不要同时给图片设置高度和宽度，否则会拉伸图片

### 2.2.6表格标签--table tr th td

table 表示表格开始结束

tr 表示表格行

th 表格标题单元格，内容会加粗、居中显示

td 表示表格单元格、一行有多少个单元格

只有 th、td 标签才能存放内容



```html
<table>
  <tr>
    <th>Month</th>
    <th>Savings</th>
  </tr>
  <tr>
    <td>January</td>
    <td>$100</td>
  </tr>
  <tr>
    <td>February</td>
    <td>$80</td>
  </tr>
</table>

```

<table>
  <tr>
    <th>Month</th>
    <th>Savings</th>
  </tr>
  <tr>
    <td>January</td>
    <td>$100</td>
  </tr>
  <tr>
    <td>February</td>
    <td>$80</td>
  </tr>
</table>

**table 常用属性**

border 给表格设置边框 默认 0，单位像素可不写

width 表格宽度，固定值和%

height 高度，一般不用，由内容决定

background 背景图片

bgcolor 背景颜色

align 表格水平方向对齐方式 left 默认、right、center

cellpadding 单元格内容到边框距离，内填充

cellspacing 单元格与单元格距离

**tr 属性**

align 水平对齐方式 left、center、right

valign 设置行里内容垂直对齐方式，top 顶部对齐、middle 居中对齐（默认）、bottom 底部对齐

bgcolor 背景色

height 行高

width 单元格宽度

rowspan 跨行合并，表示相当于几个格，合并后要删除 n-1 个格子

colspan 跨列合并，表示相当于几个格，合并后要删除 n-1 个格子


### 2.2.7列表标签--ol/ul>li,dl>dt-dd

**1.无序列表**

ul（unordered list）无序列表 前面默认小圆点

li（list item）列表项

>type 表示前面符号类型 取值 disc 默认实心圆点、circle 空心圆、square 实心小方块

```html
<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
```
**2.有序列表**

ol（ordered list） 有序列表 1.、2.、3.、、、

li（list item）列表项

>type属性 设置列表前面序号 默认1, 可取1、a、A、i（小罗马）、I（大罗马数字）

>start属性 设置内容开始序号

**3.定义列表**

dl（defintion list）定义列表

dt（defintion title）定义标题

dd（defintion description）定义描述

>注意：dt 与 dd 只能出现在 dl 里

### 2.2.8区块标签--div和span

div 块级元素无实际意义--主要通过 css 修饰

span 行内标签无实际意义--主要通过 css 修饰

块级元素独占一行，不能与其他元素并列能接收宽高，如果不设置默认为父亲的 100%

行内元素与其他行内元素并排，不能设置宽高。默认的宽度就是文字宽度

```
块级元素：p、h1-h6(标题) 排版标签一般都是块级元素
行内元素：b、i、u、font、sup、sub 文本标签一般为行内元素
```

### 2.2.9表单标签--form>input  HTML5新标签

用于收集用户输入

form 标签和表单控件组成一个表单

#### form 属性

action 将表单中收集的用户数据提交给表单处理程序（地址），这个属性可以不写，#如果不写则将表单数据提交给当前页面处理

method 表单数据提交方式

get 默认值，以 get 提交的数据会显示在地址栏中--地址栏显示=>表单处理程序？name1=数据 1&name2=数据 2 以此类推
post 方式，不会显示在地址栏中，直接发送给处理程序
优缺点：get 方式不安全，get 只能提交少了数据；post 相对安全，可提交大量数据

#### 表单控件标签

**input 行内元素**

name 提交数据名称

value 提交数据的值

type="text"单行文本框

type="password"单行密码框

type="radio"单选按钮--同 name 只能选一个，相互排斥，checked 属性表示选中，值为本身或不写

type="checkbox"多选按钮，name 属性要一样,checked 选择

type="submit" 提交按钮

type="reset" 重置按钮

type="image" 图片按钮，src 图片地址，具有表单提交功能，会提交点击时的坐标属性

type="file" 文件上传，name

type="button" 普通按钮没什么重要功能，配合 js 使用

type="hidden" 隐藏域里面的表单控件在浏览器看不见 但是也能提交数据处理，php 常用

**button 标签实现提交**
```html
<button type="submit">提交</button>
<button type="reset">提交</button>
```

<button type="submit">提交</button>
<button type="reset">提交</button>

**标签中通用属性**

title 鼠标移上显示文字信息

class 类名，同类名属性同类，多用与 css 设置样式

id 属性必须唯一 一般多用于 js 中

style 样式属性，多设置 css 样式

**下拉列表**

select 列表，option 选项，select 选中项
```
<select name="名称">
  <option value="值" select="select"></option>
  <option>阿巴阿巴</option>
  <option>哔哩哔哩</option>
</select>
```
<select name="名称">
  <option value="值" select="select"></option>
  <option>阿巴阿巴</option>
  <option>哔哩哔哩</option>
</select>

#文本域
textarea 显示文本内容

### 2.2.10框架标签--iframe

框架网页由框架集和框架页组成

frameset 框架集

frame 框架页--小窗口--单边标签

使用框架页面 frameset 时它就可以替代 body 功能

**frameset 属性**

rows：将一个网页分割为上下型

rows="180"上窗口占 180px

rows="180,100,*"上窗口占 180px,中窗口 100px，其他给下

cols：将一个网页分割为左右型--同上设置

只有框架集才能分割

**frame 属性**
src 小窗口显示网页的地址

name 小窗口名称--用于跳转显示，a 标签的 target 跳转显示内容

noresize 不能调整小窗口大小

frameborder 是否显示框架周围边框线，0 默认不显示，1 显示

**浮动框架**

iframe 这一对可放在 body 里面

src 放入页面地址

width 浮动框架宽度

height 浮动框架高度

name 浮动框架名称

用 a 标签的 target 属性跳转到 name 对应的网页


### 2.2.11脚本标签--script

**script标签**

下面的脚本会向浏览器输出"Hello World!"：
```html
<script> document.write("Hello World!"); </script>
```


**noscript标签**

noscript元素可包含普通 HTML 页面的 body 元素中能够找到的所有元素。

只有在浏览器不支持脚本或者禁用脚本时，才会显示noscript元素中的内容：
```html
<script> document.write("Hello World!") </script> 
<noscript>抱歉，你的浏览器不支持 JavaScript!</noscript>
```

## 2.3计算机单位与进制

### 2.3.1单位

- 1bit（比特）2 种状态
- 1byte（字节）=8bit 256 种状态
- 1kb=1024 字节
- MB
- GM
- T 同上换算

### 2.3.2进制

- 二进制 0、1
- 八进制 0-7
- 十进制 0-9
- 十六进制 0-15（0-9，A-F）

#### 进制转换

- 其他转十进制，按权展开
- 十转二，除 2 取余后倒排

### 2.3.3字符编码

- 计算机只能识别二进制
- ASCII 编码，美国标准信息交换码，使用 1 字节存储字符 256 个字符
- GB2312 中国标准化局 1980 制度，2 字节存储字符共可存储 65536 个字符，只存了 6000 多汉字
- GBK 2 字节存储，共存储 2w 多汉字
- Unicode 全世界编码集合，100+w 字符，每个字符 4 个字节表示可表示 42 亿，比较浪费资源
- UTF-8 编码对 Unicode 改进，不同字符占用不同字节

### 2.3.4 head 标签

- title 标签主要用于网页设置标题，浏览器最上方窗口显示文字信息
- `<meta charset="utf-8">`使用 utf-8 编码，用于告诉浏览器用什么编码来解析，使之不出现乱码，浏览器中文默认使用 gbk 解析
- 记事本默认使用 gbk 编码
- 代码编写环境和解析环境一致

### 2.3.5 font 标签

- color 属性设置文本颜色
- 英文颜色：red、blue
- 十进制：rgb（255，255，255）
- 十六进制：#ffffff
- rgb 红绿蓝三基色
- 每个基色使用 1 个字节表示
- 共可表示 256\*256\*256=1677w 种颜色
- 最好使用十六进制表示颜色，兼容性最好

## 2.4字符实体

HTML 中的预留字符必须被替换为字符实体。

一些在键盘上找不到的字符也可以使用字符实体来替换。

```
空格--&nbsp; 
>--&gt; 
<--&lt; 
&--&amp; 
￥--&yen; 
版权--&copy; 
注册--&reg; 
x--&times; 
÷--&divide;
"--&quot;
'&apos; (IE不支持)
```
```
音标符	字符    Construct	输出结果 
  ̀    	a	    a&#768;	    à
  ́	    a	    a&#769;	    á
̂	    a	    a&#770;	    â
  ̃	    a	    a&#771;	    ã
  ̀	    O	    O&#768;	    Ò
  ́	    O	    O&#769;	    Ó
̂	    O	    O&#770;	    Ô
  ̃	    O	    O&#771;	    Õ
```

## 2.5统一资源定位器 URL

Uniform Resource Locators

### 2.5.1 语法规则:
```

scheme://host.domain:port/path/filename
说明:
• scheme - 定义因特网服务的类型。最常见的类型是 http
• host - 定义域主机（http 的默认主机是 www）
• domain - 定义因特网域名，比如 runoob.com
• :port - 定义主机上的端口号（http 的默认端口号是 80）
• path - 定义服务器上的路径（如果省略，则文档必须位于网站的根目录中）。
• filename - 定义文档/资源的名称
```

### 2.5.2 URL 协议：
```
Scheme	访问	            用于...
http	超文本传输协议	      以 http:// 开头的普通网页。不加密。
https	安全超文本传输协议	   安全网页，加密所有信息交换。
ftp	    文件传输协议	      用于将文件下载或上传至网站。
file	您计算机上的文件。
```

### 2.5.3 URL 字符编码

URL 只能使用 ASCII 字符集 来通过因特网进行发送。

如果包含 ASCII 集合之外的字符，URL 必须转换为有效的 ASCII 格式：

1. URL 编码使用 "%" 其后跟随两位的十六进制数来替换非 ASCII 字符。

1. URL 不能包含空格。URL 编码通常使用 + 来替换空格。

URL 编码实例
```
字符	    URL编码
€	    %80
£	    %A3
©	    %A9
®	    %AE
À	    %C0
Á	    %C1
Â	    %C2
Ã	    %C3
Ä	    %C4
Å	    %C5
```