(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{227:function(s,t,a){"use strict";a.r(t);var n=a(6),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"_1-计算机网络"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-计算机网络"}},[s._v("#")]),s._v(" 1.计算机网络")]),s._v(" "),a("h2",{attrs:{id:"_1-1网络基础知识"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1网络基础知识"}},[s._v("#")]),s._v(" 1.1网络基础知识")]),s._v(" "),a("h3",{attrs:{id:"_1-1-1-计算机网络概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-1-计算机网络概念"}},[s._v("#")]),s._v(" 1.1.1 计算机网络概念")]),s._v(" "),a("p",[s._v("是一个将分散的、具有独立功能的计算机系统，通过通信设备与线路连接起来，由功能完善的软件实现资源共享和信息传递的系统。")]),s._v(" "),a("h3",{attrs:{id:"_1-1-2功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-2功能"}},[s._v("#")]),s._v(" 1.1.2功能")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("数据通信\n资源共享\n负载均衡\n高可靠性\n")])])]),a("h3",{attrs:{id:"_1-1-3分类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-3分类"}},[s._v("#")]),s._v(" 1.1.3分类")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("按通讯距离分  \n\t局域网 Local Area Network  \n\t    以太网  \n\t\t\t以太网的帧格式  \n\t\t\t\t其中目的地址和源地址指的是MAC地址，即设备的物理地址。MAC地址用于标示网卡，每个网卡都具有唯一的MAC 地址\n                当在同一个局域网中，主机A需要给主机B发送消息时，主机A将以太网帧发出，此时局域网中所有主机均可收到这个桢，主机中的网卡接收到以太网桢后，会将目的MAC地址和自己的MAC地址进行比较,如果不相同就会丢弃，如果相同则会接收，此时则Ｂ主机就收到了Ａ的消息。\n                其最后面是CRC循环冗余码，用于差错控制，即检验帧的正确性\n                在以太网协议中，目的地址分为三种单播地址、广播地址、多播地址，其中单播地址如上面Ａ给Ｂ主机发送，其接收者为一个，并且其目的地址的最高字节的低位为０\n\t\t\t以太网的特点\n\t\t\t\t无连接。发送方和接收方不建立连接。\n\t\t\t\t不可靠。接收方不向发送方进行确认，差错帧直接丢弃。\n\t\t\t跟以太网相关的拓扑结构有星型和总线型\n\t\t\tCSMA/CD协议\n\t\t\t\t每一个站在发送数据之前以及发送数据时以及发送数据时都要检测一下总线上是否有其他计算机在发送数据。\n\t\t\t\t是总线型，半双工网络（半双工是指允许数据在两个方向上传输,但是,在某一时刻,只允许数据在一个方向上传输）\n\t\t无线局域网WLAN\n\t\t\t网络结构\n            看下图\n\t\t\t上图的AP就是通信基站，如果基站覆盖的移动设备可以直接通过基站来通信，如果是不同基站的移动设备，不仅仅要通过自己的基站传输数据，还需要基站和基站之间传输数据，来达到两个在不同基站覆盖范围内的无线设备通信。\n\t城域网 Metropolitan Area Network\n\t广域网 Wide Area Network\n按网络拓扑结构分\n\t总线型\n\t星型\n\t环型\n\t树型\n\t分布式\n按信息交换方式分\n按通信介质分\n按传输带宽分\n按使用范围分\n按通讯传播方式分\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://gitee.com/hello_hww/img/raw/master/img1/20200721170257.png",alt:""}})]),s._v(" "),a("h3",{attrs:{id:"_1-1-4衡量计算机网络的性能的指标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-4衡量计算机网络的性能的指标"}},[s._v("#")]),s._v(" 1.1.4衡量计算机网络的性能的指标")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("速率\n\t速率就是数据传输（数据是指0和1）的速率，比如你用迅雷下载，1兆每秒，来衡量目前数据传输的快慢。它是计算机网络中最重要的一个性能指标。\n带宽\n\t在计算机网络中，网络带宽是指在单位时间（一般指的是1秒钟）内能传输的数据量，比如说你家的电信网络是100兆比特，意思是，一秒内最大的传输速率是100兆比特。\n吞吐量\n\t吞吐量表示在单位时间内通过某个网络（或信道、接口）的数据量。\n时延\n\t时延是指数据（报文/分组/比特流）从网络（或链路）的一端传送到另一端所需的时间。单位是s。\n\t发送时延\n\t传播时延\n\t排队时延\n\t处理时延\n\t往返时间\n\t时延带宽积--是指传播时延乘以带宽\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("h2",{attrs:{id:"_1-1-5-osi参考模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-5-osi参考模型"}},[s._v("#")]),s._v(" 1.1.5 OSI参考模型!!!")]),s._v(" "),a("h2",{attrs:{id:"_1-2-http"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-http"}},[s._v("#")]),s._v(" 1.2 HTTP")]),s._v(" "),a("h2",{attrs:{id:"_1-3-https"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-https"}},[s._v("#")]),s._v(" 1.3 HTTPS")]),s._v(" "),a("h2",{attrs:{id:"_1-4-tcp-ip"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-tcp-ip"}},[s._v("#")]),s._v(" 1.4 TCP/IP")]),s._v(" "),a("h2",{attrs:{id:"_1-5-网络安全"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-网络安全"}},[s._v("#")]),s._v(" 1.5 网络安全")])])}),[],!1,null,null,null);t.default=r.exports}}]);