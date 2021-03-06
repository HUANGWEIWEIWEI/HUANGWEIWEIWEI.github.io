# WebPack原理与实践

## 1.Webpack--现代化前端应用的基石

### 1.1Webpack与模块化开发

模块化，可以说是当下最重要的**前端开发范式**之一。随着前端应用的日益复杂化，我们的项目已经逐渐膨胀到了不得不花大量时间去管理的程度。而模块化就是一种最主流的项目组织方式，它通过把复杂的代码按照功能划分为不同的模块单独维护，从而提高开发效率、降低维护成本。

Webpack 表面上是一个构建工具，本质上仍然还是一个模块化打包工具，它通过“万物皆模块”这种设计思想，巧妙地实现了整个前端项目的模块化。

在 Webpack 的理念中，前端项目中的任何资源都可以作为一个模块，任何模块都可以经过 Loader 机制的处理，最终再被打包到一起。

两个核心特性： Loader 机制和插件机制。

前端项目中的任何资源都可以作为一个模块，任何模块都可以经过 Loader 机制的处理，最终再被打包到一起。

它的插件机制形成了非常繁荣的生态，所以造就了它现在“无所不能”的现状，所以让 Webpack 慢慢发展成了现在很多前端开发者眼中的构建系统。

## 2.Webpack背景介绍

### 2.1Webpack究竟解决了什么问题？

#### 2.1.1模块化的演进过程

前端方向落实模块化的几个代表阶段。

##### Stage 1 - 文件划分方式

