# 2.CSS基础

## 2.1书写位置

### 2.1.1.行内式（内联样式）
```html
<标签名 style="属性1:属性值1; 属性2:属性值2; 属性3:属性值3;"> 内容 </标签名>

/* 直接写到标签内当作标签属性 */
```

### 2.1.2.嵌入式（内部样式表）
```html
<head>
<style type="text/CSS">
    选择器 {属性1:属性值1; 属性2:属性值2; 属性3:属性值3;}
</style>
</head>

/* 嵌入到 html 代码中单独一块 */
/* type="text/CSS" 在html5 可不写，一般放 head 里 */
```

### 2.1.3.外链式（外部样式表）
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

#### link和@import的区别:
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

### · 多重样式优先级

（内联样式）Inline style > （内部样式）Internal style sheet >（外部样式）External style sheet > 浏览器默认样式


## 2.2书写语法

### 2.2.1实例:  

![](https://gitee.com/hello_hww/img/raw/master/img1/20200703233115.png)

例如
```
p {color:red;text-align:center;}
```
CSS声明总是以分号(;)结束，声明总以大括号({})括起来  
为了让CSS可读性更强，你可以每行只描述一个属性  
### 2.2.2注释：
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

## 2.3选择器

### 2.3.1.基本选择器
```
*{属性：值}，      通用选择器/通配符选择器，*表示全部
标签名{属性：值}      标签选择器，（如：body,div,p,ul,li）
.class名{}       类选择器，使用.类名来选择；p .class 表示层层选择到指定为 class 类的标签
#id名 {}      id选择器，使用#id 来选择；id 唯一，给特定标签设置样式（如：id="name",id="name_txt"）
```

### 2.3.2.复合选择器
```
"," 多元素选择器：p,h1,h2 {属性：值} 同时匹配多个标签或类、id 等，多个选择器之间用逗号隔开
" " 后代选择器：#id p {属性;值} 匹配所有属于#id 下的全部 p 标签，父子带之间用空格隔开
">" 子元素选择器：.class>p {属性：值} 匹配.class 下一层中全部的孩子，不包括孙子及以下
"+" 相邻元素选择器：div1+div2 {属性：值} 匹配同级紧跟 div1 后的元素 div2，之间用+号连接，条件同级元素，之间没有其他元素，且 div2 在 div1 下面
```

### 2.3.3.伪类选择器
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
### 2.3.4.属性选择器
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
### 2.3.5.结构选择器
```
div span p{}---div的后代span的后代p,后代用空格
div>span{}---div的孩子span，父子级用>
div h1~h2{}---div的后代中h1的兄弟h2以及之后的
div h1+h2{}---div的后代中紧挨h1的兄弟h2
```
### 2.3.6.伪元素选择器
```
::first-line 用于向文本的首行设置特殊样式，只能用于块级元素。
::first-letter 用于向文本的首字母设置特殊样式。只能用于块级元素。
::after 可以在元素的内容之后插入新内容。
::before 可在元素的内容前面插入新内容。默认地，这个伪元素是行内元素，可使用属性 display 改变这一点。
::selection 可用来匹配突出显示的文本。浏览器默认情况下，选择网站文本是深蓝背景白色字体。仅接受两个属性，分别是background和color。
::backdrop 控制需要视觉聚焦的元素后面的背景元素样式
```


### · 选择器优先级

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

- 同权重谁后出现谁优先

## 2.4属性和属性值

CSS 属性众多，  

在 W3C CSS 2.0 版本中共有 122 个标准属性（https://www.w3.org/TR/CSS2/propidx.html），  

在 W3C CSS 2.1 版本中共有 115 个标准属性（https://www.w3.org/TR/CSS21/propidx.html），其中删除了 CSS2.0 版本中 7 个属性：font-size-adjust、font-stretch、marker-offset、marks、page、size 和 text-shadow。  

在 W3C CSS 3.0 版本中又新增加了 20 多个属性（https://www.w3.org/Style/CSS/current-work#CSS3）。


CSS 属性被分为不同的类型，如字体属性、文本属性、边框属性、边距属性、布局属性、定位属性、打印属性等。  

边学习边记忆，在实践中逐个突破。

### 2.4.1字体/文本/颜色/链接/背景

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

- background-clip：content-box背景按内容裁切

### 2.4.2大小/盒子

#### 大小属性

width/height：包含了width，max-width，min-width几个配套的属性，值为长度/百分比；同时还可以设置一些属性值，用于表达width用于内容级别，还是border级别等；  

max-width/max-height：最大宽度/高度  

min-width/min-height：最小宽度/高度  

#### 盒子模型类属性  

盒子=内容content+内填充padding+边框border+外边距margin

盒子主要属性：width、height、padding、border、margin

width、height 为内容的宽度

盒子高宽为内容+内填充+边框大小，一般不设置盒子宽高


- 1.border：简写形式，包含了粗细、(线条)样式、颜色。  

border:1px solid red;颜色不写为黑色，其他值不能不写，否则无效

border-width：可以有1~4个长度值。1个代表4个边；2个的话代表横边和纵边；3个代表上，左&右，下；4个代表上，右，下，左  

border-style：可以有1~4个枚举值。跟text-decoration类似，可以有实线solid、双实线double、短虚线dashed、点虚线dotted、波浪线等，还可以有立体内凸groove、浮雕ridge、陷入inset、突出outset等效果；  

border-color：可以有1~4个颜色值。  

border-top : 1px solid #6699cc; /*上框线*/    
border-bottom : 1px solid #6699cc; /*下框线*/  
border-left : 1px solid #6699cc; /*左框线*/  
border-right : 1px solid #6699cc; /*右框线*/  

border-image：可以用来设置边框的图片，用来显示一些比较漂亮的边框

border-radius：用来设置圆角,左上 右上 右下 左下，顺时针单位 px 或%,4 个值都一样可只写一个，写 50%为圆形

box-shadow：边框的模糊划效果，跟text-shadow是类似的效果，可以设置阴影相对位置h-shadow、v-shadow/阴影模糊半径/扩散半径/阴影颜色；

outline：outline跟border类似, 是画边框的，
跟border的区别: 1. 不占盒子模型宽度; 2. 可能不是矩形;
准确来说, outline应该不算是盒子模型的属性
跟border类似有, outline-style, outline-color, outline-width三个子属性

shape-outside：border-box文字环绕边框，值也可以是clip-path的值、url（图片.png）

clip-path：circle（大小 at 圆心x，圆心y），形状、ellipse、polygon绘制形状


- 2.margin/padding：外边距，内边距的属性，可以有1~4个值，不同个数的值代表函数同边； 

margin-top/margin-bottom/margin-left/margin-right：对应的控制4个边的外边距的属性  

padding-top/padding-bottom/padding-left/padding-right：对应的控制4个边的内边距的属性  

一值为全部，二值为上下、左右，三值为上、左右、下，四值为上右下左

**margin有塌陷现象，在标准文档流中，竖直方向上的 margin 不会叠加，它会取较大的值。水平方向和浮动元素没有 margin 塌陷现象，为相加。**

**margin:0 auto;用 margin 居中时需要固定宽度，块元素盒子居中，区分text-align 为文本居中**

tips:
```
- 元素没设置宽度，则会占据父元素 100%宽度
- 多用父元素的 padding，少用子元素的 margin
- 给父元素设置边框，子元素可用 margin，少用
- 父元素没设置边框，父元素设置 padding，撑开子元素，推荐使用
- margin 用于描述兄弟之间的关系，父子关系用 padding
```

### 2.4.3布局

#### 基础定位类  

1.float:浮动属性   
left;	元素向左浮动。  
right;	元素向右浮动。  
none;	默认值。元素不浮动，并会显示在其在文本中出现的位置。  
inherit;

2.clear:清除浮动
left;	在左侧不允许浮动元素。
right;	在右侧不允许浮动元素。
both;	在左右两侧均不允许浮动元素。
none;	默认值。允许浮动元素出现在两侧。
inherit;	规定应该从父元素继承 clear 属性的值。

3.position定位:   
static;(默认，静态定位，遵循正常文档流)  
   - 不占空间
   - 脱离标准流，层级比标准流高
   - 不随 llq 滚动而 dong
   - 使用固定定位来实现返回顶部按钮
relative;(相对定位，相对其正常位置)  
   - 相对定位没有脱标
   - 如果没有设置坐标，则还在原来位置
   - 设置坐标后在原来位置上留了坑，还占位置，很少单独使用，一般配合绝对定位使用，子绝父相，父亲设置相对且不设置坐标，孩子可以使用绝对定位控制位置
   - 相对定位会覆盖标准流元素
   - 定位坐标可为负值，则为反方向
fixed;(固定定位，相对于浏览器窗口固定)  
absolute;(绝对定位，相对于最近的已定位父元素)  
   - 绝对定位脱离标准流
   - 绝对定位不占空间
   - 绝对定位会覆盖标准流元素
   - left、top、right、bottom 属性相当于自身前代中有定位（固定、相对、绝对都行一般为相对的前代）属性（最近级）的前代为参照，来进行定位

sticky;(粘性定位，基于用户的滚动位置)left：0px，吸附定位顶部，同级不会移走会覆盖，非同级会移走   
>注意： Fixed 定位在 IE7 和 IE8 下需要描述 !DOCTYPE 才能支持。
Fixed定位使元素的位置与文档流无关，因此不占据空间。
Fixed定位的元素和其他元素重叠。 

top/left/bottom/right：如果设置了position为非static的话，就可以设置这几个值来调整div的相对位置
auto;
length;
%;
inherit;

定位才有层级

后定位层级比前定位高


4.display:显示类型(转换元素体现类型) none;(不显示) block;(块，块级元素) inline;(内嵌，行内元素) inline-block;(行内块元素) list-item;(列表项) run-in;(追加部分) compact;(紧凑) marker;(标记) table; inline-table;

visibility:hidden;不显示  visible;  inherit;

>visibility:hidden跟display:none最大的区别就在其还是会占据空间；还有个跟表格相关的collapse的选项；  
>opacity:0;


5.overflow溢出:visible;(默认值,显示)hidden;不显示 scroll;增加滚动条 auto;交给浏览器来判断是否装得下，装不下就加滚动条;inherit  
overflow-y 处理顶部/底部边缘的内容溢出
overflow-x 处理右边/左边边缘的内容溢出
>overflow 属性只工作于指定高度的块元素上。

clip裁切:shape;auto;inherit
用来剪切一个形状的属性，可以剪切为圆形，不规则多边形，圆弧等形状  
clip: rect(12px,auto,12px,auto)

6.transform：对元素属性主要是用来对某个元素进行旋转，偏移等，  
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

7.z-index:number;auto;inherit;
- 只有定位元素才有 z-index 属性
- 没有单位，默认值为 0 ，如果都没设置，则后写的会覆盖早写的元素
- z-index 值越大，层级越高，越后渲染，则显示越前面
- 固定导航条为最高层，则不会被覆盖
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

#### Flex布局
父亲元素设置

1.基本属性设置

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


2.元素对齐与空间分配

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

3.占据宽度设置

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

4.父亲属性

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

6.表格布局

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



### 2.4.4列表/表格

#### 列表样式属性list-style

1.列表项标志的类型 list-style-type:none;（将列表前面的小圆点去掉）disc;（实心圆形符号）square;（实心方形符号）circle;（空心圆形符号）decimal;（阿拉伯数字） lower-roman;（小写罗马数字） upper-roman;（大写罗马数字） lower-alpha;（小写英文字母） upper-alpha;（大写英文字母） 

2.列表项标志的位置 list-style-position:inside; /*缩进*/  outside; /*凸排*/ 

3.将图象设置为列表项标志 list-style-image:url(/dot.gif); /*图片式符号，将图像设置为列表项标记*/ 


简写：list-style:square url("/sqpurple.gif");

#### 表格属性 table

border-collapse:是否合并表格边框或隔开 collapse;折叠成一个单一的边框

border-spacing:相邻单元格边框之间的距离

caption-side:表格标题的位置

empty-cells:是否显示表格中的空单元格上的边框和背景

table-layout:设置用于表格的布局算法

### 2.4.5动画属性 animation

animation 属性的动画原理是在一段时间之内修改某个元素的属性，然后浏览器会自动的将修改属性在这段时间之内均匀化，看起来就是一个比较均匀的动画效果了。

- 定义帧动画，定义顺序无关,不会覆盖过渡变换，多个动画可以同时作用
- animation-name:帧动画名
- animation-duration:2s帧动画过渡时间，动画时间
- 属性重叠，后出现的优先级高，不管时间
- animation-fill-mode:forwards（保持100%时状态）、初始状态backwards填充模式
- 有中间值的 有过渡效果
- animation-iteration-count:1,2执行次数、infinite无限循环
- 动画方向animation-direction：reverse（从后往前）动画方向、normal、alternate、alternate-reverse
- background：radial-gradient（at center，col，col）背景渐变
- 延迟动画animation-delay：2s过2秒开始动画
- animation-timing-function:动画过渡平滑模式，cubic-bezier（，，，）自定义参数
- box-shadow：currentColor（获取文本颜色的阴影）盒子阴影
- 阴影作为动画。。。
- 步进动画animation-timing-function:step(0,start)
- animation-play-state:paused动画状态暂停，running运动
- animation-fill-mode:backwards延迟的初始状态为起始帧，forwards定格结尾帧、both两者都、normal
- 组合animation:hd 模式 运行时间 延迟

1.@keyframes  

动画的关键帧配置，类似一个函数，将动画的关键时间点对应的属性信息给标注上，配置示例如下：
```css
@keyframes mymove
{
    0%     {top:0px;}
    25%    {top:200px;}
    50%    {top:100px;}
    75%    {top:200px;}
    100% {top:0px;}
}
```

```css  帧动画
@keyframes 帧动画名{
  form{
    起始
  }
  to{
    终点
  }
  0%{
    百分比形式
  }
  50%,75%{

  }
  100%{

  }
}
```

### 2.4.6变形/过渡属性 transition

变形

- x水平，y垂直，z纵深不能%
- transform:translateX（200px）x移动，%，translate（x，y），可以把元素定在中心用动画，translate3d（x，y，z），scaleX（2，.5）缩放,perspective(900px)透视，rotateX（45deg）、rotate（）、rotate3d（x,y,z,deg）旋转，scaleZ（5）z轴拉长，scale3d（x,y,z），skew(xdeg,ydeg)倾斜
- transition：2s过渡时间，哪个元素变化哪个使用过渡
- linear-gradient（to left，col，col）线性渐变函数
- transform-style:preserve-3d，能看到z轴方向
- transform-origin:left top缩放基点，旋转参考点等变换参考点
- filter:blur(15)模糊、滤镜
- transform不会叠加，同属性只会使用一个属性，顺序有关系
- 块元素才会变换
- 父元素设置透视，子元素的透视效果不同perspective值越小透视越严重
- perspective：600px给子元素设置透视
- perspective-origin:-100px 200px视角移动
- backface-visibility:hidden背面不可见

过渡

- transform：2s过渡时间,可以继承，可以单独设置状态的过渡
- transition-property:col，width（默认all）过渡属性
- transition-duration：2s，属性过渡改变时间，可独立设置每个属性过渡时间
- transition-timing-function:ease、linear、（，，，）贝塞尔曲线，steps（3，end）分步过渡，step-end/start帧过渡、步进
- transition-delay:1s延迟过渡（2s,3s）可分别设置属性过渡延迟，时间不够不显示
- transition：过渡属性 过渡方式 过渡时间 延迟时间，组合设置过渡，也可每个属性独立设置



## 2.5书写规范

### 2.5.1 CSS的引用、开头

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

### 2.5.2 BEM命名方法论

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
### 2.5.3 命名空间规范
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

### 2.5.4 属性书写顺序

1.位置 (position, top, right, z-index, display, float等)　　

2.大小 (width, height, padding, margin)　　

3.文字系列 (font, line-height, letter-spacing, color-text-align等)　　

4.背景 (background, border等)  

5.其他 (animation, transition等)  

![](https://gitee.com/hello_hww/img/raw/master/img1/20200704163615.png)

### 2.5.5 缩写属性

CSS有些属性是可以缩写的，比如padding,margin,font等等，这样精简代码同时又能提高用户的阅读体验。

![](https://gitee.com/hello_hww/img/raw/master/img1/20200704163716.png)

### 2.5.6 去掉小数点前的0

![](https://gitee.com/hello_hww/img/raw/master/img1/20200704163816.png)

### 2.5.7 选择器命名简写

![](https://gitee.com/hello_hww/img/raw/master/img1/20200704163904.png)

### 2.5.8 16进制颜色代码缩写

![](https://gitee.com/hello_hww/img/raw/master/img1/20200704163927.png)

### 2.5.9 选择器连字符命名规范

用"-"而不用"_"，为什么：
输入的时候少按一个shift键;
浏览器兼容问题 (比如使用tips的选择器命名，在IE6是无效的)
​能良好区分JavaScript变量命名(JS变量命名是用“_”)

![](https://gitee.com/hello_hww/img/raw/master/img1/20200704164142.png)

### 2.5.10 不要轻易使用id

id在JS是唯一的，不能多次使用，  
而使用class类选择器却可以重复使用，  
另外id的优先级优先与class，所以id应该按需使用，而不能滥用。  

![](https://gitee.com/hello_hww/img/raw/master/img1/20200704164417.png)


### 2.5.11 为选择器添加状态前缀

有时候可以给选择器添加一个表示状态的前缀，让语义更明了，比如下图是添加了“.is-”前缀。

![](https://gitee.com/hello_hww/img/raw/master/img1/20200704164512.png)

### 2.5.12 属性值合理使用使用引号

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
### 2.5.13 常用的CSS命名规则

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

### 2.5.14 注意事项

```
    1.选择器名，属性及属性值的书写一律小写;　　
    >在xhtml标准中规定了所有标签、属性和值都小写，CSS 书写也应该遵循此约定。
    2.尽量用英文;　　
    3.不加中槓和下划线;　　
    4.尽量不缩写，除非一看就明白的单词。
```

### 2.5.15 CSS样式表文件命名

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



### 2.5.16 继承性

- 外层元素身上的样式会被内层元素继承，子继父
- 如果内层元素的样式与外层元素样式一致时，优先渲染内层样式

> **只有*文本*与*字体*样式属性能够被继承，其他属性都不可以继承**

- 一般直接给 body 标签设置字体大小和样式，body 为最外层元素


### 2.5.17 一个标签可以有多个类名

- 类名直接用空格隔开 eg：class="show head"
```
- 快捷生成 div.div${哈哈\$}\*2
```

  ```js 快捷生成
  <div class="div1">哈哈1</div>
  <div class="div2">哈哈2</div>
  ```

- 如果多个类名的样式一样，则会冲突，优先使用优先级高的，即写的越近的 css 样式，谁越后写谁优先级高和 class 写的顺序无关




## 2.6渲染原理

步骤

	1.dom tree,css tree,render tree

	2.布局 render tree

	3.绘制render tree

css顺序决定了步骤3的耗费时长

其他原理

## 2.7CSS单位

### 2.7.1绝对单位

本身具有实际大小，而不是根据其他来适应

#### px像素

换算

`1in = 2.54cm = 25.4 mm = 101.6q = 72pt = 6pc = 96px`

- 一像素（pixel）。对于普通的屏幕，通常是一个设备像素（点）
- 对于打印机和高分辨率屏幕，一个 CSS 像素往往占多个设备像素
- 一般来说，每英寸的像素的数量保持在 96 左右， 1px = 1in 的 96 分之一
- 对于高 dpi 设备，英寸（in）、厘米（cm）和毫米（mm）与物理设备相同
- 对于低 dpi 设备，单位 px 表示物理参考像素;其他单位是相对于它定义的
- 也就是说，高dpi的设备上的CSS单位换算成实际单位，其表示的长度与现实单位长度一致

#### cm厘米

一厘米。 1cm = 96px / 2.54

#### in英寸

一英寸。1in = 2.54cm = 96px

#### pc派卡

一十二点活字（pica），六分之一英寸。 1pc = 12pt = 1/6 * 1in
十二点活字（印刷中使用的），相当于我国新四号铅字的尺寸

#### pt磅

一磅（pount），72 分之一英寸。1 pt = 1/12 * 1 pc = 1/72 * 1 in

### 2.7.2相对单位(基于字体)

- 相对长度代表着以其它距离为单位的一种尺寸
- 这个单位可以是指定字符的大小，行高，或者是 viewport 的大小

#### ch--相对于“0”的宽度

- ch--文档数字“0”的的宽度
- 这一单位代表元素所用字体 font 中“0”这一字形的宽度（"0"，Unicode字符U+0030），更准确地说，是“0”这一字形的预测尺寸
- 如果无法确定“ 0”字形的大小，则必须假定其宽为 0.5em，高为 1em

![](https://gitee.com/hello_hww/img/raw/master/img1/20200728200305.png)

如上图，都定义了10ch的宽度，上面一个无法装下10个b，下面可以装下10个0，说明b比0宽。ch就是以当前字体中0的宽度为基准，即0的宽度=1ch

#### em--相对于`font-size`的大小

emphasize

- em单位相对于文档的`font-size`的大小
- 如果用在font-size 属性本身，它则表示元素继承的 font-size 值


```html em
<style>
  *{
    margin: 0;
    border: 0;
  }
  html{
    font-size: 16px;
  }
  .text1{
    position: absolute;
    font-size: 32px;
    width: 10em;
    background-color: bisque;
  }
  .text2{
    position: absolute;
    top: 50px;
    font-size: 2em;
    width: 10em;
    background-color: rgb(224, 168, 100);
  }
</style>
<span class="text1">0</span>
<span class="text2">0</span>
```

![](https://gitee.com/hello_hww/img/raw/master/img1/20200728201402.png)

从上面可以看出，em的值是以当前元素的`font-size`值为基准，但是也可以基于继承的`font-size`值为基准，即1em=当前`font-size`值。

- 如果当前元素没有自己定义的`font-size`则从祖先元素继承`font-size`的值为基准,否则以自身`font-size`的值为基准
- 如果当前元素设置`font-size`的值为em单位，则此em是以最近的祖先元素为基准

#### ex--相对于“x”的宽度

- 此单位类似ch，这个单位是以当前字体的小写x的高度为基准，即1ex=当前字体x的高度
- 对于很多字体来说，1ex ≈ 0.5em

#### rem--相对于“font-size”的大小

- 这个单位代表根元素的 font-size 大小（例如 `<html> `元素的font-size）
- 当用在根元素的 font-size 上面时 ，它代表了它的初始值


```html rem
<style>
  *{
    margin: 0;
    border: 0;
  }
  html{
    font-size: 1rem; // 也可以直接用px单位， 这里1rem=20px，浏览器默认比例
  }
  .text1{
    width: 20px;
    background-color: bisque;
  }
  .text2{
    width: 1rem;
    background-color: rgb(224, 168, 100);
  }
</style>
<div class="text1">x</div>
<div class="text2">x</div>
```

![](https://gitee.com/hello_hww/img/raw/master/img1/20200728202810.png)

rem单位如果用在非根元素上则说明是以根元素设置的`font-size`为基准，即1rem=根元素的`font-size`大小，如果用在根元素的`font-size`上则说明是以浏览器的rem为基准

### 2.7.3相对单位(基于视口)

以视口为比例的单位，随视口变化而变换
可以看成把视口的高宽分成100等份

#### vh

- 视口的初始包含块的高度的 1%，即初始视口高度的1%，1vh=初始视口高度1%

#### vw

- 视口的初始包含块的宽度的 1%，即初始视口宽度的1%，1vw=初始视口宽度1%

#### vmin

- 视口高度 vw 和宽度 vh 两者之间的最小值
- vmin=以vw与vh中较小的一方为基准
- 比如1vw=20px，1vh=30px，那么1vmin=1vw=20px，以总大小较小的一方为准

#### vmax

- 视口高度 vw 和宽度 vh 两者之间的最大值
- vmax=以vw与vh中较大的一方为基准
- 比如1vw=20px，1vh=30px，那么1vmax=1vh=30px，以总大小较大的一方为准

#### %--相对于父元素

- 最后一个单位%，是以父元素的值为基准
- 比如父元素的`height:20px`，那么子元素的`height:50%`相对于`height:10px`，即对应属性相对于父元素对应属性的值的%比例
- 这里注意是相对于父元素同属性值的%

以上这些就是目前已经标准化的单位了，对于一些还在实验的单位就不描述了

最常用的就是em，rem，px，vh、vw、%这些，不过由于需要适应各种设备，使用rem或者em更好些，修改起来也方便

### 2.7.4 像素/分辨率详解

针对于各种设备，以及各种物理单位之间的换算

#### dpi

- dpi每英寸包含点的数量（dots per inch），又可分为水平dpi和垂直dpi
- 普通屏幕通常包含96dpi，一般将2倍于此的屏幕称之为高分屏，即大于等于192dpi的屏幕
- 比如Mac视网膜屏就达到了192dpi（即2dppx），打印时一般会需要更大的dpi
- 普通屏幕为96dpi，即1in(英寸)长度包含了96个点，此时1dppx=96dpi，1dppx就是每像素包含的点个数，1dpcm ≈ 2.54dpi，1dpcm就是每厘米包含的点数量
- 正常情况`1in = 2.54cm = 25.4 mm = 101.6q = 72pt = 6pc = 96px`

#### ppi

- ppi每英寸像素数 pixel per inch

![](https://gitee.com/hello_hww/img/raw/master/img1/20200728204747.png)

接下来通过一个数据来验证公式

![](https://gitee.com/hello_hww/img/raw/master/img1/20200728204809.png)

ppi=斜边总px/斜边总英寸

上图ppi=(2400^2+1080^2)^0.5/6.55=402,看来公式没错，就是为斜边像素与英寸数之比，由于有些设备的像素点不是正方形，所以统一使用斜边计算

#### dppx

- dppx每像素包含的点数
- 一般的显示器每一个px用一个物理点来表示，比较好的屏幕可能会使用2个点来表示1px
- 比如iphone手机，使用的是2dppx，即1px=2个物理点，这样一来屏幕显示的细腻程度越高

[参考文章:关于移动端适配，你必须要知道的](https://juejin.im/post/5cddf289f265da038f77696c)