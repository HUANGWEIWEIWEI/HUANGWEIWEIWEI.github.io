# 5.指令

## 定义

directive

在Vue中vue-xxx的行内属性，统称为vue指令
这些指令基于自定义属性制定，只不过在vue上有特殊含义
当vue加载成功并进行处理的时候，会按照相关的规则解析和渲染视图，遇到对应的指令实现对应的功能

## 原生对应的指令

### v-text

给非表单元素设置内容，相当于小胡子语法，v-text会把所有内容部分都当做文本

```
v-text='变量'
```

传统的胡子语法，在vue没有加载完成之前，会把{{xxx}}先展示出来，v-text解决了这个问题

### v-html

给非表单元素设置内容，相当于原生的innerHTML，v-html支持对于标签的自动识别

```
v-html='变量'
```

只在可信任的内容上使用该指令，用户可以操作的一般不添加这个指令

### v-for

循环展示标签 

```
v-for='(值,index)in vue变量'
    值代表数组中的当前项，index是对应的索引
```

值代表数组中的当前项
index是对应的索引
值和key是自己定义的变量，两个都需要加上();
这两个变量只能用在当前使用v-for的标签及其内部
可以用来循环数组、字符串、数字、对象

## 无原生对应的指令

### v-bind

给元素的内置属性动态绑定数据，例如给img绑定动态的图片路径地址

```
v-bind:src="变量"
```

简写形式：

```
:src="变量"
```

v-bind指令专用于处理行内属性（src,class,style……）,通常简写为冒号

### v-cloak

为了解决小胡子的显示问题

配合css使用：
有v-cloak行内属性的元素，会有这个样式（属性选择器）
[v-cloak]{display:none;}

原理：
vue还没完成渲染前，执行普通的HTML，css起作用
vue渲染好后，vue自动把这个行内属性移除

### v-once

绑定的数据是一次性的，后面无论数据怎么改变，视图也都不会重新渲染

### v-pre

告诉vue 这个标签及其子标签 都不用vue渲染

可用来提升vue的编码效率

## 指令v-if、v-show和v-model

### v-if

控制当前元素是否在结构中加载
    它控制的是组件的加载和卸载操作=>DOM的增加和删除

v-if='判断体'

对应还有v-else-if/v-else等指令
使用时中间不能穿插其他标签

**拓展**：template

多个元素条件一样，又不想在结构中添加父标签，可以使用template作为父标签，把他们包裹起来

```
let vm=new Vue({
    el:'#app'
    template:'标签',
    data:{……}
}).$mount('#app');
```

在这里template指定当前渲染的模板

是否指定'el'元素
    否-->当调用vm.$mount(el)函数时-->是否指定“template”选项
    是-->是否指定“template”选项
        是-->将template编译到render函数中
        否-->将el外部的HTML作为template编译

### v-show

基于display:none控制元素的隐藏显示

```
v-show='变量'
```

后面跟的是一个布尔类型（其他类型）true和false

### v-model

一般给表单元素设置的，实现表单元素和数据元素之间的相互绑定

v-model='变量'

效果
    视图<=>数据

原理
    先把数据绑定给表单元素，一般把数据赋值给表单元素的value
    监听表单元素的内容改变
    内容改变后，会把对应的数据也改变
    对应的数据改变，视图中所有用到数据的地方都会重新渲染

按照v-model进行分组，每一个框都有自己的value

复选框
```html
<input value="1" type="checkbox" v-model='ary'>
<input value="2" type="checkbox" v-model='ary'>
<input value="3" type="checkbox" v-model='ary'>
```
ary:[1,3]：就是默认选中value为1和3的元素
ary中存放的是 被选中的那些checkbox的值

单选框
```html
<input type="radio" value=‘男’ v-model='sex'>
<input type="radio" value=‘女’ v-model='sex'>
```
sex:'女'  就是默认选中的是value为女的元素
sex存储就是选中的那个radio的value值

下拉框
```html
<select v-model='food'>
    <option value="rice">米</option>
    <option value="app">苹果</option>
    <option value="bana">香蕉</option>
</select>
```
food存储的是里面option对应的value值
food:'rice' 默认展示的是value为rice的值


### v-if 和 v-show 的区别

1.v-if是只加载条件成立的标签，v-show是都加载，同时还设置了display:none属性
2.v-if切换开销大，v-show加载开销大






