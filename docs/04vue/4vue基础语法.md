# 4.vue基础语法

## 定义

每创建一个Vue实例，就相当于创建了一个viewModel监听器

## 使用

先安装或引入Vue，再使用

```js
let 变量(vm)=new Vue({
    el:"选择器",
    data:{
        属性：值
    }
    method:{
        属性：值
    }
})
```

el 
>element 当前监听的视图，基于querySelect获取
相当于告诉Vue只处理当前视图下的内容
不能是html和body这两个元素

data
>当前监听器监听的数据，这些监听的数据会挂挂载到vm实例上，就是说可以vm.xxx=xxx这样操作
数据更改了，视图会自动更新

method
>存放视图中需要使用的方法

注意
>data和methods上的属性都会直接挂载到vm实例上
data和methods中的属性名不能重复
method中方法里面的this都是当前实例，data中的this不是当前实例

## 小胡子语法

mustache

{{数据变量}}

只能编写表达式（变量、赋值表达式、函数执行、三元表达式）
不能写语句（例如：for循环、if判断、switch、var等）
小胡子中最终展示表达式的结果
在胡子语法中绑定的数据值是对象类型时，会基于JSON.stringify将其编译成字符串再展现出来（而不是toString处理的）

存在显示问题：在vue没有加载完成之前，会把{{xxx}}先展示出来

## 视图自动渲染

原理：能自动更新的那个数据其实是被Vue劫持了（对应数据有get和set），没有被劫持的数据在更改后视图不会重新渲染











