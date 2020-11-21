(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{273:function(t,s,a){"use strict";a.r(s);var n=a(6),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_4-restclient"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-restclient"}},[t._v("#")]),t._v(" 4.RESTClient")]),t._v(" "),a("h2",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),a("p",[t._v("Rest-client 是一种与"),a("a",{attrs:{href:"/18%E5%AE%9E%E6%88%98%E9%97%AE%E9%A2%98/16.postman"}},[t._v("Postman")]),t._v("类似的工具，但是它更加轻量以及它可以很好地保留接口测试数据，因为本身它就是一个文本文件，便于保存。来个栗子瞅瞅它有多轻量级")]),t._v(" "),a("p",[t._v("在测试"),a("a",{attrs:{href:"/18%E5%AE%9E%E6%88%98%E9%97%AE%E9%A2%98/6.RESTful"}},[t._v("REST API")]),t._v("的时候，想必大家都会有不同的工具选择。如果是基于CLI的话，大家应该会选择cURL。如果是GUI工具的话，相信很多人都会使用Postman。REST Client插件也许是比Postman更好的选择。")]),t._v(" "),a("p",[t._v("相比于Postman，REST Client支持了 cURL 和 RFC 2616 两种标准来调用REST API。")]),t._v(" "),a("h2",{attrs:{id:"rfc-2616"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rfc-2616"}},[t._v("#")]),t._v(" RFC 2616")]),t._v(" "),a("p",[t._v("下面就是一个符合RFC 2616标准的POST请求")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("POST")]),t._v(" http"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("dummy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("restapiexample"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("api"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("v1"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("create "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HTTP")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v("\ncontent"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" application"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("json\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hendry"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"salary"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"61888"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"age"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"26"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("p",[t._v("我们在VS Code新建一个以.http或者.rest 结尾的文件，填入你的HTTP请求，点击Send Request，或者右键选择Send Request，或者直接用快捷键 Ctrl+Alt+R ，你的REST API就执行了，然后API Response就会显示在右边区域。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/hello_hww/img/raw/master/img1/20200812081741.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"curl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#curl"}},[t._v("#")]),t._v(" cURL")]),t._v(" "),a("p",[t._v("下面是一个符合cURL标准的POST请求")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("curl "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("X")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("POST")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://dummy.restapiexample.com/api/v1/create"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("d "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World"')]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("同样地，也能通过REST Client在VS Code里一键运行。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/hello_hww/img/raw/master/img1/20200812083238.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"http语言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http语言"}},[t._v("#")]),t._v(" HTTP语言")]),t._v(" "),a("p",[t._v("REST Client 添加了HTTP语言的定义，支持把以 .http 或者 .rest 结尾的文件当作HTTP语言，提供了"),a("code",[t._v("语法高亮，代码自动补全，代码注释")]),t._v("等功能。")]),t._v(" "),a("p",[t._v("看到这里，你也许会问，我直接用Postman在GUI上填一填REST API的各个字段不就行了，干嘛还要写一个HTTP的文件。其实直接有一个HTTP文件的最大好处，就是方便分享。比如说，你可以把HTTP文件文件放到GitHub，这样的话，所有开发或者使用项目的人都能复用这个HTTP文件了。也极大的方便管理你的所有REST API。")]),t._v(" "),a("p",[t._v("更方便的是，通过###分隔符，"),a("code",[t._v("同一个HTTP文件里可以涵盖多个HTTP请求")]),t._v("。不像Postman，不同的HTTP请求需要放在不同的tab里。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/hello_hww/img/raw/master/img1/20200812083633.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"代码生成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码生成"}},[t._v("#")]),t._v(" 代码生成")]),t._v(" "),a("p",[t._v("“代码生成”也是REST Client里一个很方便的功能，你可以方便地通过 "),a("code",[t._v("Generate Code Snippet")]),t._v(" 命令来把HTTP请求生成出不同编程语言的代码：JavaScript, Python, C, C#, Java, PHP, Go, Ruby, Swift等等主流语言。")]),t._v(" "),a("h2",{attrs:{id:"高阶功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#高阶功能"}},[t._v("#")]),t._v(" 高阶功能")]),t._v(" "),a("ul",[a("li",[t._v("Authentication：REST Client支持了"),a("code",[t._v("Basic Auth，SSL Client Certificates，Azure Active Directory")]),t._v("等多种验证机制")]),t._v(" "),a("li",[t._v("Cookies的支持")]),t._v(" "),a("li",[t._v("支持 HTTP 3xx 的重定向")]),t._v(" "),a("li",[t._v("变量的支持：环境变量，文件变量，预定义的系统变量等等")])]),t._v(" "),a("p",[t._v("下面就是使用文件变量的一个例子，这样在不同的HTTP请求中，变量就能共享了。其中，"),a("code",[t._v("{{$datetime iso8601}")]),t._v(" 是预定义的系统变量")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("@hostname "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("example"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com\n@port "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),t._v("\n@host "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("hostname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("port"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n@contentType "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" application"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("json\n@createdAt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("$datetime iso8601"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n###\n\n@name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" hello\n\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GET")]),t._v(" https"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("host"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("authors"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HTTP")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v("\n\n###\n\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PATCH")]),t._v(" https"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("host"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("authors"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HTTP")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v("\nContent"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("contentType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"content"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo bar"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"created_at"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("createdAt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br")])]),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/54266685",target:"_blank",rel:"https://dignified.cn"}},[t._v("知乎[VSCode插件推荐] REST Client"),a("OutboundLink")],1)]),t._v(" "),a("comment-comment")],1)}),[],!1,null,null,null);s.default=e.exports}}]);