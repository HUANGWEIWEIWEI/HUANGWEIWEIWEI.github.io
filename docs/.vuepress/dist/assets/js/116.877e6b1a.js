(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{292:function(a,t,r){"use strict";r.r(t);var s=r(6),_=Object(s.a)({},(function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"《2-深入浅出node-js》"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#《2-深入浅出node-js》"}},[a._v("#")]),a._v(" 《2.深入浅出Node.js》")]),a._v(" "),r("p",[a._v("本书从不同的视角介绍了 Node 内在的特点和结构。")]),a._v(" "),r("p",[a._v("由首章Node 介绍为索引，涉及Node 的各个方面，")]),a._v(" "),r("p",[a._v("主要内容包含")]),a._v(" "),r("p",[r("code",[a._v("模块机制")]),a._v("的揭示、")]),a._v(" "),r("p",[r("code",[a._v("异步I/O")]),a._v(" 实现原理的展现、")]),a._v(" "),r("p",[r("code",[a._v("异步编程")]),a._v("的探讨、")]),a._v(" "),r("p",[r("code",[a._v("内存控制")]),a._v("的介绍、")]),a._v(" "),r("p",[a._v("二进制数据"),r("code",[a._v("Buffer")]),a._v(" 的细节、")]),a._v(" "),r("p",[a._v("Node 中的"),r("code",[a._v("网络编程")]),a._v("基础、")]),a._v(" "),r("p",[a._v("Node 中的"),r("code",[a._v("Web 开发")]),a._v("、")]),a._v(" "),r("p",[r("code",[a._v("进程间的消息传递")]),a._v("、")]),a._v(" "),r("p",[r("code",[a._v("Node 测试")]),a._v("以及")]),a._v(" "),r("p",[a._v("通过Node "),r("code",[a._v("构建产品")]),a._v("需要的注意事项。")]),a._v(" "),r("p",[a._v("最后的附录介绍了Node 的安装、调试、编码规范和NPM 仓库等事宜。")]),a._v(" "),r("h2",{attrs:{id:"第-1-章-node简介"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#第-1-章-node简介"}},[a._v("#")]),a._v(" 第 1 章　Node简介")]),a._v(" "),r("h3",{attrs:{id:"_1-1-node的诞生历程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-node的诞生历程"}},[a._v("#")]),a._v(" 1.1　Node的诞生历程")]),a._v(" "),r("p",[r("img",{attrs:{src:"https://gitee.com/hello_hww/img/raw/master/img1/20200808174524.png",alt:""}})]),a._v(" "),r("h3",{attrs:{id:"_1-2-node的命名与起源"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-node的命名与起源"}},[a._v("#")]),a._v(" 1.2　Node的命名与起源")]),a._v(" "),r("p",[a._v("在Node的官方网站(http://nodejs.org)之外,Node具有很多别称: Nodes、 Nodes、 Node.js等。\nNode名字的来由,其实跟它的起源是有密切关系的。")]),a._v(" "),r("p",[r("img",{attrs:{src:"https://gitee.com/hello_hww/img/raw/master/img1/20200810194322.png",alt:""}})]),a._v(" "),r("p",[r("img",{attrs:{src:"https://gitee.com/hello_hww/img/raw/master/img1/20200810194349.png",alt:""}})]),a._v(" "),r("h3",{attrs:{id:"_1-3-node给javascript带来的意义"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-node给javascript带来的意义"}},[a._v("#")]),a._v(" 1.3　Node给JavaScript带来的意义")]),a._v(" "),r("p",[r("img",{attrs:{src:"https://gitee.com/hello_hww/img/raw/master/img1/20200810194534.png",alt:""}})]),a._v(" "),r("p",[r("img",{attrs:{src:"https://gitee.com/hello_hww/img/raw/master/img1/20200810194623.png",alt:""}})]),a._v(" "),r("h3",{attrs:{id:"_1-4-node的特点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-node的特点"}},[a._v("#")]),a._v(" 1.4　Node的特点")]),a._v(" "),r("h3",{attrs:{id:"_1-5-node的应用场景"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-node的应用场景"}},[a._v("#")]),a._v(" 1.5　Node的应用场景")]),a._v(" "),r("h3",{attrs:{id:"_1-6-node的使用者"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-node的使用者"}},[a._v("#")]),a._v(" 1.6　Node的使用者")]),a._v(" "),r("h3",{attrs:{id:"_1-7-参考资源"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-7-参考资源"}},[a._v("#")]),a._v(" 1.7　参考资源")]),a._v(" "),r("h2",{attrs:{id:"第-2-章-模块机制"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#第-2-章-模块机制"}},[a._v("#")]),a._v(" 第 2 章　模块机制")]),a._v(" "),r("h3",{attrs:{id:"_2-1-commonjs规范"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-commonjs规范"}},[a._v("#")]),a._v(" 2.1　CommonJS规范")]),a._v(" "),r("h3",{attrs:{id:"_2-2-node的模块实现"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-node的模块实现"}},[a._v("#")]),a._v(" 2.2　Node的模块实现")]),a._v(" "),r("h3",{attrs:{id:"_2-3-核心模块"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-核心模块"}},[a._v("#")]),a._v(" 2.3　核心模块")]),a._v(" "),r("h3",{attrs:{id:"_2-4-c-c-扩展模块"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-c-c-扩展模块"}},[a._v("#")]),a._v(" 2.4　C/C++扩展模块")]),a._v(" "),r("h3",{attrs:{id:"_2-5-模块调用栈"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-模块调用栈"}},[a._v("#")]),a._v(" 2.5　模块调用栈")]),a._v(" "),r("h3",{attrs:{id:"_2-6-包与npm"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-包与npm"}},[a._v("#")]),a._v(" 2.6　包与NPM")]),a._v(" "),r("h3",{attrs:{id:"_2-7-前后端共用模块"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-7-前后端共用模块"}},[a._v("#")]),a._v(" 2.7　前后端共用模块")]),a._v(" "),r("h3",{attrs:{id:"_2-8-总结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-8-总结"}},[a._v("#")]),a._v(" 2.8　总结")]),a._v(" "),r("h3",{attrs:{id:"_2-9-参考资源"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-9-参考资源"}},[a._v("#")]),a._v(" 2.9　参考资源")]),a._v(" "),r("h2",{attrs:{id:"第-3-章-异步i-o"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#第-3-章-异步i-o"}},[a._v("#")]),a._v(" 第 3 章　异步I/O")]),a._v(" "),r("h3",{attrs:{id:"_3-1-为什么要异步i-o"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-为什么要异步i-o"}},[a._v("#")]),a._v(" 3.1　为什么要异步I/O")]),a._v(" "),r("h3",{attrs:{id:"_3-2-异步i-o实现现状"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-异步i-o实现现状"}},[a._v("#")]),a._v(" 3.2　异步I/O实现现状")]),a._v(" "),r("h3",{attrs:{id:"_3-3-node的异步i-o"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-node的异步i-o"}},[a._v("#")]),a._v(" 3.3　Node的异步I/O")]),a._v(" "),r("h3",{attrs:{id:"_3-4-非i-o的异步api"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-非i-o的异步api"}},[a._v("#")]),a._v(" 3.4　非I/O的异步API")]),a._v(" "),r("h3",{attrs:{id:"_3-5-事件驱动与高性能服务器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-事件驱动与高性能服务器"}},[a._v("#")]),a._v(" 3.5　事件驱动与高性能服务器")]),a._v(" "),r("h3",{attrs:{id:"_3-6-总结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-6-总结"}},[a._v("#")]),a._v(" 3.6　总结")]),a._v(" "),r("h3",{attrs:{id:"_3-7-参考资源"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-7-参考资源"}},[a._v("#")]),a._v(" 3.7　参考资源")]),a._v(" "),r("h2",{attrs:{id:"第-4-章-异步编程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#第-4-章-异步编程"}},[a._v("#")]),a._v(" 第 4 章　异步编程")]),a._v(" "),r("h3",{attrs:{id:"_4-1-函数式编程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-函数式编程"}},[a._v("#")]),a._v(" 4.1　函数式编程")]),a._v(" "),r("h3",{attrs:{id:"_4-2-异步编程的优势与难点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-异步编程的优势与难点"}},[a._v("#")]),a._v(" 4.2　异步编程的优势与难点")]),a._v(" "),r("h3",{attrs:{id:"_4-3-异步编程解决方案"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-异步编程解决方案"}},[a._v("#")]),a._v(" 4.3　异步编程解决方案")]),a._v(" "),r("h3",{attrs:{id:"_4-4-异步并发控制"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-异步并发控制"}},[a._v("#")]),a._v(" 4.4　异步并发控制")]),a._v(" "),r("h3",{attrs:{id:"_4-5-总结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-总结"}},[a._v("#")]),a._v(" 4.5　总结")]),a._v(" "),r("h3",{attrs:{id:"_4-6-参考资源"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-6-参考资源"}},[a._v("#")]),a._v(" 4.6　参考资源")]),a._v(" "),r("h2",{attrs:{id:"第-5-章-内存控制"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#第-5-章-内存控制"}},[a._v("#")]),a._v(" 第 5 章　内存控制")]),a._v(" "),r("h3",{attrs:{id:"_5-1-v8的垃圾回收机制与内存限制"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-v8的垃圾回收机制与内存限制"}},[a._v("#")]),a._v(" 5.1　V8的垃圾回收机制与内存限制")]),a._v(" "),r("h3",{attrs:{id:"_5-2-高效使用内存"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-高效使用内存"}},[a._v("#")]),a._v(" 5.2　高效使用内存")]),a._v(" "),r("h3",{attrs:{id:"_5-3-内存指标"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-内存指标"}},[a._v("#")]),a._v(" 5.3　内存指标")]),a._v(" "),r("h3",{attrs:{id:"_5-4-内存泄漏"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-内存泄漏"}},[a._v("#")]),a._v(" 5.4　内存泄漏")]),a._v(" "),r("h3",{attrs:{id:"_5-5-内存泄漏排查"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-5-内存泄漏排查"}},[a._v("#")]),a._v(" 5.5　内存泄漏排查")]),a._v(" "),r("h3",{attrs:{id:"_5-6-大内存应用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-6-大内存应用"}},[a._v("#")]),a._v(" 5.6　大内存应用")]),a._v(" "),r("h3",{attrs:{id:"_5-7-总结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-7-总结"}},[a._v("#")]),a._v(" 5.7　总结")]),a._v(" "),r("h3",{attrs:{id:"_5-8-参考资源"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-8-参考资源"}},[a._v("#")]),a._v(" 5.8　参考资源")]),a._v(" "),r("h2",{attrs:{id:"第-6-章-理解buffer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#第-6-章-理解buffer"}},[a._v("#")]),a._v(" 第 6 章　理解Buffer")]),a._v(" "),r("h3",{attrs:{id:"_6-1-buffer结构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-buffer结构"}},[a._v("#")]),a._v(" 6.1　Buffer结构")]),a._v(" "),r("h3",{attrs:{id:"_6-2-buffer的转换"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-buffer的转换"}},[a._v("#")]),a._v(" 6.2　Buffer的转换")]),a._v(" "),r("h3",{attrs:{id:"_6-3-buffer的拼接"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-buffer的拼接"}},[a._v("#")]),a._v(" 6.3　Buffer的拼接")]),a._v(" "),r("h3",{attrs:{id:"_6-4-buffer与性能"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_6-4-buffer与性能"}},[a._v("#")]),a._v(" 6.4　Buffer与性能")]),a._v(" "),r("h3",{attrs:{id:"_6-5-总结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_6-5-总结"}},[a._v("#")]),a._v(" 6.5　总结")]),a._v(" "),r("h3",{attrs:{id:"_6-6-参考资源"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_6-6-参考资源"}},[a._v("#")]),a._v(" 6.6　参考资源")]),a._v(" "),r("h2",{attrs:{id:"第-7-章-网络编程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#第-7-章-网络编程"}},[a._v("#")]),a._v(" 第 7 章　网络编程")]),a._v(" "),r("h3",{attrs:{id:"_7-1-构建tcp服务"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-构建tcp服务"}},[a._v("#")]),a._v(" 7.1　构建TCP服务")]),a._v(" "),r("h3",{attrs:{id:"_7-2-构建udp服务"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_7-2-构建udp服务"}},[a._v("#")]),a._v(" 7.2　构建UDP服务")]),a._v(" "),r("h3",{attrs:{id:"_7-3-构建http服务"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_7-3-构建http服务"}},[a._v("#")]),a._v(" 7.3　构建HTTP服务")]),a._v(" "),r("h3",{attrs:{id:"_7-4-构建websocket服务"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_7-4-构建websocket服务"}},[a._v("#")]),a._v(" 7.4　构建WebSocket服务")]),a._v(" "),r("h3",{attrs:{id:"_7-5-网络服务与安全"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_7-5-网络服务与安全"}},[a._v("#")]),a._v(" 7.5　网络服务与安全")]),a._v(" "),r("h3",{attrs:{id:"_7-6-总结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_7-6-总结"}},[a._v("#")]),a._v(" 7.6　总结")]),a._v(" "),r("h3",{attrs:{id:"_7-7-参考资源"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_7-7-参考资源"}},[a._v("#")]),a._v(" 7.7　参考资源")]),a._v(" "),r("h2",{attrs:{id:"第-8-章-构建web应用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#第-8-章-构建web应用"}},[a._v("#")]),a._v(" 第 8 章　构建Web应用")]),a._v(" "),r("h3",{attrs:{id:"_8-1-基础功能"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_8-1-基础功能"}},[a._v("#")]),a._v(" 8.1　基础功能")]),a._v(" "),r("h3",{attrs:{id:"_8-2-数据上传"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_8-2-数据上传"}},[a._v("#")]),a._v(" 8.2　数据上传")]),a._v(" "),r("h3",{attrs:{id:"_8-3-路由解析"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_8-3-路由解析"}},[a._v("#")]),a._v(" 8.3　路由解析")]),a._v(" "),r("h3",{attrs:{id:"_8-4-中间件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_8-4-中间件"}},[a._v("#")]),a._v(" 8.4　中间件")]),a._v(" "),r("h3",{attrs:{id:"_8-5-页面渲染"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_8-5-页面渲染"}},[a._v("#")]),a._v(" 8.5　页面渲染")]),a._v(" "),r("h3",{attrs:{id:"_8-6-总结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_8-6-总结"}},[a._v("#")]),a._v(" 8.6　总结")]),a._v(" "),r("h3",{attrs:{id:"_8-7-参考资源"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_8-7-参考资源"}},[a._v("#")]),a._v(" 8.7　参考资源")]),a._v(" "),r("h2",{attrs:{id:"第-9-章-玩转进程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#第-9-章-玩转进程"}},[a._v("#")]),a._v(" 第 9 章　玩转进程")]),a._v(" "),r("h3",{attrs:{id:"_9-1-服务模型的变迁"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_9-1-服务模型的变迁"}},[a._v("#")]),a._v(" 9.1　服务模型的变迁")]),a._v(" "),r("h3",{attrs:{id:"_9-2-多进程架构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_9-2-多进程架构"}},[a._v("#")]),a._v(" 9.2　多进程架构")]),a._v(" "),r("h3",{attrs:{id:"_9-3-集群稳定之路"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_9-3-集群稳定之路"}},[a._v("#")]),a._v(" 9.3　集群稳定之路")]),a._v(" "),r("h3",{attrs:{id:"_9-4-cluster模块"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_9-4-cluster模块"}},[a._v("#")]),a._v(" 9.4　Cluster模块")]),a._v(" "),r("h3",{attrs:{id:"_9-5-总结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_9-5-总结"}},[a._v("#")]),a._v(" 9.5　总结")]),a._v(" "),r("h3",{attrs:{id:"_9-6-参考资源"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_9-6-参考资源"}},[a._v("#")]),a._v(" 9.6　参考资源")]),a._v(" "),r("h2",{attrs:{id:"第-10-章-测试"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#第-10-章-测试"}},[a._v("#")]),a._v(" 第 10 章　测试")]),a._v(" "),r("h3",{attrs:{id:"_10-1-单元测试"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_10-1-单元测试"}},[a._v("#")]),a._v(" 10.1　单元测试")]),a._v(" "),r("h3",{attrs:{id:"_10-2-性能测试"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_10-2-性能测试"}},[a._v("#")]),a._v(" 10.2　性能测试")]),a._v(" "),r("h3",{attrs:{id:"_10-3-总结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_10-3-总结"}},[a._v("#")]),a._v(" 10.3　总结")]),a._v(" "),r("h3",{attrs:{id:"_10-4-参考资源"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_10-4-参考资源"}},[a._v("#")]),a._v(" 10.4　参考资源")]),a._v(" "),r("h2",{attrs:{id:"第-11-章-产品化"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#第-11-章-产品化"}},[a._v("#")]),a._v(" 第 11 章　产品化")]),a._v(" "),r("h3",{attrs:{id:"_11-1-项目工程化"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_11-1-项目工程化"}},[a._v("#")]),a._v(" 11.1　项目工程化")]),a._v(" "),r("h3",{attrs:{id:"_11-2-部署流程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_11-2-部署流程"}},[a._v("#")]),a._v(" 11.2　部署流程")]),a._v(" "),r("h3",{attrs:{id:"_11-3-性能"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_11-3-性能"}},[a._v("#")]),a._v(" 11.3　性能")]),a._v(" "),r("h3",{attrs:{id:"_11-4-日志"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_11-4-日志"}},[a._v("#")]),a._v(" 11.4　日志")]),a._v(" "),r("h3",{attrs:{id:"_11-5-监控报警"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_11-5-监控报警"}},[a._v("#")]),a._v(" 11.5　监控报警")]),a._v(" "),r("h3",{attrs:{id:"_11-6-稳定性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_11-6-稳定性"}},[a._v("#")]),a._v(" 11.6　稳定性")]),a._v(" "),r("h3",{attrs:{id:"_11-7-异构共存"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_11-7-异构共存"}},[a._v("#")]),a._v(" 11.7　异构共存")]),a._v(" "),r("h3",{attrs:{id:"_11-8-总结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_11-8-总结"}},[a._v("#")]),a._v(" 11.8　总结")]),a._v(" "),r("h3",{attrs:{id:"_11-9-参考资源"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_11-9-参考资源"}},[a._v("#")]),a._v(" 11.9　参考资源")]),a._v(" "),r("h2",{attrs:{id:"附录-a-安装node"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#附录-a-安装node"}},[a._v("#")]),a._v(" 附录 A　安装Node")]),a._v(" "),r("h3",{attrs:{id:"a-1-windows系统下的node安装"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#a-1-windows系统下的node安装"}},[a._v("#")]),a._v(" A.1　Windows系统下的Node安装")]),a._v(" "),r("h3",{attrs:{id:"a-2-mac系统下node的安装"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#a-2-mac系统下node的安装"}},[a._v("#")]),a._v(" A.2　Mac系统下Node的安装")]),a._v(" "),r("h3",{attrs:{id:"a-3-linux系统下node的安装"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#a-3-linux系统下node的安装"}},[a._v("#")]),a._v(" A.3　Linux系统下Node的安装")]),a._v(" "),r("h3",{attrs:{id:"a-4-总结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#a-4-总结"}},[a._v("#")]),a._v(" A.4　总结")]),a._v(" "),r("h3",{attrs:{id:"a-5-参考资源"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#a-5-参考资源"}},[a._v("#")]),a._v(" A.5　参考资源")]),a._v(" "),r("h2",{attrs:{id:"附录-b-调试node"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#附录-b-调试node"}},[a._v("#")]),a._v(" 附录 B　调试Node")]),a._v(" "),r("h3",{attrs:{id:"b-1-debugger"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#b-1-debugger"}},[a._v("#")]),a._v(" B.1　Debugger")]),a._v(" "),r("h3",{attrs:{id:"b-2-node-inspector"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#b-2-node-inspector"}},[a._v("#")]),a._v(" B.2　Node Inspector")]),a._v(" "),r("h3",{attrs:{id:"b-3-总结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#b-3-总结"}},[a._v("#")]),a._v(" B.3　总结")]),a._v(" "),r("h2",{attrs:{id:"附录-c-node编码规范"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#附录-c-node编码规范"}},[a._v("#")]),a._v(" 附录 C　Node编码规范")]),a._v(" "),r("h3",{attrs:{id:"c-1-根源"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#c-1-根源"}},[a._v("#")]),a._v(" C.1　根源")]),a._v(" "),r("h3",{attrs:{id:"c-2-编码规范"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#c-2-编码规范"}},[a._v("#")]),a._v(" C.2　编码规范")]),a._v(" "),r("h3",{attrs:{id:"c-3-最佳实践"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#c-3-最佳实践"}},[a._v("#")]),a._v(" C.3　最佳实践")]),a._v(" "),r("h3",{attrs:{id:"c-4-总结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#c-4-总结"}},[a._v("#")]),a._v(" C.4　总结")]),a._v(" "),r("h3",{attrs:{id:"c-5-参考资源"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#c-5-参考资源"}},[a._v("#")]),a._v(" C.5　参考资源")]),a._v(" "),r("h2",{attrs:{id:"附录-d-搭建局域npm仓库"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#附录-d-搭建局域npm仓库"}},[a._v("#")]),a._v(" 附录 D　搭建局域NPM仓库")]),a._v(" "),r("h3",{attrs:{id:"d-1-npm仓库的安装"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#d-1-npm仓库的安装"}},[a._v("#")]),a._v(" D.1　NPM仓库的安装")]),a._v(" "),r("h3",{attrs:{id:"d-2-高阶应用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#d-2-高阶应用"}},[a._v("#")]),a._v(" D.2　高阶应用")]),a._v(" "),r("h3",{attrs:{id:"d-3-总结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#d-3-总结"}},[a._v("#")]),a._v(" D.3　总结")]),a._v(" "),r("h3",{attrs:{id:"d-4-参考资源"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#d-4-参考资源"}},[a._v("#")]),a._v(" D.4　参考资源")])])}),[],!1,null,null,null);t.default=_.exports}}]);