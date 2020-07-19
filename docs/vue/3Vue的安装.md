# 3.Vue的安装

#### 兼容性
不支持IE8及以下版本，因为Vue使用了IE8无法模拟的ES5特性。
支持所有兼容ES5的浏览器。

#### Vue Devtools
在浏览器上安装 Vue Devtools。用以审查和调试 Vue 应用。

## 直接用 &lt;script&gt; 引入

### 下载

直接下载并用 &lt;script&gt; 标签引入，Vue 会被注册为一个全局变量。

开发版本：包含完整的警告和调试模式
https://cn.vuejs.org/js/vue.js

生产版本：删除了警告，33.30KB min+gzip
https://cn.vuejs.org/js/vue.min.js

### CDN

使用最新版本：
```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```

链接到一个明确的版本号和构建文件：
```html
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.11"></script>
```

兼容 ES Module 的构建文件：
```html
<script type="module">
  import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'
</script>
```

以上是开发时候用的，生产环境的把 vue.js 换成 vue.min.js

## NPM

在用Vue构建大型应用时推荐使用NPM安装NPM能很好地和诸如webpack或Browserify模块打包器配合使用。同时Vue也提供配套工具来开发单文件组件。

```shell
# 最新稳定版
$ npm install vue
```

## 命令行工具 (CLI)

为单页面应用 (SPA) 快速搭建繁杂的脚手架。
它为现代前端工作流提供了 batteries-included 的构建设置。
只需要几分钟的时间就可以运行起来并带有热重载、保存时 lint 校验，以及生产环境可用的构建版本。

## 对不同构建版本的解释

在 NPM 包的 dist/ 目录会找到很多不同的 Vue.js 构建版本。这里列出了它们之间的差别：

	UMD	CommonJS	ES Module (基于构建工具使用)	ES Module (直接用于浏览器)
完整版	vue.js	vue.common.js	vue.esm.js	vue.esm.browser.js
只包含运行时版	vue.runtime.js	vue.runtime.common.js	vue.runtime.esm.js	-
完整版 (生产环境)	vue.min.js	-	-	vue.esm.browser.min.js
只包含运行时版 (生产环境)	vue.runtime.min.js	-	-	-






