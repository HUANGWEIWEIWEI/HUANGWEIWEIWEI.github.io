# 2.CSS基础

## 书写位置

### 1.行内式（内联样式）
```css
/* 直接写到标签内当作标签属性 */

<标签名 style="属性1:属性值1; 属性2:属性值2; 属性3:属性值3;"> 内容 </标签名>
```

### 2.嵌入式（内部样式表）
```css
<head>
<style type="text/CSS">
    选择器 {属性1:属性值1; 属性2:属性值2; 属性3:属性值3;}
</style>
</head>

/* 嵌入到 html 代码中单独一块 */
/* type="text/CSS" 在html5 可不写，一般放 head 里 */
```

### 3.外链式（外部样式表）
```
1.link标签引入
<head>
  <link href="CSS文件的路径"  rel="stylesheet" />
</head>

注意： link 是个单标签哦!!!

link标签需要放在head头部标签中，并且必须指定link标签的3个属性：
href：定义所链接外部样式表文件的URL，可以是相对路径，也可以是绝对路径。
type：定义所链接文档的类型，在这里需要指定为“text/CSS”，表示链接的外部文件为CSS样式表。
rel：定义当前文档与被链接文档之间的关系，在这里需要指定为“stylesheet”，表示被链接的文档是一个样式表文件。

2.@import url(css 文件目录)
```

link和@import的区别:
```
本质上，这两种方式都是为了加载css文件，但还是存在细微的差别。

差别1：老祖宗的差别，link属于XHTML标签，而@import完全是css提供的一种方式。

　　　　link标签除了可以加载css外，还可以做很多其他的事情，比如定义RSS，定义rel连接属性等，@import只能加载CSS。

差别2：加载顺序的差别：当一个页面被夹在的时候（就是被浏览者浏览的时候），link引用的CSS会同时被加载，而@import引用的CSS会等到页面全部被下载完再加载。所以有时候浏览@import加载CSS的页面时会没有样式（就是闪烁），网速慢的时候还挺明显。

差别3：兼容性的差别。由于@import是CSS2.1提出的所以老的浏览器不支持，@import只有在IE5以上的才能识别，而link标签无此问题，完全兼容。

差别4：使用dom控制样式时的差别。当时用JavaScript控制dom去改变样式的时候，只能使用link标签，因为@import不是dom可以控制的（不支持）。

差别5（不推荐）：@import可以在css中再次引入其他样式表，比如创建一个主样式表，在主样式表中再引入其他的样式表，如：

　　@import “sub1.css”; 
　　@import “sub2.css”; 
　　sub1.css 
　　———————- 
　　p {color:red;} 
　　sub2.css 
　　———————- 
　　.myclass {color:blue} 

这样有利于修改和扩展。

但是：这样做有一个缺点，会对网站服务器产生过多的HTTP请求，以前是一个文件，而现在确实两个或更多的文件了，服务器压力增大，浏览量大的网站还是谨慎使用。

@import的书写方式

　　@import 'style.css' //Windows IE4/ NS4, Mac OS X IE5, Macintosh IE4/IE5/NS4不识别 
　　@import "style.css" //Windows IE4/ NS4, Macintosh IE4/NS4不识别 
　　@import url(style.css) //Windows NS4, Macintosh NS4不识别 
　　@import url('style.css') //Windows NS4, Mac OS X IE5, Macintosh IE4/IE5/NS4不识别 
　　@import url("style.css") //Windows NS4, Macintosh NS4不识别 

由上分析知道，@import url(style.css)和@import url（"style.css"）是最优的选择，兼容的浏览器最多。从字节优化的角度来看@import url(style.css)最值得推荐。
```

### 多重样式优先级

（内联样式）Inline style > （内部样式）Internal style sheet >（外部样式）External style sheet > 浏览器默认样式


## 书写语法

### 实例:  

