# Webpack快速上手
基于webpack3.0测试通过

Webpack 是一个前端资源加载/打包工具。它将根据模块的依赖关系进行静态分析，然后将这些模块按照指定的规则生成对应的静态资源。

![](https://gitee.com/hello_hww/img/raw/master/img1/20200623012942.png)

Webpack 可以将多种静态资源 js、css、less 转换成一个静态文件，减少了页面的请求。

## 安装

安装前，本地环境需要支持 node.js。
淘宝镜像 cnpm

使用 cnpm 安装 webpack：
```shell
cnpm install webpack -g
```

## 创建项目

创建一个目录app：
```shell
mkdir app
```

在app目录下添加hww.js文件，
app/hww.js 文件:
```js
document.write("It works.");
```
在 app 目录下添加 index.html 文件，
app/index.html 文件:
```html
<html>
    <head>
        <meta charset="utf-8">
    </head>
    <body>
        <script type="text/javascript" src="bundle.js" charset="utf-8"></script>
    </body>
</html>
```

接下来使用 webpack 命令来打包：
```shell
webpack runoob1.js bundle.js
```

执行以上命令会编译 runoob1.js 文件并生成bundle.js 文件，成功后输出信息如下所示：

```
Hash: a41c6217554e666594cb
Version: webpack 1.12.13
Time: 50ms
    Asset     Size  Chunks             Chunk Names
bundle.js  1.42 kB       0  [emitted]  main
   [0] ./runoob1.js 29 bytes {0} [built]
```

在浏览器中打开 index.html，输出结果如下：
