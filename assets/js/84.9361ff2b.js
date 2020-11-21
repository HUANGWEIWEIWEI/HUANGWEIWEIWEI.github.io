(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{262:function(t,s,a){"use strict";a.r(s);var e=a(6),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_03前端模块化、组件化、前端工程化的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_03前端模块化、组件化、前端工程化的区别"}},[t._v("#")]),t._v(" 03前端模块化、组件化、前端工程化的区别")]),t._v(" "),a("h2",{attrs:{id:"_1-前端架构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-前端架构"}},[t._v("#")]),t._v(" 1.前端架构")]),t._v(" "),a("p",[t._v("架构的目的：提升质量和效率。")]),t._v(" "),a("p",[t._v("在没有架构的情况下，很容易滥用组件库和各种框架导致项目体积的臃肿，很难和前端新出现的技术接轨，没办法跟上新规范。新技术无法得到引入，技术无法统一，使得团队的整体技术能力无法得到提升，也无法提供技术上的通用解决方案，从团队的角度来考量的话，效率是非常低下的。\n同时，因为技")]),t._v(" "),a("h2",{attrs:{id:"_2-模块化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-模块化"}},[t._v("#")]),t._v(" 2.模块化")]),t._v(" "),a("p",[t._v("模块化侧重"),a("strong",[t._v("功能的封装")]),t._v("，主要是针对Javascript代码，隔离、组织复制的javascript代码，将它封装成一个个具有特定功能的的模块。")]),t._v(" "),a("p",[t._v("模块可以通过传递参数的不同修改这个功能的的相关配置，每个模块都是一个单独的作用域，根据需要调用。")]),t._v(" "),a("p",[t._v("一个模块的实现可以依赖其它模块。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/hello_hww/img/raw/master/img1/20200623011458.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"_3-前端工程化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-前端工程化"}},[t._v("#")]),t._v(" 3.前端工程化")]),t._v(" "),a("p",[t._v("工程化是一种思想而不是某种技术")]),t._v(" "),a("p",[t._v("比如，写一个页面并不是一个文件HTML/CSS/JS全部写在一起，应该把结构、样式和动作分离，用做工程的思维看待和开发自己的项目")]),t._v(" "),a("p",[t._v("工程化就是要减少人的操作，把工作所需要的工具做到的标准化，工作的流程做到的标准化。同时把很多重复的工作交给了代码来做，保证高质，标准统一。")]),t._v(" "),a("p",[t._v("先从工具入手，工程化包括哪些方面：\n• 模块化与组件化: npm, es6,seajs, react/angularjs/Vue\n• 代码版本管理: git\n• ？代码风格管理: jscs, editorconfig\n• 代码编译: babel, less,sass,scss, imgmin, csssprit, inline-svg\n• 代码质量管理 (QA): eslint, mocha\n• 代码构建: webpack\n• 项目脚手架: yeoman\n• ？持续集成/持续交付/持续部署: jenkins\n• ？本地化与国际化")]),t._v(" "),a("p",[t._v("进行工程化：\n• 在配置初始项目文件结构和基本文件依靠命令行（工具）自动生成。\n• 确定代码规范，缩进，换行，以及各种预编译工具less，coffee，保证输出代码的标准一致\n• 对JS文件是否规范化，进行单元测试，不用手动复制到jshint上去检测，现在配置grunt监听文件变动自动检验显示检验结果还可以通过配置构建工具自动刷新浏览器实现文件实时变动监听。\n• 以前压缩合并文件用手工复制到压缩工具然后复制到一个文件里面，现在配置一下 grunt，gulp可以做自动任务，实时编译，并且监测文件改变而做出响应。\n• 以前发布到服务器上，要手动使用 FTP 软件上传，现在也可以用工具自动打包上传。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/hello_hww/img/raw/master/img1/20200623011629.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"_4-规范化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-规范化"}},[t._v("#")]),t._v(" 4.规范化")]),t._v(" "),a("p",[t._v("目录结构要清晰")]),t._v(" "),a("p",[t._v("顶层目录")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/hello_hww/img/raw/master/img1/20200623010235.png",alt:""}})]),t._v(" "),a("p",[t._v("1、src文件夹存放所有的的源代码和其他静态资源（比如图片，iconfont)。\n2、dist文件夹存放所有编译后的代码。\n3、build文件夹存放所有工程化所需要的代码。\n4、document文件夹存放文档。")]),t._v(" "),a("p",[t._v("下面重点看下src目录结构")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/hello_hww/img/raw/master/img1/20200623010342.png",alt:""}})]),t._v(" "),a("p",[t._v("1、app文件夹里的每一个子文件夹代表了一个页面，每个页面所用到的所有静态资源都存放在这个子文件下面（除了引用的公共资源以外），构建的时候，每个子文件夹会生成自己的静态资源供页面引用。\n2、common文件夹里面的所有代码在构建的时候会单独生成js文件和css文件供页面引用。所以一个页面会引用两个js和两个css.里面存放的是每个页面都会用到的一些共用资源。比如触屏端使用了react,那么跟react相关的那些包就会放在common里面。\n3、components文件夹里面存放的是共用组件，每一个子文件夹代表了一个组件。有可能是通用的功能组件，比如分页组件，Loading组件，ModalDialog组件。也有可能是一个通用的业务组件，比如站点通用头部，通用footer，通用分享组件。注意，在其他地方引用这些组件时，是不需要写相对路径的，直接写组件名字就可以了，比如import pager from ‘pager’。这样对使用者更方便。\n4、lib文件夹存放的是通用的js类库。比如检测浏览器用的browserDetect.js,处理日期用的dateUtil.js。同样的，在其他地方需要引入这些JS时，也不需要写相对路径，直接写JS的名字就可以了。比如import{isIE} from ‘browserDetect’。\n5、style文件夹里面存放的一些公用的sass资源。比如function,mixing, variable。其他的sass文件需要引入这些资源的时候，使用方式跟使用通用js一样，直接@import “base.scss”即可。")]),t._v(" "),a("comment-comment")],1)}),[],!1,null,null,null);s.default=r.exports}}]);