# 6.filter过滤器方法
把需要在视图中渲染的数据进行二次或者多次的处理

应该被添加在 JavaScript表达式的尾部,`由“管道"符号指示`

## 过滤器的定义
1、可以在一个组件的选项中定义本地的过滤器
```js
filters: {
    capitalize: function(value){
        if (!value)return ''
        value=value.toString()
        return value.charAt(0).toUpperCase()+value.slice(1)
    }
}
//组件中定义的过滤器
```

2、在创建vue实例之前全局定义过滤器
```js
Vue filter('capitalize', function(value){
if (!value)return ''
value=value.toString()
return value.charAt(0).toUpperCase()+ value.slice(1)
)}

new vue{(
    //...
)}
//全局下定义的过滤器
```
当全局过滤器和局部过速器重名时,会采用局部过滤器

过滤器中的方法没有挂载到实例上 this是window

过滤器方法的名称可以和methods中的方法名称一样,不会冲突;

## 过滤器用在两个地方
1、双花括号插值

{{message|capitalize}}

2、V-bind表达式(从2.10+开始支持)

`<div-bind:id="rawId|formatId"></div>`

过滤器函数总接收表达式的值(之前的操作链的结果)作为第一个参数

拿上面的双花括号插值的表达式举例:

capitalize过滤器函数将会收到message的值作为第一个参数

## 过滤器可以串联

## 单参数

{{message|filterA|filterB}}

filterA被定义为接收单个参数的过滤器函数,表达式 message的值将作为参数传入到函数中

然后继续调用同样被定义为接收单个参数的过滤器函数 filter,将 filterA的结果传递到 filter中。

I message filterA(arg1, arg 2)3)

## 多参数

{{message|filterA('arg1',arg2)}}

filterA被定义为接收三个参数的过滤器函数

其中 message的值作为第一个参数,普通字符串'arg1'作为第二个参数,表达式arg2的值作为第三个参数。