![](https://gitee.com/hello_hww/img/raw/master/img1/20200707165546.png)

![](https://gitee.com/hello_hww/img/raw/master/img1/20200707171244.png)

##### Stage 2 – 命名空间方式

![](https://gitee.com/hello_hww/img/raw/master/img1/20200707171334.png)

![](https://gitee.com/hello_hww/img/raw/master/img1/20200707171429.png)

##### Stage 3 – IIFE

使用立即执行函数表达式（IIFE，Immediately-Invoked Function Expression）为模块提供私有空间。具体做法是将每个模块成员都放在一个立即执行函数所形成的私有作用域中，对于需要暴露给外部的成员，通过挂到全局对象上的方式实现。

![](https://gitee.com/hello_hww/img/raw/master/img1/20200707171507.png)

![](https://gitee.com/hello_hww/img/raw/master/img1/20200707171537.png)

##### Stage 4 - IIFE 依赖参数

在 IIFE 的基础之上，我们还可以利用 IIFE 参数作为依赖声明使用，这使得每一个模块之间的依赖关系变得更加明显。

![](https://gitee.com/hello_hww/img/raw/master/img1/20200707171710.png)

##### 模块加载的问题
以上 4 个阶段是早期的开发者在没有工具和规范的情况下对模块化的落地方式，这些方式确实解决了很多在前端领域实现模块化的问题，但是仍然存在一些没有解决的问题。

```
<!DOCTYPE html>
<html>
<head>
  <title>Evolution</title>
</head>
<body>
  <script src="https://unpkg.com/jquery"></script>
  <script src="module-a.js"></script>
  <script src="module-b.js"></script>
  <script>
    moduleA.method1()
    moduleB.method1()
  </script>
</body>
</html>
```
最明显的问题就是：模块的加载。在这几种方式中虽然都解决了模块代码的组织问题，但模块加载的问题却被忽略了，我们都是通过 script 标签的方式直接在页面中引入的这些模块，这意味着模块的加载并不受代码的控制，时间久了维护起来会十分麻烦。试想一下，如果你的代码需要用到某个模块，如果 HTML 中忘记引入这个模块，又或是代码中移除了某个模块的使用，而 HTML 还忘记删除该模块的引用，都会引起很多问题和不必要的麻烦。

更为理想的方式应该是在页面中引入一个 JS 入口文件，其余用到的模块可以通过代码控制，按需加载进来。

#### 2.1.2模块化规范的出现

除了模块加载的问题以外，目前这几种通过约定实现模块化的方式，不同的开发者在实施的过程中会出现一些细微的差别，因此，为了统一不同开发者、不同项目之间的差异，我们就需要制定一个行业标准去规范模块化的实现方式。

再接合我们刚刚提到的模块加载的问题，我们现在的需求就是两点：

一个统一的模块化标准规范
一个可以自动加载模块的基础库
提到模块化规范，你可能会想到 CommonJS 规范，它是 Node.js 中所遵循的模块规范，该规范约定，一个文件就是一个模块，每个模块都有单独的作用域，通过 module.exports 导出成员，再通过 require 函数载入模块。现如今的前端开发者应该对其有所了解，但是如果我们想要在浏览器端直接使用这个规范，那就会出现一些新的问题。

如果你对 Node.js 的模块加载机制有所了解，那么你应该知道，CommonJS 约定的是以同步的方式加载模块，因为 Node.js 执行机制是在启动时加载模块，执行过程中只是使用模块，所以这种方式不会有问题。但是如果要在浏览器端使用同步的加载模式，就会引起大量的同步模式请求，导致应用运行效率低下。

所以在早期制定前端模块化标准时，并没有直接选择 CommonJS 规范，而是专门为浏览器端重新设计了一个规范，叫做 AMD （ Asynchronous Module Definition） 规范，即异步模块定义规范。同期还推出了一个非常出名的库，叫做 Require.js，它除了实现了 AMD 模块化规范，本身也是一个非常强大的模块加载器。

在 AMD 规范中约定每个模块通过 define() 函数定义，这个函数默认可以接收两个参数，第一个参数是一个数组，用于声明此模块的依赖项；第二个参数是一个函数，参数与前面的依赖项一一对应，每一项分别对应依赖项模块的导出成员，这个函数的作用就是为当前模块提供一个私有空间。如果在当前模块中需要向外部导出成员，可以通过 return 的方式实现。

![](https://gitee.com/hello_hww/img/raw/master/img1/20200707172438.png)

除此之外，Require.js 还提供了一个 require() 函数用于自动加载模块，用法与 define() 函数类似，区别在于 require() 只能用来载入模块，而  define() 还可以定义模块。当 Require.js 需要加载一个模块时，内部就会自动创建 script 标签去请求并执行相应模块的代码。

![](https://gitee.com/hello_hww/img/raw/master/img1/20200707173120.png)

目前绝大多数第三方库都支持 AMD 规范，但是它使用起来相对复杂，而且当项目中模块划分过于细致时，就会出现同一个页面对 js 文件的请求次数过多的情况，从而导致效率降低。在当时的环境背景下，AMD 规范为前端模块化提供了一个标准，但这只是一种妥协的实现方式，并不能成为最终的解决方案。

同期出现的规范还有淘宝的 Sea.js，只不过它实现的是另外一个标准，叫作 CMD，这个标准类似于 CommonJS，在使用上基本和 Require.js 相同，可以算上是重复的轮子。但随着前端技术的发展，Sea.js 后来也被 Require.js 兼容了。如果你感兴趣可以课后了解一下 Seajs官网。

![](https://gitee.com/hello_hww/img/raw/master/img1/20200707173145.png)

#### 2.1.3模块化的标准规范
尽管上面介绍的这些方式和标准都已经实现了模块化，但是都仍然存在一些让开发者难以接受的问题。

随着技术的发展，JavaScript 的标准逐渐走向完善，可以说，如今的前端模块化已经发展得非常成熟了，而且对前端模块化规范的最佳实践方式也基本实现了统一。

在 Node.js 环境中，我们遵循 CommonJS 规范来组织模块。
在浏览器环境中，我们遵循 ES Modules 规范。

![](https://gitee.com/hello_hww/img/raw/master/img1/20200707173322.png)

而且在最新的 Node.js 提案中表示，Node 环境也会逐渐趋向于 ES Modules 规范，也就是说作为现阶段的前端开发者，应该重点掌握 ES Modules 规范。

因为 CommonJS 属于内置模块系统，所以在 Node.js 环境中使用时不存在环境支持问题，只需要直接遵循标准使用 require 和 module 即可。

但是对于 ES Modules 规范来说，情况会相对复杂一些。我们知道 ES Modules 是 ECMAScript 2015（ES6）中才定义的模块系统，也就是说它是近几年才制定的标准，所以肯定会存在环境兼容的问题。在这个标准刚推出的时候，几乎所有主流的浏览器都不支持。但是随着 Webpack 等一系列打包工具的流行，这一规范才开始逐渐被普及。

经过 5 年的迭代， ES Modules 已发展成为现今最主流的前端模块化标准。相比于 AMD 这种社区提出的开发规范，ES Modules 是在语言层面实现的模块化，因此它的标准更为完善也更为合理。而且目前绝大多数浏览器都已经开始能够原生支持 ES Modules 这个特性了，所以说在未来几年，它还会有更好的发展，短期内应该不会有新的轮子出现了。

综上所述，如何在不同的环境中去更好的使用 ES Modules 将是你重点考虑的问题。

ES Modules 特性
那对于 ES Modules 的学习，可以从两个维度入手。首先，你需要了解它作为一个规范或者说标准，到底约定了哪些特性和语法；其次，你需要学习如何通过一些工具和方案去解决运行环境兼容带来的问题。

针对 ES Modules 本身的一些特性本课时不做赘述，你可以参考：

[MDN 官方的详细资料](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Modules)
[ECMAScript 官方详细资料](http://www.ecma-international.org/ecma-262/6.0/#sec-modules)

![](https://gitee.com/hello_hww/img/raw/master/img1/20200707173458.png)

#### 2.1.4模块打包工具的出现
模块化可以帮助我们更好地解决复杂应用开发过程中的代码组织问题，但是随着模块化思想的引入，我们的前端应用又会产生了一些新的问题，比如：

首先，我们所使用的 ES Modules 模块系统本身就存在环境兼容问题。尽管现如今主流浏览器的最新版本都支持这一特性，但是目前还无法保证用户的浏览器使用情况。所以我们还需要解决兼容问题。
其次，模块化的方式划分出来的模块文件过多，而前端应用又运行在浏览器中，每一个文件都需要单独从服务器请求回来。零散的模块文件必然会导致浏览器的频繁发送网络请求，影响应用的工作效率。
最后，谈一下在实现 JS 模块化的基础上的发散。随着应用日益复杂，在前端应用开发过程中不仅仅只有 JavaScript 代码需要模块化，HTML 和 CSS 这些资源文件也会面临需要被模块化的问题。而且从宏观角度来看，这些文件也都应该看作前端应用中的一个模块，只不过这些模块的种类和用途跟 JavaScript 不同。
对于开发过程而言，模块化肯定是必要的，所以我们需要在前面所说的模块化实现的基础之上引入更好的方案或者工具，去解决上面提出的 3 个问题，让我们的应用在开发阶段继续享受模块化带来的优势，又不必担心模块化对生产环境所产生的影响。

接下来我们先对这个更好的方案或者工具提出一些设想：

第一，它需要具备编译代码的能力，也就是将我们开发阶段编写的那些包含新特性的代码转换为能够兼容大多数环境的代码，解决我们所面临的环境兼容问题。

![](https://gitee.com/hello_hww/img/raw/master/img1/20200707173715.png)

第二，能够将散落的模块再打包到一起，这样就解决了浏览器频繁请求模块文件的问题。这里需要注意，只是在开发阶段才需要模块化的文件划分，因为它能够帮我们更好地组织代码，到了实际运行阶段，这种划分就没有必要了。

![](https://gitee.com/hello_hww/img/raw/master/img1/20200707173741.png)

第三，它需要支持不同种类的前端模块类型，也就是说可以将开发过程中涉及的样式、图片、字体等所有资源文件都作为模块使用，这样我们就拥有了一个统一的模块化方案，所有资源文件的加载都可以通过代码控制，与业务代码统一维护，更为合理。

![](https://gitee.com/hello_hww/img/raw/master/img1/20200707173822.png)

针对上面第一、第二个设想，我们可以借助 Gulp 之类的构建系统配合一些编译工具和插件去实现，但是对于第三个可以对不同种类资源进行模块化的设想，就很难通过这种方式去解决了，所以就有了我们接下来要介绍的主题：前端模块打包工具WebPack。

## 3.如何使用 Webpack 实现模块化打包？

对模块化打包方案或工具的设想或者说是诉求：

能够将散落的模块打包到一起；

能够编译代码中的新特性；

能够支持不同种类的前端资源模块。

目前，前端领域有一些工具能够很好的满足以上这 3 个需求，其中最为主流的就是 Webpack、Parcel 和 Rollup，我们以 Webpack 为例：

Webpack 作为一个模块打包工具，本身就可以解决模块化代码打包的问题，将零散的 JavaScript 代码打包到一个 JS 文件中。

对于有环境兼容问题的代码，Webpack 可以在打包过程中通过 Loader 机制对其实现编译转换，然后再进行打包。

对于不同类型的前端模块类型，Webpack 支持在 JavaScript 中以模块化的方式载入任意类型的资源文件，例如，我们可以通过 Webpack 实现在 JavaScript 中加载 CSS 文件，被加载的 CSS 文件将会通过 style 标签的方式工作。

除此之外，Webpack 还具备代码拆分的能力，它能够将应用中所有的模块按照我们的需要分块打包。这样一来，就不用担心全部代码打包到一起，产生单个文件过大，导致加载慢的问题。我们可以把应用初次加载所必需的模块打包到一起，其他的模块再单独打包，等到应用工作过程中实际需要用到某个模块，再异步加载该模块，实现增量加载，或者叫作渐进式加载，非常适合现代化的大型 Web 应用。

当然，除了 Webpack，其他的打包工具也都类似，总之，所有的打包工具都是以实现模块化为目标，让我们可以在开发阶段更好的享受模块化带来的优势，同时又不必担心模块化在生产环境中产生新的问题。

### 3.1 Webpack 快速上手

![](https://gitee.com/hello_hww/img/raw/master/img1/20200707174433.png)

![](https://gitee.com/hello_hww/img/raw/master/img1/20200707174528.png)

![](https://gitee.com/hello_hww/img/raw/master/img1/20200707174723.png)

![](https://gitee.com/hello_hww/img/raw/master/img1/20200707174811.png)

![](https://gitee.com/hello_hww/img/raw/master/img1/20200707175045.png)

这个命令在执行的过程中，Webpack 会自动从 src/index.js 文件开始打包，然后根据代码中的模块导入操作，自动将所有用到的模块代码打包到一起。

完成之后，控制台会提示：顺着 index.js 有两个 JS 文件被打包到了一起。与之对应的就是项目的根目录下多出了一个 dist 目录，我们的打包结果就存放在这个目录下的 main.js 文件中，具体操作如下图所示：

![](https://gitee.com/hello_hww/img/raw/master/img1/20200707175205.png)

这里我们回到 index.html 中修改引入文件的路径，由于打包后的代码就不会再有 import 和 export 了，所以我们可以删除 type="module"。再次回到浏览器中，查看这个页面，这时我们的代码仍然可以正常工作，index.html 的代码如下所示：

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Webpack - 快速上手</title>
</head>
<body>
  <script src="dist/main.js"></script>
</body>
</html>
```
我们也可以将 Webpack 命令定义到 npm scripts 中，这样每次使用起来会更加方便，具体如下：
```js
{
  "name": "01-getting-started",
  "version": "0.1.0",
  "main": "n/a",
  "author": "zce <w@zce.me> (https://zce.me)",
  "license": "MIT",
  "scripts": {
    "build": "webpack"
  },
  "devDependencies": {
    "webpack": "^4.42.1",
    "webpack-cli": "^3.3.11"
  }
}
```
对于 Webpack 最基本的使用，总结下来就是：先安装 webpack 相关的 npm 包，然后使用 webpack-cli 所提供的命令行工具进行打包。

### 3.2配置 Webpack 的打包过程

![](https://gitee.com/hello_hww/img/raw/master/img1/20200707175627.png)

![](https://gitee.com/hello_hww/img/raw/master/img1/20200707175725.png)

![](https://gitee.com/hello_hww/img/raw/master/img1/20200707180145.png)

![](https://gitee.com/hello_hww/img/raw/master/img1/20200707180303.png)

由于 Webpack 支持的配置有很多，详细的文档可以在 Webpack 的官网中找到：https://webpack.js.org/configuration/#options

### 3.3让配置文件支持智能提示

VSCode 对于代码的自动提示是根据成员的类型推断出来的，换句话说，如果 VSCode 知道当前变量的类型，就可以给出正确的智能提示。即便你没有使用 TypeScript 这种类型友好的语言，也可以通过类型注释的方式去标注变量的类型。

默认 VSCode 并不知道 Webpack 配置对象的类型，我们通过 import 的方式导入 Webpack 模块中的 Configuration 类型，然后根据类型注释的方式将变量标注为这个类型，这样我们在编写这个对象的内部结构时就可以有正确的智能提示了，具体代码如下所示：

![](https://gitee.com/hello_hww/img/raw/master/img1/20200707180531.png)

我们添加的 import 语句只是为了导入 Webpack 配置对象的类型，这样做的目的是为了标注 config 对象的类型，从而实现智能提示。在配置完成后一定要记得注释掉这段辅助代码，因为在 Node.js 环境中默认还不支持 import 语句，如果执行这段代码会出现错误。

![](https://gitee.com/hello_hww/img/raw/master/img1/20200707180633.png)

没有智能提示的效果
![](https://s0.lgstatic.com/i/image3/M01/8B/55/Cgq2xl6dX_6AS601AGOWR9tvy7w230.gif)


加上类型标注实现智能提示的效果
![](https://s0.lgstatic.com/i/image3/M01/05/10/CgoCgV6dX8WAT4jvAJhTWS1vldA516.gif)

使用 import 语句导入 Configuration 类型的方式固然好理解，但是在不同的环境中还是会有各种各样的问题，例如我们这里在 Node.js 环境中，就必须要额外注释掉这个导入类型的语句，才能正常工作。

所以我一般的做法是直接在类型注释中使用 import 动态导入类型，具体代码如下：

```js
// ./webpack.config.js
/** @type {import('webpack').Configuration} */
const config = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js'
  }
}
module.exports = config

```
这种方式同样也可以实现载入类型，而且相比于在代码中通过 import 语句导入类型更为方便，也更为合理。

不过需要注意一点，这种导入类型的方式并不是 ES Modules 中的 Dynamic Imports，而是 TypeScript 中提供特性。虽然我们这里只是一个 JavaScript 文件，但是在 VSCode 中的类型系统都是基于 TypeScript 的，所以可以直接按照这种方式使用，详细信息你可以参考这种 import-types 的文档。

其次，这种 @type 类型注释的方式是基于 JSDoc 实现的。JSDoc 中类型注释的用法还有很多，详细可以参考[官方文档中对 @type 标签的介绍](https://jsdoc.app/tags-type.html)。

### 3.4Webpack工作模式

Webpack 4 新增了一个工作模式的用法，这种用法大大简化了 Webpack 配置的复杂程度。你可以把它理解为针对不同环境的几组预设配置：

production 模式下，启动内置优化插件，自动优化打包结果，打包速度偏慢；

development 模式下，自动优化打包速度，添加一些调试过程中的辅助插件；

none 模式下，运行最原始的打包，不做任何额外处理。

针对工作模式的选项，如果你没有配置一个明确的值，打包过程中命令行终端会打印一个对应的配置警告。在这种情况下 Webpack 将默认使用 production 模式去工作。

production 模式下 Webpack 内部会自动启动一些优化插件，例如，自动压缩打包后的代码。这对实际生产环境是非常友好的，但是打包的结果就无法阅读了。

修改 Webpack 工作模式的方式有两种：

通过 CLI --mode 参数传入；

通过配置文件设置 mode 属性。

上述三种 Webpack 工作模式的详细差异以在官方文档中查看：https://webpack.js.org/configuration/mode/

### 3.5打包结果运行原理
最后，我们来一起学习 Webpack 打包后生成的 bundle.js 文件，深入了解 Webpack 是如何把这些模块合并到一起，而且还能正常工作的。

为了更好的理解打包后的代码，我们先将 Webpack 工作模式设置为 none，这样 Webpack 就会按照最原始的状态进行打包，所得到的结果更容易理解和阅读。

按照 none 模式打包完成后，我们打开最终生成的 bundle.js 文件，如下图所示：

![](https://gitee.com/hello_hww/img/raw/master/img1/20200707212442.png)

先把代码全部折叠起来，以便于了解整体的结构，如下图所示：

>VSCode 中折叠代码的快捷键是 Ctrl + K，Ctrl + 0 （macOS：Command + K，Command + 0）

![](https://gitee.com/hello_hww/img/raw/master/img1/20200707212527.png)

整体生成的代码其实就是一个立即执行函数，这个函数是 Webpack 工作入口（webpackBootstrap），它接收一个 modules 参数，调用时传入了一个数组。

展开这个数组，里面的元素均是参数列表相同的函数。这里的函数对应的就是我们源代码中的模块，也就是说每个模块最终被包裹到了这样一个函数中，从而实现模块私有作用域，如下图所示：

![](https://gitee.com/hello_hww/img/raw/master/img1/20200707212703.png)

我们再来展开 Webpack 工作入口函数，如下图所示：

![](https://gitee.com/hello_hww/img/raw/master/img1/20200707212757.png)

这个函数内部并不复杂，而且注释也很清晰，最开始定义了一个 installedModules 对象用于存放或者缓存加载过的模块。紧接着定义了一个 require 函数，顾名思义，这个函数是用来加载模块的。再往后就是在 require 函数上挂载了一些其他的数据和工具函数，这些暂时不用关心。

这个函数执行到最后调用了 require 函数，传入的模块 id 为 0，开始加载模块。模块 id 实际上就是模块数组的元素下标，也就是说这里开始加载源代码中所谓的入口模块，如下图所示：

![](https://gitee.com/hello_hww/img/raw/master/img1/20200707212817.png)

为了更好的理解 bundle.js 的执行过程，你可以把它运行到浏览器中，然后通过 Chrome 的 Devtools 单步调试一下。调试过程

重要：理解它的工作机制和原理！！

## 4.通过 Loader 实现特殊资源加载




