# 1.JS/ES6概述

## 1.1定义
JavaScript ( JS ) 是一种具有函数优先的轻量级，解释型或即时编译型的高级编程语言。
>虽然它是作为开发Web页面的脚本语言而出名的，但是它也被用到了很多非浏览器环境中，JavaScript 基于原型编程、多范式的动态脚本语言，并且支持面向对象、命令式和声明式（如函数式编程）风格。  

## 1.2发明者
JavaScript在1995年由Netscape公司的Brendan Eich，在网景导航者浏览器上首次设计实现而成。
>因为Netscape与Sun合作，Netscape管理层希望它外观看起来像Java，因此取名为JavaScript。但实际上它的语法风格与Self及Scheme较为接近。

## 1.3组成
1. ECMAScript 定义了JS的语法规范，JavaScript的标准是ECMAScript。ECMAScript描述了JavaScript的语法和基本对象。  
2. DOM 文档对象模型 提供对应的属性和方法（文档api），可以让JS操作页面中的DOM元素。
3. BOM 浏览器对象模型 提供操作浏览器的属性和方法（浏览器对象api）。  

## 1.4特征
脚本语言、面向对象、弱类型、动态性（基于事件驱动）、跨平台（依赖与浏览器支持）

## 1.5作用
后台数据到客户端的渲染，把数据库的数据通过JS操作显示在页面上
通过浏览器的事件机制，实现用户与网页的交互，达到动态网站效果
动态修改页面元素，动态操作css与html，这些都说明js通过BOM与DOM可以轻松实现对静态页面的操作，使其拥有动态特性
在有了ajax之后，客户端可以在不刷新页面的情况下对服务器发起请求，不仅可以在客户端验证数据之后再向服务端发送数据，有些时候还可以直接在客户端计算之后再向服务器返回数据，减少服务器的压力

## 1.6版本迭代
<table>
<tbody><tr>
<th style="width:15%;">版本</th>
<th style="width:30%;">官方名称</th>
<th>描述</th>
</tr>

<tr>
<td>1</td>
<td>ECMAScript 1 (1997)</td>
<td>第一版。</td>
</tr>

<tr>
<td>2</td>
<td>ECMAScript 2 (1998)</td>
<td>只改变编辑方式。</td>
</tr>

<tr>
<td>3</td>
<td>ECMAScript 3 (1999)</td>
<td>
    <ul>
    <li>添加了正则表达式。</li>
    <li>添加了 try/catch。</li>
    </ul>
</td>
</tr>

<tr>
<td>4</td>
<td>ECMAScript 4</td>
<td>从未发布过。</td>
</tr>

<tr>
<td>5</td>
<td>
    <p>ECMAScript 5 (2009)</p>
</td>
<td>
    <ul>
    <li>添加了“严格模式”。</li>
    <li>添加了 JSON 支持。</li>
    <li>添加了 String.trim()。</li>
    <li>添加了 Array.isArray()。</li>
    <li>添加了数组迭代方法。</li>
    </ul>
</td>
</tr>

<tr>
<td>5.1</td>
<td>ECMAScript 5.1 (2011)</td>
<td>编辑改变。</td>
</tr>

<tr>
<td>6</td>
<td>
    <p>ECMAScript 2015，被称为ES6</p>

</td>
<td>
    <ul>
    <li>添加了 let 和 const</li>
    <li>添加了默认参数值</li>
    <li>添加了 Array.find()</li>
    <li>添加了 Array.findIndex()</li>
    </ul>
</td>
</tr>

<tr>
<td>7</td>
<td>ECMAScript 2016</td>
<td>
    <ul>
    <li>添加了指数运算符（**）。</li>
    <li>添加了 Array.prototype.includes。</li>
    </ul>
</td>
</tr>

<tr>
<td>8</td>
<td>ECMAScript 2017</td>
<td>
    <ul>
    <li>添加了字符串填充。</li>
    <li>添加了新的 Object 属性。</li>
    <li>添加了异步功能。</li>
    <li>添加了共享内存。</li>
    </ul>
</td>
</tr>

<tr>
<td>9</td>
<td>ECMAScript 2018</td>
<td>
    <ul>
    <li>添加了 rest / spread 属性。</li>
    <li>添加了异步迭代。</li>
    <li>添加了 Promise.finally()。</li>
    <li>增加 RegExp。</li>
    </ul>
</td>
</tr>
</tbody></table>

## 1.7拓展

1. v8引擎。只需要有js引擎就可以执行js代码，浏览器有，nodejs有v8引擎就也可以执行js代码。
2. TS是JS的超集，算是对JS的扩展，它对JS的弱类型加以调整，使其拥有强类型语言的特性。
