(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{305:function(t,e,_){"use strict";_.r(e);var r=_(6),v=Object(r.a)({},(function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"_6-restful"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-restful"}},[t._v("#")]),t._v(" 6.RESTful")]),t._v(" "),_("p",[t._v("Representational State Transfer")]),t._v(" "),_("p",[t._v("表现层状态转化")]),t._v(" "),_("p",[t._v('"表现层"其实指的是"资源"（Resources）的"表现层"。')]),t._v(" "),_("p",[t._v('互联网通信协议HTTP协议，是一个无状态协议。这意味着，所有的状态都保存在服务器端。因此，如果客户端想要操作服务器，必须通过某种手段，让服务器端发生"状态转化"（State Transfer）。而这种转化是建立在表现层之上的，所以就是"表现层状态转化"。')]),t._v(" "),_("p",[t._v("RESTFUL是一种网络应用程序的设计风格和开发方式，基于HTTP，可以使用XML格式定义或JSON格式定义。")]),t._v(" "),_("p",[t._v("RESTFUL适用于移动互联网厂商作为业务使能接口的场景，实现"),_("code",[t._v("第三方OTT调用移动网络资源")]),t._v("的功能，动作类型为新增、变更、删除所调用资源。")]),t._v(" "),_("h2",{attrs:{id:"_1-相关定义"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-相关定义"}},[t._v("#")]),t._v(" 1 相关定义")]),t._v(" "),_("h3",{attrs:{id:"▪-rest"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#▪-rest"}},[t._v("#")]),t._v(" ▪ REST")]),t._v(" "),_("p",[t._v("述了一个架构样式的网络系统，比如 web 应用程序。它首次出现在 2000 年 Roy Fielding 的博士论文中，Roy Fielding是 HTTP 规范的主要编写者之一。在目前"),_("code",[t._v("主流的三种Web服务交互方案")]),t._v("中，"),_("code",[t._v("REST")]),t._v("相比于"),_("code",[t._v("SOAP")]),t._v("（Simple Object Access protocol，简单对象访问协议）以及"),_("code",[t._v("XML-RPC")]),t._v("更加简单明了，无论是对URL的处理还是对Payload的编码，REST都倾向于用更加简单轻量的方法设计和实现。值得注意的是REST并没有一个明确的标准，而更像是"),_("code",[t._v("一种设计的风格")]),t._v("。")]),t._v(" "),_("h3",{attrs:{id:"▪-原则条件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#▪-原则条件"}},[t._v("#")]),t._v(" ▪ 原则条件")]),t._v(" "),_("p",[t._v("REST 指的是一组架构约束条件和原则。满足这些约束条件和原则的应用程序或设计就是 RESTful。")]),t._v(" "),_("p",[t._v("Web 应用程序最重要的 REST 原则是，客户端和服务器之间的交互在请求之间是无状态的。从客户端到服务器的每个请求都必须包含理解请求所必需的信息。如果服务器在请求之间的任何时间点重启，客户端不会得到通知。此外，无状态请求可以由任何可用服务器回答，这十分适合云计算之类的环境。客户端可以缓存数据以改进性能。")]),t._v(" "),_("p",[t._v("在服务器端，应用程序状态和功能可以分为各种资源。资源是一个有趣的概念实体，它向客户端公开。")]),t._v(" "),_("p",[t._v("资源的例子有：应用程序对象、数据库记录、算法等等。")]),t._v(" "),_("p",[t._v("每个资源都使用 URI (Universal Resource Identifier) 得到一个唯一的地址。"),_("RouterLink",{attrs:{to:"/17生词本/缩写.html#uri-统一资源标识符"}},[t._v("URI")])],1),t._v(" "),_("p",[t._v("所有资源都共享统一的接口，以便在客户端和服务器之间传输状态。使用的是标准的 HTTP 方法，比如 GET、PUT、POST 和 DELETE。Hypermedia 是应用程序状态的引擎，资源表示通过超链接互联。")]),t._v(" "),_("h2",{attrs:{id:"_2-特点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-特点"}},[t._v("#")]),t._v(" 2 特点")]),t._v(" "),_("p",[t._v("1、每一个URI代表1种资源；"),_("br"),t._v("\n2、客户端使用GET、POST、PUT、DELETE4个表示操作方式的动词对服务端资源进行操作：GET用来获取资源，POST用来新建资源（也可以用于更新资源），PUT用来更新资源，DELETE用来删除资源；"),_("br"),t._v("\n3、通过操作资源的表现形式来操作资源；"),_("br"),t._v("\n4、资源的表现形式是XML或者HTML；"),_("br"),t._v("\n5、客户端与服务端之间的交互在请求之间是无状态的，从客户端到服务端的每个请求都必须包含理解请求所必需的信息。")]),t._v(" "),_("h2",{attrs:{id:"_3-restful与-rpc"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-restful与-rpc"}},[t._v("#")]),t._v(" 3 RESTful与 RPC")]),t._v(" "),_("p",[t._v("使用 RPC 样式架构构建的基于 SOAP 的 Web 服务成为实现 SOA 最常用的方法。RPC 样式的 Web 服务客户端将一个装满数据的信封（包括方法和参数信息）通过 HTTP 发送到服务器。服务器打开信封并使用传入参数执行指定的方法。方法的结果打包到一个信封并作为响应发回客户端。客户端收到响应并打开信封。每个对象都有自己独特的方法以及仅公开一个 URI 的 RPC 样式 Web 服务，URI 表示单个端点。它忽略 HTTP 的大部分特性且仅支持 POST 方法。")]),t._v(" "),_("p",[t._v("由于轻量级以及通过 HTTP 直接传输数据的特性，Web 服务的 RESTful 方法已经成为最常见的替代方法。可以使用各种语言（比如 Java 程序、Perl、Ruby、Python、PHP 和 Javascript[包括 Ajax]）实现客户端。RESTful Web 服务通常可以通过自动客户端或代表用户的应用程序访问。但是，这种服务的简便性让用户能够与之直接交互，使用它们的 Web 浏览器构建一个 GET URL 并读取返回的内容。")]),t._v(" "),_("p",[t._v("在 REST 样式的 Web 服务中，每个资源都有一个地址。资源本身都是方法调用的目标，方法列表对所有资源都是一样的。这些方法都是标准方法，包括 HTTP GET、POST、PUT、DELETE，还可能包括 HEAD 和 OPTIONS。")]),t._v(" "),_("p",[t._v("在 RPC 样式的架构中，关注点在于方法，而在 REST 样式的架构中，关注点在于资源 —— 将使用标准方法检索并操作信息片段（使用表示的形式）。资源表示形式在表示形式中使用超链接互联。")]),t._v(" "),_("p",[t._v("Leonard Richardson 和 Sam Ruby 在他们的著作 RESTful Web Services 中引入了术语 REST-RPC 混合架构。REST-RPC 混合 Web 服务不使用信封包装方法、参数和数据，而是直接通过 HTTP 传输数据，这与 REST 样式的 Web 服务是类似的。但是它不使用标准的 HTTP 方法操作资源。它在 HTTP 请求的 URI 部分存储方法信息。好几个知名的 Web 服务，比如 Yahoo 的 Flickr API 和 Delicious API 都使用这种混合架构。")]),t._v(" "),_("h2",{attrs:{id:"_4-restful架构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-restful架构"}},[t._v("#")]),t._v(" 4 RESTful架构")]),t._v(" "),_("p",[t._v("RESTful架构是对MVC架构改进后所形成的一种架构，通过使用事先定义好的接口与不同的服务联系起来。在RESTful架构中，浏览器使用POST，DELETE，PUT和GET四种请求方式分别对指定的URL资源进行增删改查操作。因此，RESTful是通过URI实现对资源的管理及访问，具有扩展性强、结构清晰的特点。")]),t._v(" "),_("p",[t._v("RESTful架构将服务器分成前端服务器和后端服务器两部分，前端服务器为用户提供无模型的视图；后端服务器为前端服务器提供接口。浏览器向前端服务器请求视图，通过视图中包含的AJAX函数发起接口请求获取模型。")]),t._v(" "),_("p",[t._v("项目开发引入RESTful架构，利于团队并行开发。在RESTful架构中，将多数HTTP请求转移到前端服务器上，降低服务器的负荷，使视图获取后端模型失败也能呈现。但RESTful架构却不适用于所有的项目，当项目比较小时无需使用RESTful架构，项目变得更加复杂。")]),t._v(" "),_("p",[_("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2011/09/restful.html",target:"_blank",rel:"https://dignified.cn"}},[t._v("阮一峰"),_("OutboundLink")],1)]),t._v(" "),_("p",[_("a",{attrs:{href:"https://www.runoob.com/w3cnote/restful-architecture.html",target:"_blank",rel:"https://dignified.cn"}},[t._v("菜鸟教程"),_("OutboundLink")],1)]),t._v(" "),_("comment-comment")],1)}),[],!1,null,null,null);e.default=v.exports}}]);