![](https://gitee.com/hello_hww/img/raw/master/img1/20200703233115.png)

例如
```
p {color:red;text-align:center;}
```
CSS声明总是以分号(;)结束，声明总以大括号({})括起来  
为了让CSS可读性更强，你可以每行只描述一个属性  
### 注释：
```css
/*这是个注释*/
p
{
text-align:center;
/*这是另一个注释*/
color:black;
font-family:arial;
}
```
拓展：
```
1.多行注释
星号要一列对齐，星号与内容之间必须保留一个空格。

/**
 * Sometimes you need to include optional context for the entire component. Do that up here if it's important enough.
 */

2.规则声明块内注释
使用 // 注释，// 后面加上一个空格，注释独立一行。

.foo{
    border: 0;
    // ....
}

3.文件注释
文件顶部必须包含文件注释，用 @name 标识文件说明。星号要一列对齐，星号与内容之间必须保留一个空格，标识符冒号与内容之间必须保留一个空格。

/**
 * @name: 文件名或模块名
 * @description: 文件或模块描述
 * @author: author-name(mail-name@domain.com)
 *          author-name2(mail-name2@domain.com)
 * @update: 2015-04-29 00:02
 */
```

## 选择器

### 1.基本选择器
```
*{属性：值}，      通用选择器/通配符选择器，*表示全部
标签名{属性：值}      标签选择器，（如：body,div,p,ul,li）
.class名{}       类选择器，使用.类名来选择；p .class 表示层层选择到指定为 class 类的标签
#id名 {}      id选择器，使用#id 来选择；id 唯一，给特定标签设置样式（如：id="name",id="name_txt"）
```

### 2.复合选择器
```
"," 多元素选择器：p,h1,h2 {属性：值} 同时匹配多个标签或类、id 等，多个选择器之间用逗号隔开
" " 后代选择器：#id p {属性;值} 匹配所有属于#id 下的全部 p 标签，父子带之间用空格隔开
">" 子元素选择器：.class>p {属性：值} 匹配.class 下一层中全部的孩子，不包括孙子及以下
"+" 相邻元素选择器：div1+div2 {属性：值} 匹配同级紧跟 div1 后的元素 div2，之间用+号连接，条件同级元素，之间没有其他元素，且 div2 在 div1 下面
```

### 3.伪类选择器
```
根据 a 或者其他的超级链接不同状态设置用:状态名 设置
input:focus,鼠标焦点
div:target目标内容
:root根元素伪类选择器
div:empty空内容的元素
:link 未访问过的链接的样式
:visited 已被访问过的链接的样式
:hover 当鼠标悬浮元素上方时，显示的样式
:active 鼠标放在元素上面，点击时的样式，即点击瞬间的样式
一般超级链接 正常与访问过的状态一样，鼠标放上时设置另一个颜色，激活状态一般不设置时间太短了
```
### 4.属性选择器
```
属性选择器通过属性名和属性值来匹配元素
[attr] 匹配所有具有attr属性的元素 eg：h1[align][size]{}
[attr="val"] 匹配所有attr属性值为 val 的元素 eg：h1[align="center"] {}
[attr^="val"] 匹配元素中attr属性以指定值开头的所有元素 eg：font[color^="#ff"]
[attr$="val"] 匹配元素中attr属性以指定值结尾的所有元素 eg：font[color$="00"]
[attr*="val"] 匹配元素中attr属性中包含指定值的所有元素 eg：font[color*="00"]
[attr~="val"] 匹配元素中attr属性中指定值为一个整体（一个单词独立整体）的所有元素 eg：font[color~="00"]
[attr|="val"] 匹配元素中attr属性以指定值开头（以及值后跟-）所有元素 eg：font[color|="#ff"]
```
### 5.结构选择器
```
div span p{}---div的后代span的后代p,后代用空格
div>span{}---div的孩子span，父子级用>
div h1~h2{}---div的后代中h1的兄弟h2以及之后的
div h1+h2{}---div的后代中紧挨h1的兄弟h2
```
### 6.伪元素选择器
```
::first-line 用于向文本的首行设置特殊样式，只能用于块级元素。
::first-letter 用于向文本的首字母设置特殊样式。只能用于块级元素。
::after 可以在元素的内容之后插入新内容。
::before 可在元素的内容前面插入新内容。默认地，这个伪元素是行内元素，可使用属性 display 改变这一点。
::selection 可用来匹配突出显示的文本。浏览器默认情况下，选择网站文本是深蓝背景白色字体。仅接受两个属性，分别是background和color。
::backdrop 控制需要视觉聚焦的元素后面的背景元素样式
```


### 选择器优先级

!important>内联>id>class=属性=伪类>标签=伪元素>通配符（*）>继承得到的属性>浏览器默认属性
```
CSS优先级：是由四个级别和各级别的出现次数决定的。
四个级别分别为：行内选择符、ID选择符、类别选择符、元素选择符。

优先级的算法：

每个规则对应一个初始"四位数"：0、0、0、0
若是 行内选择符，则加1、0、0、0
若是 ID选择符，则加0、1、0、0
若是 类选择符/伪类选择符，则分别加0、0、1、0
若是 元素选择符，则分别加0、0、0、1

算法：将每条规则中，选择符对应的数相加后得到的”四位数“，从左到右进行比较，大的优先级越高。

需注意的：
!important的优先级是最高的，但出现冲突时则需比较”四位数“;
优先级相同时，则采用就近原则，选择最后出现的样式;
继承得来的属性，其优先级最低;
!important > 行内样式>ID选择器 > 类选择器 > 标签 > 通配符 > 继承 > 浏览器默认属性
*css选择器使用强烈建议采用低权重原则，利于充分发挥css的继承性，复用性，模块化、组件化。

有人说外部样式<内部样式,其实不然，其实外部样式=内部样式，谁在前面定义谁就被覆盖

class = 属性 = 伪类：例如.className的优先级和[class='className']和:hover的优先级是一样的，甚至.className的优先级和[id='idName']和:hover的优先级也是一样

空格和>的优先级是一样的，例如body b和body>b是一样的优先级

~和+的优先级是一样的，例如body~b和body+b是一样的优先级

伪元素的优先级和标签选择器的优先级一样，但是我们往往会遇到一些问题，例如：

::selection{
    color: red;
}
div{
    color:black!important;
}

被选中的文字还是红色的，不会被黑色样式覆盖，其原因是这里的black!important是作用在了::selection的父元素而不是直接作用在::selection上，

而我们调用伪元素的时候必须要写上伪元素不能像其他元素一样只写它的class或者id或者[attr='~~~'],所以要判断关于伪元素的优先级，都是看它前面的css选择器的优先级
```

## 属性和属性值

CSS 属性众多，  
在 W3C CSS 2.0 版本中共有 122 个标准属性（https://www.w3.org/TR/CSS2/propidx.html），  
在 W3C CSS 2.1 版本中共有 115 个标准属性（https://www.w3.org/TR/CSS21/propidx.html），其中删除了 CSS2.0 版本中 7 个属性：font-size-adjust、font-stretch、marker-offset、marks、page、size 和 text-shadow。  
在 W3C CSS 3.0 版本中又新增加了 20 多个属性（https://www.w3.org/Style/CSS/current-work#CSS3）。

CSS 属性被分为不同的类型，如字体属性、文本属性、边框属性、边距属性、布局属性、定位属性、打印属性等。  
边学习边记忆，在实践中逐个突破。

### 字体/文本/颜色/链接/背景

#### 字体属性font

1.大小 font-size:x-large;(特大) xx-small;(极小) 一般中文用不到，只要用数值就可以，单位：PX、PD  

2.样式 font-style:oblique;(偏斜体) italic;(斜体) normal;(正常)  

3.粗细 font-weight:bold;(粗体) lighter;(细体) normal;(正常)  

4.变体 font-variant: small-caps;(小型大写字母) normal;(正常)  

5.font-size-adjust：不太常用属性，用来设置英文字体的大小写字母之间的高度比例的  

6.字体 font-family
"Courier New", Courier, monospace, "Times New Roman",Times, serif, Arial, Helvetica, sans-serif, Verdana  

7.行高 line-height:normal;(正常) 单位：PX、PD、EM

font：简写形式
font-family是必选的，而且一定要在最后；  
font-size如果有，必须出现在倒数第二个, 后面可以用/跟一个line-height的设置
剩下的font-style, font-weight, font-variant就无所谓了，前面任意排列
font还支持一些类似caption, icon等快捷描述

#### 文本属性text

1.对齐 text-align:left;right;center;justify;(两端对齐)inherit;(继承父元素)  

2.修饰 text-decoration:none;(默认，标准）underline;(下划线) overline;(上划线) line-through;(删除线) blink;(闪烁)inherit;(继承父元素)
>设置颜色、位置、样式。分别对应了text-decoration-color，text-decoration-line，text-decoration-style
位置可以为：上划线、下划线、删除线、闪烁和无
样式可以为：实线(solid)、双实线(double)、dotted(点虚线)、dashed(虚线)、wavy(波浪线)
注意：父亲会影响儿子，且儿子无法取消  

3.大小写 text-transform: capitalize;(首字母大写) uppercase;(大写) lowercase;(小写) none;(无)  

4.缩进 text-indent:50px;  

5.阴影 text-shadow：阴影设置，可以设置阴影的颜色，相对原字体的位置，以及模糊半径  

6.text-justiy：在text-align被设置为justiy的时候用来控制是在单词之间加空格(英文)，还是在字母之间加空格(中文)

7.text-overflow：文本溢出的截断，可以用'...'来代替，或者用自己定义的字符串来代替超出字符  
需要配合 overflow: hidden 的属性来控制, 否则还是会超出边距显示

8.white-space：控制空格符，"\t", "\n"以及显示的时候是否折行显示的属性  
normal/nowrap（不换行）/pre（保留）/pre-wrap/pre-line

9.word-spacing：normal;数值;  
词和词之间的距离，默认值是由字体来定的，自定义可以定义为长度/百分比，对于中文来讲，也是空格

10.letter-spacing：字母和字母之间的距离，默认值是由字体来定的，可以自定义为长度单位

11.word-break：文字换行逻辑
normal：默认值，英文空格处换行，中文任意字符换行；
break-all：都采用中文的方式任意换行；
keep-all：都采用英文的方式，中文也要遇到了空格或者回车等特殊符号才换行
break-word：跟normal类似，不过即使min_width(即单个单词的长度)大于容器的width的时候，会换行，而不是超出

12.word-wrap/overflow-wrap：normal/break-word。word-wrap是overflow-wrap的别名。逻辑跟如上word-break的break-word的逻辑类似，要溢出的时候是否换行

13.vertical-align: 上下对齐方式
只针对display的值为inline和table-cell的元素有效，比如span，img，input，td等元素，对于其他块级元素都不生效
取值范围为枚举/长度/百分比
枚举取值为：baseline/super/sub/top/bottom/middle/text-top/text-bottom
垂直对齐vertical-align:baseline;(基线) sub;(下标) super;(下标) top;(父元素顶部) text-top;(文字顶部) middle;(父元素中部)bottom;(父元素底部) text-bottom;(文字底部)

#### 颜色属性color

color：背景颜色，关于颜色的值一共有三种，枚举值，#xxx, rgb, hsl，  
opacity：不透明度，即设置颜色的透明的程度，0为透明，1为不透明，单独的属性设置和用color的rgba函数来设置都一样  
```
颜色值:
十六进制颜色 ＃RRGGBB 例如color:#ff0000  
RGB颜色 RGB（0,0,255），RGB（0％，0％，100％）。例如color:rgb(255,0,0);
RGBA颜色 RGBA（红，绿，蓝，alpha） 例如color:rgba(255,0,0,0.5);
HSL色彩  HSL（色像值0到360，饱和度百分比值，明度百分比值）。  例如color:hsl(120,65%,75%);
HSLA颜色  color:hsla(120,65%,75%,0.3);
预定义/跨浏览器的颜色名称 [预定义颜色名称表](https://www.runoob.com/cssref/css-colornames.html)
```
#### 链接属性a

a /*所有超链接*/
四个链接状态是： 
a:link - 正常，未访问过的链接
a:visited - 用户已访问过的链接
a:hover - 当用户鼠标放在链接上时
a:active - 链接被点击的那一刻

```css
a:link {color:#000000;text-decoration:none;background-color:#B2FF99;} /* 未访问链接*/ 
a:visited {color:#00FF00;text-decoration:none;background-color:#FFFF85;} /* 已访问链接 */ 
a:hover {color:#FF00FF;text-decoration:underline;background-color:#FF704D;} /* 鼠标移动到链接上 */ 
a:active {color:#0000FF;text-decoration:underline;background-color:#FF704D;} /* 鼠标点击时 */
```



#### 背景属性background

1色彩background-color:#FFFFFF;  
2图片background-image:url('233.jpg');  
3重复background-repeat:no-repeat;  
4滚动background-attachment:fixed;(固定) scroll;(滚动，默认)  
5位置background-position:left(水平) top(垂直);  
简写方法 background:#000url(..) repeat fixed left top;  



### 大小/盒子

#### 大小属性

width/height：包含了width，max-width，min-width几个配套的属性，值为长度/百分比；同时还可以设置一些属性值，用于表达width用于内容级别，还是border级别等；  
max-width/max-height：最大宽度/高度  
min-width/min-height：最小宽度/高度  

#### 盒子模型类属性  

border：简写形式，包含了粗细、样式、颜色。  
border-width：可以有1~4个长度值。1个代表4个边；2个的话代表横边和纵边；3个代表上，左&右，下；4个代表上，右，下，左  
border-style：可以有1~4个枚举值。跟text-decoration类似，可以有实线solid、双实线double、虚线dashed、点虚线dotted、波浪线等，还可以有立体内凸groove、浮雕ridge、陷入inset、突出outset等效果；  
border-color：可以有1~4个颜色值。  

border-top : 1px solid #6699cc; /*上框线*/    
border-bottom : 1px solid #6699cc; /*下框线*/  
border-left : 1px solid #6699cc; /*左框线*/  
border-right : 1px solid #6699cc; /*右框线*/  

border-image：可以用来设置边框的图片，用来显示一些比较漂亮的边框，图片选择哪些部分来作为边框请参考这里
border-radius：用来设置圆角的

box-shadow：边框的模糊划效果，跟text-shadow是类似的效果，可以设置阴影相对位置/阴影模糊半径/扩散半径/阴影颜色；

outline：outline跟border类似, 是画边框的，
跟border的区别: 1. 不占盒子模型宽度; 2. 可能不是矩形;
准确来说, outline应该不算是盒子模型的属性
跟border类似有, outline-style, outline-color, outline-width三个子属性


margin/padding：外边距，内边距的属性，可以有1~4个值，不同个数的值代表函数同边；
margin-top/margin-bottom/margin-left/margin-right：对应的控制4个边的外边距的属性
padding-top/padding-bottom/padding-left/padding-right：对应的控制4个边的内边距的属性

### 布局

#### 基础定位类  

float:浮动属性   
left;	元素向左浮动。  
right;	元素向右浮动。  
none;	默认值。元素不浮动，并会显示在其在文本中出现的位置。  
inherit;

clear:清除浮动
left;	在左侧不允许浮动元素。
right;	在右侧不允许浮动元素。
both;	在左右两侧均不允许浮动元素。
none;	默认值。允许浮动元素出现在两侧。
inherit;	规定应该从父元素继承 clear 属性的值。

position定位:   
static;(默认，静态定位，遵循正常文档流)  
relative;(相对定位，相对其正常位置)  
fixed;(固定定位，相对于浏览器窗口固定)  
absolute;(绝对定位，相对于最近的已定位父元素)  
sticky;(粘性定位，基于用户的滚动位置)
>注意： Fixed 定位在 IE7 和 IE8 下需要描述 !DOCTYPE 才能支持。
Fixed定位使元素的位置与文档流无关，因此不占据空间。
Fixed定位的元素和其他元素重叠。 

top/left/bottom/right：如果设置了position为非static的话，就可以设置这几个值来调整div的相对位置
auto;
length;
%;
inherit;


display:显示类型 block;(块) inline;(内嵌) list-item;(列表项) run-in;(追加部分) compact;(紧凑) marker;(标记) table; inline-table;

visibility:hidden;不显示，
>跟display:none最大的区别就在其还是会占据空间；还有个跟表格相关的collapse的选项；  
visibility: inherit; visible; hidden;

overflow溢出:visible;(默认值,显示)hidden;不显示 scroll;增加滚动条 auto;交给浏览器来判断是否装得下，装不下就加滚动条;inherit  
overflow-y 处理顶部/底部边缘的内容溢出
overflow-x 处理右边/左边边缘的内容溢出
>overflow 属性只工作于指定高度的块元素上。

clip裁切:shape;auto;inherit
用来剪切一个形状的属性，可以剪切为圆形，不规则多边形，圆弧等形状  
clip: rect(12px,auto,12px,auto)

transform：对元素属性主要是用来对某个元素进行旋转，偏移等，  
```
鼠标光标样式：
CURSOR: 
链接手指hand;
十字体crosshair; 
箭头朝s-resize; 
十字箭头move; 
加一问号help; 
箭头朝左w-resize; 
箭头朝右e-resize; 
箭头朝上n-resize; 
箭头朝右上ne-resize; 
箭头朝左上nw-resize; 
文字I型text; 
箭头斜右下se-resize; 
箭头斜左下sw-resize; 
漏斗wait; 
光标图案(IE6)  p {cursor:url("光标文件名.cur"),text;} 
```

z-index:number;auto;inherit;
不同z-index之间的比较只针对父亲和直属子元素，一个比较好的理解是给理解成目录版本号，
除了z-index之外，还有其他的一些属性也会生成一个新的层叠上下文
z-index不为auto：非static的元素，或者flex元素

opacity小于1, 即元素半透明

transform不为none的元素，即有各种角度变换的操作等

区块属性

table-raw-group; table-header-group; table-footer-group; table-raw; table-column-group;table-column; table-cell; table-caption;(表格标题)



#### 多列属性  

columns：像论文一样将文章按照多列的方式来展示，可以分成任意多列；
column-count：分成几列来显示文本
column-gap：每一列之间的间距大小
column-rule：每一列之间的间隔样式(类似border)
column-span：可以将某段文字横跨所有列, 比如标题，或者将文章分成几个格子来展现
column-width：每一个列的宽度；

Flex布局
父亲元素设置

基本属性设置

弹性布局，更多详细请参考这里

该布局主要用于单行的横向排版布局, 相比于float等布局方式主要好处在于其不脱离文档流, 控制比例方便

display:flex：将父亲设置为 flex 弹性布局
flex-direction：row(从左往右), row-reverse(从右往左), column(从上往下), column-reverse(从下往上)
主轴：以从左往右为例, 就是左->右;
交叉轴：就是垂直于主轴的方向，以rtl为例, 就是上->下；
起始和终止：以左->右布局为例, 起始就是左边交叉轴->右边交叉轴;
主轴和交叉轴概念很重要，因为各种属性都是控制区块是如何在主轴和交叉轴上面分布的；
flex-wrap：沿着主轴的元素如果超出父元素宽度之后，是否自动折行显示新子元素，默认不折行，直接超出父元素显示；
wrap：换行；nowrap：不换行；
flex-flow：将flex-direction和flex-wrap合起来的简写属性；
元素对齐与空间分配

align-items：元素在交叉轴上的高度控制
flex-start：顶部对齐，不自动拉伸高度
felx-end：底部对齐，不自动拉伸高度
center：中间对齐
stretch：默认值，自动拉伸占满所有高度
justify-content：在主轴上的布局方式
flex-start：靠左对齐
flex-end：靠右对齐
center：居中
space-round：平均分布，左右也留白
space-between：平均分布，左右对齐边界
align-content：对于多行的flex容器设置行与行之间的排布
子元素宽度属性

占据宽度设置

flex-bias：用来决定子元素的初始长度
默认为auto，意思是让浏览器来决定宽度，如果设置了width，就用；否则就浏览器自己计算；
也可以人工指定绝对值或者百分比（相对父亲），用来手动指定宽度
flex-grow：一个绝对的数字，如果子元素之和没有父元素宽的话，就用这个数字的相对比例来决定每个元素如何分配剩下的空间
flex-shrink：跟flex-grow类似，只不过是子元素之和大于父元素的时候，怎么压缩，不过压缩不会无限制压缩，每个元素都会有个最小宽度。
具体grow和shrink在实际应用当中的表现可以参考这里
flex：如上三个属性的简写，可以为枚举值或者1~3个数字
auto：相当于1 1 auto，即自动伸长，也自动伸缩，宽度由浏览器决定
initial: 默认值, 相当于0 1 auto, 即不自动伸长，但是自动收缩，宽度由浏览器决定
none：相当于0 0 auto，即不自动伸长，也不自动收缩，宽度由浏览器决定
如果是一个值：
如果是一个无单位的数，会被当成flex-grow的值
如果是一个长度/宽度单位，会被当成flex-bias的值
如果是两个值：
第一个值必须是一个无单位的数，当成是flex-grow的值
第二个值可以是：
一个无单位的数，当成是flex-shrink的值
一个长度/宽度单位，会被当成是flex-bias的值
如果是三个值
第一个值必须是无单位的数，会被当成flex-grow的值
第二个值必须是无单位的数，会被当成是flex-shrink的值
第三个值必须是长度/宽度单位或者枚举值，被当成flex-bias的值
占据高度设置
align-self：在子元素上面设置元素在交叉轴上面的高度控制
默认为父亲的align-items的值
如果设置了，就覆盖父亲的值，值得取值范围和含义跟align-items一模一样
排序设置
order：如果子元素设置了该属性，则各子元素按照order值排序，否则按照文档出现的先后顺序排序

网格布局
网格布局跟Flex弹性布局是类似的，都是css3新出的属性。

Flex主要针对的是单行的布局，一般不会换行。Grid主要针对的是表格类多行布局，可以将其想象成在css中控制类似excel的表格。

相比于普通的html中的table布局，Grid布局一方面主要是在 css 中控制表格效果，另一方面是在合并单元格方面比表格布局会更灵活。

更多跟Grid布局相关的信息，请参考这里

父亲属性

display: grid：将父亲设置为表格布局属性，所有其直属儿子都会按照表格方式布局
grid-template-columns：将表格分为多少列
可以直接写100px, 100px, 100px 将表格分为三个 100px 的列
也可以写 1fr, 1fr, 1fr 将表格均分为三个相同的列，主要 fr 是专门为grid布局新出的一个单位
也可以写 repeat(3, 1fr) 达到跟上面一样的效果，这样可以减少书写的量
还可以为每条线命名，这样儿子就可以不用坐标，而用名字来定位，有的时候这样代码会更可读一些，比如
grid-template-columns: [main-start] 1fr [content-start] 1fr [content-end] 1fr [main-end];
grid-template-rows：将表格分为多少行，同上
grid-auto-rows：设置每一行的高度，可以用minmax(100px, auto)来设置为最少100px, 最高就让浏览器自己设置
grid-auto-columns：同grid-auto-rows
grid-column-gap：列与列之间的宽度，一个长度单位
grid-row-gap：行与行之间的宽度，一个长度单位
grid-gap：如上两个属性的简写
如果只有一个值，会同时应用到行与列的间距
如果有两个值，第一个用到行，第二个用到列
grid-template-areas：这个是基于命名网格的定位， 在该属性中将所有单元格属于哪个儿子都写出来，详情请参考这里
儿子属性
儿子定位默认是从左到右，从上到下，按照单元格依次排布的。

而Grid属性最大的作用就是可以弹性布局，即合并单元格，每个儿子可以指定自己所占据的单元格的区间。

设置的方式有多种：

grid-column-start/grid-column-end/grid-row-start/grid-row-end：这四个属性就对应了横纵坐标轴(注意，是从1开始)
默认每个儿子只占一个单元格，所以如果只写了start，不写end的话，默认end就是start+1；同样，如果只写了end的话，start就是end-1
坐标可以设置为负数，即导数第几个坐标
grid-column/grid-row的简写，如下：
grid-column: 1 / 2
grid-row： 1 / 4
可以用span关键字来改为start/start+_span_的方式来设置单元格属性，这样可以专注单元格大小，示例如下：
grid-column: 1 / span 1
grid-row: 1/ span 3
效果跟上面两行效果是一样的
grid-area属性，如下：
grid-area：1 / 1 / 4 / 1
该属性是按照 上/左/下/右 的顺序来写的，跟margin正好是反方向的

表格布局
表格布局是很老很早的布局了，其布局结构主要在html中控制，css中有如下的几个属性来控制表格的行为：

而现在表格一般不用来布局了，主要还是用来做表格类数据的呈现。

border-collapse：控制单元格之间的边框是否合并，默认不合并，但是一般都要设置为合并；

默认为seperate，合并为collapse
border-spacing：跟grid-gap类似，设置的单元格之间的间距，如果是一个值就是统一设置，如果是两个值就是先行后列

如果设置了border-collapse属性，就会忽略border-spacing的属性
empty-cells：在没有内容的单元格周围是否绘制边框

show：绘制，默认值
hide：不绘制
如果设置了border-collapse为collapse的话，就会忽略该属性
caption-side：可以在html中用 caption 添加一个标题，然后这个属性是用来控制该标题的位置，是位于表格的上面还是下面

top：顶部

bottom：底部

table-layout：用来设置单元格的布局宽度高度的算法

auto：自动设置，默认值
某列宽度由没有折行的最大宽度来决定，即使设置了width也没用
该算法较慢，因为要遍历完所有内容才能决定每一列的宽度，在主要以呈现数据为主的页面中不建议使用
fixed：固定宽度
跟单元格内内容无关，就跟表格自身设置的高度宽度比例有关



### 列表/表格

#### 列表样式属性list-style

1.列表项标志的类型 list-style-type:none;（将列表前面的小圆点去掉）disc;（实心圆形符号）square;（实心方形符号）circle;（空心圆形符号）decimal;（阿拉伯数字） lower-roman;（小写罗马数字） upper-roman;（大写罗马数字） lower-alpha;（小写英文字母） upper-alpha;（大写英文字母） 
2.列表项标志的位置 list-style-position:inside; /*缩进*/  outside; /*凸排*/ 
3.将图象设置为列表项标志 list-style-image:url(/dot.gif); /*图片式符号，将图像设置为列表项标记*/ 

简写：list-style:square url("/sqpurple.gif");

#### 表格属性table

border-collapse:是否合并表格边框或隔开 collapse;折叠成一个单一的边框

border-spacing:相邻单元格边框之间的距离

caption-side:表格标题的位置

empty-cells:是否显示表格中的空单元格上的边框和背景

table-layout:设置用于表格的布局算法

### 动画属性


### 其他属性 animation, transition等

## 书写规范

### CSS的引用、开头

1.样式放头上，脚本放脚下。不内嵌，只外链。  
2.@charset "utf-8";注意，必须要定义在 CSS 文件所有字符的前面（包括编码注释），@charset 才会生效。  

　　　　例如，下面的例子会使 @charset 失效：
```
　　　　/* 字符编码 */
　　　　@charset "utf-8";
　　　　html,
　　　　body {
  　　　　　　　　height: 100%;
　　　　}
```
3.注释用英文，避免解析出现乱码；
4.慎用 * 通配符。所谓通配符，就是将 CSS 中的所有标签均初始化，不管用的不用的，过时的先进的，一视同仁，这样，大大的占用资源。要有选择的初始化标签。

### BEM命名方法论

BEM其实是一种命名的规范。或者说是一种class书写方式的方法论（methodology）。BEM的意思就是块（block）、元素（element）、修饰符（modifier）,是由Yandex团队提出的一种前端命名方法论。在具体CSS类选择器上的表现就像下面这样
```css
.block {}
.block__element {}
.block--modifier {}
.block__element--modifier {}
```
其中，block表示的是独立的分块或组件；element表示每个block中更细粒度的元素；modifier则通常会用来表示该block或者element不同的类型和状态。

举个例子，例如我们有一个列表
```html
<ul class="list">
  <li class="item">learn html</li>
  <li class="item underline">learn css</li>
  <li class="item">learn js</li>
</ul>
```
列表容器的class为.list，列表内每条记录的class为.item，其中，还为第二个条记录添加了一个下划线.underline。简单的css如下
```css
.list {
  margin: 15px;
  padding: 0;
}
.list .item {
  margin: 10px 0;
  border-left: 3px solid #333;
  font-size: 15px;
  color: #333;
  list-style: none;
}
.list .underline {
  color: #111;
  text-decoration: underline;
}
```
这样的命名方式，我们在阅读html时并不能迅速了解：.item是只能在.list中使用么，它是仅仅定义在这个组件内的一部分么？.underline是一个通用样式么，我想修改列表的中underline的记录为红色，这会影响到项目其他地方么？

这时候，我们就可以使用BEM方式来命名我们的class
```css
.list {
  margin: 15px;
  padding: 0;
}
.list__item {
  margin: 10px 0;
  border-left: 3px solid #333;
  font-size: 15px;
  color: #333;
  list-style: none;
}
.list__item--underline {
  color: #111;
  text-decoration: underline;
}
```
```html
<ul class="list">
  <li class="list__item">learn html</li>
  <li class="list__item list__item--underline">learn css</li>
  <li class="list__item">learn js</li>
</ul>
```
这段代码的一大优势就是增加了它的自解释性：一定程度上，它的class名本身就是一个简易的文档。

这里还需要避免一个误区，BEM命名规范里，我们的CSS并不会关心HTML中dom元素的层级结构。它的核心着眼点还是我们定义的块（block）、元素（element）、修饰符（modifier）这三部分。因为关注点不同，所以一个block内的所有element，在CSS中并不会考虑层级，因此也就没有.list__item__avatar这种写法
```html
<ul class="list">
  <li class="list__item">
    ![](avatar.png)
    learn html
  </li>
  <li class="list__item list__item--underline">learn css</li>
  <li class="list__item">learn js</li>
</ul>
```
而是把这个img也看作block中的元素.list__avatar
```html
<ul class="list">
  <li class="list__item">
    ![](avatar.png)
    learn html
  </li>
  <li class="list__item list__item--underline">learn css</li>
  <li class="list__item">learn js</li>
</ul>
```
从这个例子看一看出，CSS部分并不关心dom层级结构，而是在block下面有哪些element，这些element又有哪些modifier。

基于这个思想，我们可以知道，如果一个block里面含有其他block并不会违反BEM的原则。例如上面这个列表的例子，其中头像avatar原本只是一个简单的element，现在如果变成了一个很复杂的组件——包括图片、姓名和标签，那么可能会有这么一个block
```html
<ul class="list">
  <li class="list__item">
    <div class="list__avatar">
      <img class="list__head list__head--female" />
      <span class="list__name"></span>
      <span class="list__tag"></span>
    </div>
    learn html
  </li>
  <li class="list__item list__item--underline">learn css</li>
  <li class="list__item">learn js</li>
</ul>
```
那么你可能会有疑问，什么时候需要在将一个elment重新抽象为新的block呢？仅仅当我们的dom元素变得很多的时候么？

其实，BEM中的block一定程度上可以理解为一个“独立的块”。独立就意味着，把这一部分放到其他部分也可以正常展示与使用，它不会依赖其父元素或兄弟元素。而在另一个维度上面来说，也就是视觉设计的维度，当UI设计师给出UI稿后，其中的一些设计元素或组件会重复出现，这些部分也是可以考虑的。所以理解UI设计稿并不是指简单的还原，其中的设计原则与规范也值得揣摩。

从上面的简单介绍可以看出，BEM有着一些优点

    class的单一职责原则、开闭原则
    模块化思想，一般来说遵循这个方法的组件可以迁移环境
    一定程度上，避免命名的污染
    自解释性。可以直观看出各个class之间的依赖关系以及它们的作用范围（.list__item和.list__item--underline都是依赖于.list的，因此它们不能脱离于.list存在）
当然，BEM仅仅是一种命名规范或建议。在没有约束的情况下，你随时都可以违反。所以我们可以借助类似BEM-constructor的工具，既帮我们进行一定的约束，同时也省去一些繁琐的重复工作。在介绍BEM-constructor之前，我们还需要简单了解一下BEM-constructor中命名空间（namespaces）的基本概念。
### 命名空间规范
```
1.布局：以 g 为命名空间，例如：.g-wrap 、.g-header、.g-content。
2.状态：以 s 为命名空间，表示动态的、具有交互性质的状态，例如：.s-current、s-selected。
3.工具：以 u 为命名空间，表示不耦合业务逻辑的、可复用的的工具，例如：u-clearfix、u-ellipsis。
4.组件：以 m 为命名空间，表示可复用、移植的组件模块，例如：m-slider、m-dropMenu。
5.钩子：以 j 为命名空间，表示特定给 JavaScript 调用的类名，例如：j-request、j-open。
6.对象：以 o 为命名空间，
6.组件：以 c 为命名空间，Component， .c-list {}  .c-avatar {}
6.主题：以 t 为命名空间，Theme，
6.   ：以 s 为命名空间，Scope，

参考文章：https://blog.csdn.net/weixin_34318326/article/details/87958512

对应英文  grid、state、utility、module、js
```

### 属性书写顺序

1.位置 (position, top, right, z-index, display, float等)　　

2.大小 (width, height, padding, margin)　　

3.文字系列 (font, line-height, letter-spacing, color- text-align等)　　

4.背景 (background, border等)  

5.其他 (animation, transition等)  

![](https://gitee.com/hello_hww/img/raw/master/img1/20200704163615.png)

### 缩写属性

CSS有些属性是可以缩写的，比如padding,margin,font等等，这样精简代码同时又能提高用户的阅读体验。

![](https://gitee.com/hello_hww/img/raw/master/img1/20200704163716.png)

### 去掉小数点前的0

![](https://gitee.com/hello_hww/img/raw/master/img1/20200704163816.png)

### 选择器命名简写

![](https://gitee.com/hello_hww/img/raw/master/img1/20200704163904.png)

### 16进制颜色代码缩写

![](https://gitee.com/hello_hww/img/raw/master/img1/20200704163927.png)

### 选择器连字符命名规范

用"-"而不用"_"，为什么：
输入的时候少按一个shift键;
浏览器兼容问题 (比如使用tips的选择器命名，在IE6是无效的)
​能良好区分JavaScript变量命名(JS变量命名是用“_”)

![](https://gitee.com/hello_hww/img/raw/master/img1/20200704164142.png)

### 不要轻易使用id

id在JS是唯一的，不能多次使用，  
而使用class类选择器却可以重复使用，  
另外id的优先级优先与class，所以id应该按需使用，而不能滥用。  

![](https://gitee.com/hello_hww/img/raw/master/img1/20200704164417.png)


### 为选择器添加状态前缀

有时候可以给选择器添加一个表示状态的前缀，让语义更明了，比如下图是添加了“.is-”前缀。

![](https://gitee.com/hello_hww/img/raw/master/img1/20200704164512.png)

### 属性值合理使用使用引号

在某些样式中，会出现一些含有空格的关键字或者中文关键字。

font-family 内使用引号
当字体名字中间有空格，中文名字体及 Unicode 字符编码表示的中文字体，为了保证兼容性，都建议在字体两端添加单引号或者双引号：
```css
body {  font-family: 'Microsoft YaHei', '黑体-简', '\5b8b\4f53';}
```

　　
background-image 的 url 内使用引号 如果路径里面有空格，旧版 IE 是无法识别的，会导致路径失效，建议不管是否存在空格，都添加上单引号或者双引号： 
```css
div { <br>  background-image: url('...'); <br>}
```
### 常用的CSS命名规则

```
头：header　　
内容：content/container　　
尾：footer　　
导航：nav　　
侧栏：sidebar　　
栏目：column　　
页面外围控制整体佈局宽度：wrapper　　
左右中：left right center　　
登录条：loginbar　　
标志：logo　　
广告：banner　　
页面主体：main　　
热点：hot　　
新闻：news　　
下载：download　　
子导航：subnav　　
菜单：menu　　
子菜单：submenu　　
搜索：search　　
友情链接：friendlink　　
页脚：footer　　
版权：copyright　　
滚动：scroll　　
内容：content　　
标签：tags　　
文章列表：list　　
提示信息：msg　　
小技巧：tips　　
栏目标题：title　　
加入：joinus　　
指南：guide　　
服务：service　　
注册：regsiter　　
状态：status　　
投票：vote　　
合作伙伴：partner
```

Id的命名

```
(1)页面结构　　
    容器: container　　
    页头：header　　
    内容：content/container　　
    页面主体：main　　
    页尾：footer　　
    导航：nav　　
    侧栏：sidebar　
    栏目：column　　
    页面外围控制整体佈局宽度：wrapper　　
    左右中：left right center
    
(2)导航　　
    导航：nav　　
    主导航：mainnav　　
    子导航：subnav　　
    顶导航：topnav　　
    边导航：sidebar　　
    左导航：leftsidebar　　
    右导航：rightsidebar　　
    菜单：menu　　
    子菜单：submenu　　
    标题: title　　
    摘要: summary
    
(3)功能　　
    标志：logo　　
    广告：banner　　
    登陆：login　　
    登录条：loginbar　　
    注册：register　　
    搜索：search　　
    功能区：shop　　
    标题：title　　
    加入：joinus　　
    状态：status　　
    按钮：btn　　
    滚动：scroll　　
    标籤页：tab　　
    文章列表：list　　
    提示信息：msg　　
    当前的: current　　
    小技巧：tips　　
    图标: icon　　
    注释：note　　
    指南：guild　　
    服务：service　　
    热点：hot　　
    新闻：news　　
    下载：download　　
    投票：vote　　
    合作伙伴：partner　　
    友情链接：link　　
    版权：copyright
```

### 注意事项

```
    1.选择器名，属性及属性值的书写一律小写;　　
    >在xhtml标准中规定了所有标签、属性和值都小写，CSS 书写也应该遵循此约定。
    2.尽量用英文;　　
    3.不加中槓和下划线;　　
    4.尽量不缩写，除非一看就明白的单词。
```

### CSS样式表文件命名

```
    主要的 master.css　　
    模块 module.css　　
    基本共用 base.css　　
    布局、版面 layout.css　　
    主题 themes.css　　
    专栏 columns.css　　
    文字 font.css　　
    表单 forms.css　　
    补丁 mend.css　　
    打印 print.css
```