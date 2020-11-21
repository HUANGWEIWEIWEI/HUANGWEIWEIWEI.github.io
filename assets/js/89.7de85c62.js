(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{267:function(t,s,a){"use strict";a.r(s);var r=a(6),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_01前端安全概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_01前端安全概述"}},[t._v("#")]),t._v(" 01前端安全概述")]),t._v(" "),a("p",[a("a",{attrs:{href:"X.%E5%89%8D%E7%AB%AF%E5%AE%89%E5%85%A8%E7%9B%B8%E5%85%B3%E9%9D%A2%E8%AF%95%E9%A2%98"}},[t._v("前端安全相关面试题")])]),t._v(" "),a("h2",{attrs:{id:"xss"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xss"}},[t._v("#")]),t._v(" XSS")]),t._v(" "),a("h3",{attrs:{id:"xss是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xss是什么"}},[t._v("#")]),t._v(" XSS是什么")]),t._v(" "),a("p",[t._v("跨站脚本攻击。cross-site scripting。本质：客户端代码注入漏洞，通常注入代码是js脚本。")]),t._v(" "),a("p",[t._v("XSS是一种经常出现在web应用中的计算机安全漏洞，它允许恶意web用户将代码植入到提供给其它用户使用的页面中。"),a("br"),t._v("\n比如这些代码包括HTML代码和客户端脚本。攻击者利用XSS漏洞旁路掉访问控制——例如同源策略(same origin policy)。"),a("br"),t._v("\n这种类型的漏洞由于被黑客用来编写危害性更大的网络钓鱼(Phishing)攻击而变得广为人知。"),a("br"),t._v("\n对于跨站脚本攻击，黑客界共识是：跨站脚本攻击是新型的“缓冲区溢出攻击“，而JavaScript是新型的“ShellCode”。")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[t._v("示例：\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cookie"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h3",{attrs:{id:"xss特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xss特点"}},[t._v("#")]),t._v(" XSS特点")]),t._v(" "),a("p",[t._v("能注入恶意的HTML/JavaScript代码到用户浏览的网页上，从而达到Cookie资料窃取、会话劫持、钓鱼欺骗等攻击。\n攻击代码不一定（非要）在 "),a("code",[t._v("<script><\/script>")]),t._v(" 中")]),t._v(" "),a("h3",{attrs:{id:"原因"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原因"}},[t._v("#")]),t._v(" 原因")]),t._v(" "),a("ul",[a("li",[t._v("Web浏览器本身的设计不安全。浏览器能解析和执行JS等代码，但是不会判断该数据和程序代码是否恶意。")]),t._v(" "),a("li",[t._v("输入和输出是Web应用程序最基本的交互，而且网站的交互功能越来越丰富。如果在这过程中没有做好安全防护，很容易会出现XSS漏洞。")]),t._v(" "),a("li",[t._v("程序员水平参差不齐，而且大都没有过正规的安全培训，没有相关的安全意识。")]),t._v(" "),a("li",[t._v("XSS攻击手段灵活多变。")])]),t._v(" "),a("h3",{attrs:{id:"危害"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#危害"}},[t._v("#")]),t._v(" 危害")]),t._v(" "),a("ul",[a("li",[t._v("盗取各类用户帐号，如机器登录帐号、用户网银帐号、各类管理员帐号")]),t._v(" "),a("li",[t._v("控制企业数据，包括读取、篡改、添加、删除企业敏感数据的能力")]),t._v(" "),a("li",[t._v("盗窃企业重要的具有商业价值的资料")]),t._v(" "),a("li",[t._v("非法转账")]),t._v(" "),a("li",[t._v("强制发送电子邮件")]),t._v(" "),a("li",[t._v("网站挂马")]),t._v(" "),a("li",[t._v("控制受害者机器向其它网站发起攻击")])]),t._v(" "),a("h3",{attrs:{id:"如何防范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何防范"}},[t._v("#")]),t._v(" 如何防范")]),t._v(" "),a("ul",[a("li",[t._v("将重要的cookie标记为http only, 这样的话Javascript 中的document.cookie语句就不能获取到cookie了.")]),t._v(" "),a("li",[t._v("表单数据规定值的类型，例如：年龄应为只能为int、name只能为字母数字组合。。。。")]),t._v(" "),a("li",[t._v("对数据进行Html Encode 处理")]),t._v(" "),a("li",[t._v("过滤或移除特殊的Html标签， 例如:"),a("code",[t._v("<script>, <iframe> , &lt; for <, &gt; for >, &quot for")])]),t._v(" "),a("li",[t._v('过滤JavaScript 事件的标签。例如 "onclick=", "onfocus" 等等。')])]),t._v(" "),a("p",[t._v("参考资料："),a("br")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.cnblogs.com/phpstudy2015-6/p/6767032.html",target:"_blank",rel:"https://dignified.cn"}},[t._v("https://www.cnblogs.com/phpstudy2015-6/p/6767032.html"),a("OutboundLink")],1),a("br"),t._v(" "),a("a",{attrs:{href:"https://www.cnblogs.com/443855539-wind/p/6055816.html",target:"_blank",rel:"https://dignified.cn"}},[t._v("https://www.cnblogs.com/443855539-wind/p/6055816.html"),a("OutboundLink")],1),a("br"),t._v(" "),a("a",{attrs:{href:"https://baike.baidu.com/item/XSS%E6%94%BB%E5%87%BB/954065?fr=aladdin",target:"_blank",rel:"https://dignified.cn"}},[t._v("https://baike.baidu.com/item/XSS攻击/954065?fr=aladdin"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"csrf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#csrf"}},[t._v("#")]),t._v(" CSRF")]),t._v(" "),a("p",[t._v("CSRF（Cross-site request forgery）跨站请求伪造，也被称为“One Click Attack”或者Session Riding，通常缩写为CSRF或者XSRF，是一种对网站的恶意利用。尽管听起来像跨站脚本（XSS），但它与XSS非常不同，XSS利用站点内的信任用户，而CSRF则通过伪装来自受信任用户的请求来利用受信任的网站。与XSS攻击相比，CSRF攻击往往不大流行（因此对其进行防范的资源也相当稀少）和难以防范，所以被认为比XSS更具危险性。")]),t._v(" "),a("h3",{attrs:{id:"csrf特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#csrf特点"}},[t._v("#")]),t._v(" CSRF特点")]),t._v(" "),a("ul",[a("li",[t._v("攻击一般发起在第三方网站，而不是被攻击的网站。被攻击的网站无法防止攻击发生。")]),t._v(" "),a("li",[t._v("攻击利用受害者在被攻击网站的登录凭证，冒充受害者提交操作；而不是直接窃取数据。")]),t._v(" "),a("li",[t._v("整个过程攻击者并不能获取到受害者的登录凭证，仅仅是“冒用”。")]),t._v(" "),a("li",[t._v("跨站请求可以用各种方式：图片URL、超链接、CORS、Form提交等等。部分请求方式可以直接嵌入在第三方论坛、文章中，难以进行追踪。")])]),t._v(" "),a("h3",{attrs:{id:"防御"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#防御"}},[t._v("#")]),t._v(" 防御")]),t._v(" "),a("ul",[a("li",[t._v("通过referer、token、Cookie 的 SameSite 属性来检测用户提交。")]),t._v(" "),a("li",[t._v("尽量不要在页面的链接中暴露用户隐私信息。")]),t._v(" "),a("li",[t._v("对于用户修改删除等操作最好都使用post操作 。")]),t._v(" "),a("li",[t._v("避免全站通用的cookie，严格设置cookie的域。")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.im/post/5bc009996fb9a05d0a055192",target:"_blank",rel:"https://dignified.cn"}},[t._v("前端安全系列之二：如何防止CSRF攻击？"),a("OutboundLink")],1)]),t._v(" "),a("comment-comment")],1)}),[],!1,null,null,null);s.default=e.exports}}]);