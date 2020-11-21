(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{299:function(s,t,a){"use strict";a.r(t);var n=a(6),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"_17-dignifiedfilm开发经验"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_17-dignifiedfilm开发经验"}},[s._v("#")]),s._v(" 17.dignifiedfilm开发经验")]),s._v(" "),a("h2",{attrs:{id:"_1-初始化项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-初始化项目"}},[s._v("#")]),s._v(" 1.初始化项目")]),s._v(" "),a("p",[s._v("git clone 一个初始项目到本地")]),s._v(" "),a("ul",[a("li",[s._v("开发一个项目先从服务端和数据库开始")])]),s._v(" "),a("p",[s._v("全局安装nest命令，再用nest初始化一个项目")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("yarn global add @nestjs/cli\nnest new project-name\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[a("a",{attrs:{href:"https://docs.nestjs.com/",target:"_blank",rel:"https://dignified.cn"}},[s._v("nest官文"),a("OutboundLink")],1)])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/hello_hww/img/raw/master/img1/20200813130945.png",alt:""}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/hello_hww/img/raw/master/img1/20200813131124.png",alt:""}})]),s._v(" "),a("ul",[a("li",[s._v("服务端分为两个：给管理端用的和给客户端用的接口")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/hello_hww/img/raw/master/img1/20200813131336.png",alt:""}})]),s._v(" "),a("p",[s._v("使用nest的monorepo单体仓库模式。可以把多个服务端放到这个仓库中。")]),s._v(" "),a("ul",[a("li",[s._v("管理端要增删改查的接口。客户端要查的接口。但他们都用同一个数据库。数据模型也一样。")])]),s._v(" "),a("p",[s._v("在server里创建一个名为admin的子项目")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("cd server\nnest g app admin\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("项目目录结构：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/hello_hww/img/raw/master/img1/20200813132207.png",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"_2-启动服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-启动服务"}},[s._v("#")]),s._v(" 2.启动服务")]),s._v(" "),a("ul",[a("li",[s._v("在分成了子项目模式之后，启动子项目这样写")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("nest start -w admin\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("-w是watch，监听变化，自动重启")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/hello_hww/img/raw/master/img1/20200813133154.png",alt:""}})]),s._v(" "),a("p",[s._v("改监听到3001端口，控制台打印出来")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/hello_hww/img/raw/master/img1/20200813133546.png",alt:""}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/hello_hww/img/raw/master/img1/20200813133623.png",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"_3-建项目的数据库模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-建项目的数据库模块"}},[s._v("#")]),s._v(" 3.建项目的数据库模块")]),s._v(" "),a("p",[s._v("新建个终端，创建一个db库，它是一个公用模块")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("cd server\nnest g lib db\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("默认前缀是@app，不好记，换成@libs")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/hello_hww/img/raw/master/img1/20200813134143.png",alt:""}})]),s._v(" "),a("p",[s._v("这个数据库模块独立于两个子项目，后面引用就行。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/hello_hww/img/raw/master/img1/20200813134450.png",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"_4-连接数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-连接数据库"}},[s._v("#")]),s._v(" 4.连接数据库")]),s._v(" "),a("p",[s._v("安装nest数据库模块")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("yarn add nestjs-typegoose @typegoose/typegoose\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[a("p",[s._v("typegoose更适合ts的项目，以后都不会用mongoose")])]),s._v(" "),a("li",[a("p",[s._v("nestjs-typegoose这个包是在nest使用，@typegoose/typegoose这个包是基于ts的一个封装")])])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/hello_hww/img/raw/master/img1/20200813135327.png",alt:""}})]),s._v(" "),a("p",[s._v("在db.module.ts里面写连接")]),s._v(" "),a("ul",[a("li",[s._v("先安装这个才有提示")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("yarn add mongoose @types/mongoose\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("mongoose是连接数据库的模块，@types/mongoose表示在ts里面针对mongoose的一些类型定义的提示")])]),s._v(" "),a("p",[s._v("用TypegooseModule.forRoot去连接数据库，传一些参数防报错")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/hello_hww/img/raw/master/img1/20200813140723.png",alt:""}})]),s._v(" "),a("p",[s._v("关掉再重启服务")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("nest start -w admin\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("如果出现"),a("code",[s._v("MongooseServerSelectionError: connect ECONNREFUSED 127.0.0.1:27017")]),s._v("说明mongodb数据库没开，node下"),a("code",[s._v("sudo mongod")]),s._v("开启即可")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/hello_hww/img/raw/master/img1/20200813142537.png",alt:""}})]),s._v(" "),a("p",[s._v("此时已创建并连接到了dignifiedfilm数据库")]),s._v(" "),a("h2",{attrs:{id:"_5-写数据库模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-写数据库模型"}},[s._v("#")]),s._v(" 5.写数据库模型")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/hello_hww/img/raw/master/img1/20200813143317.png",alt:""}})]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//引用模块")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("prop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@typegoose/typegoose'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//导出一个用户的类User")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("User")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//@prop()用来装饰它的属性")]),s._v("\n    @"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("prop")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    username"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("string\n\n    @"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("prop")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    password"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("string\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("ul",[a("li",[s._v("模型定义好后，可以在需要的地方使用这个模型")])]),s._v(" "),a("p",[s._v("也可以直接全局引用：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("@Global()标记为全局")])]),s._v(" "),a("li",[a("p",[s._v("导入这些模型再导出这些模型")])])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/hello_hww/img/raw/master/img1/20200813144600.png",alt:""}})]),s._v(" "),a("ul",[a("li",[s._v("现在在admin里就可以直接使用了")])]),s._v(" "),a("h2",{attrs:{id:"_6-使用crud装饰器实现增删改查接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-使用crud装饰器实现增删改查接口"}},[s._v("#")]),s._v(" 6.使用crud装饰器实现增删改查接口")]),s._v(" "),a("ul",[a("li",[s._v("不会把用户相关的东西写在app层级，所以在子项目里创建一个模块")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("nest g mo -p admin users\nnest g co -p admin users\nyarn add nestjs-mongoose-crud\nyarn add @nestjs/swagger swagger-ui-express\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("ul",[a("li",[s._v("-p admin表示是在admin这个project里面添加users模块")]),s._v(" "),a("li",[s._v("co是控制器模块")]),s._v(" "),a("li",[s._v("nestjs-mongoose-crud模块可以用一行代码实现增删改查接口")]),s._v(" "),a("li",[s._v("官方的包@nestjs/swagger，写文档要用到。第三方的包swagger-ui-express 基于express的swagger")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/hello_hww/img/raw/master/img1/20200813145748.png",alt:""}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/hello_hww/img/raw/master/img1/20200813151831.png",alt:""}})]),s._v(" "),a("p",[s._v("users.controller.ts里写")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" Controller "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@nestjs/common'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" InjectModel "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'nestjs-typegoose'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("User"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@libs/db/models/user.model'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("Crud"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'nestjs-mongoose-crud'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n@"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Crud")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//传递一个模型User")]),s._v("\n    model"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("User\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n@"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Controller")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'users'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("UsersController")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//注入模型，模型类User，注入给自己的属性上，只读的，")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//后面名字必须是model，这是crud模块规定的")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("constructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("@"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("InjectModel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("User"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" readonly model")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://gitee.com/hello_hww/img/raw/master/img1/20200813151947.png",alt:""}})]),s._v(" "),a("p",[s._v("这样就完成了用户的增删改查")]),s._v(" "),a("h2",{attrs:{id:"_7-使用swagger和装饰器编写接口文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-使用swagger和装饰器编写接口文档"}},[s._v("#")]),s._v(" 7.使用swagger和装饰器编写接口文档")]),s._v(" "),a("p",[s._v("请求接口 localhost:3001/users")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/hello_hww/img/raw/master/img1/20200813152719.png",alt:""}})]),s._v(" "),a("p",[s._v("把官方文档OpenAPI (Swagger)的代码拷过过来")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/hello_hww/img/raw/master/img1/20200813154657.png",alt:""}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/hello_hww/img/raw/master/img1/20200813155124.png",alt:""}})]),s._v(" "),a("ul",[a("li",[s._v("接口文档的地址习惯叫api-docs")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/hello_hww/img/raw/master/img1/20200813155418.png",alt:""}})]),s._v(" "),a("p",[s._v("进入localhost:3001/api-docs/")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/hello_hww/img/raw/master/img1/20200813155559.png",alt:""}})]),s._v(" "),a("ul",[a("li",[s._v("这里有增删改查5个接口")])]),s._v(" "),a("p",[s._v("改界面")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/hello_hww/img/raw/master/img1/20200813160259.png",alt:""}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/hello_hww/img/raw/master/img1/20200813160343.png",alt:""}})]),s._v(" "),a("p",[s._v("每一个模块都建议在控制器里面加一个标签分组")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/hello_hww/img/raw/master/img1/20200813161301.png",alt:""}})]),s._v(" "),a("p",[s._v("这样User的所有增删改查都会被分到“用户”组里面去")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/hello_hww/img/raw/master/img1/20200813161355.png",alt:""}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/hello_hww/img/raw/master/img1/20200813164606.png",alt:""}})]),s._v(" "),a("p",[s._v("描述一下模型的定义：")]),s._v(" "),a("p",[s._v("user.model.ts")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("prop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ModelOptions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@typegoose/typegoose'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" ApiProperty "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@nestjs/swagger'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//ModelOptions可以定义这个模型的其他属性，")]),s._v("\n@"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ModelOptions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//schemaOptions 等同于mongoose里schema要传的参数")]),s._v("\n    schemaOptions"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        timestamps"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("User")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//@ApiProperty定义每一个属性的名字，example实例值")]),s._v("\n    @"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ApiProperty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("description"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'用户名'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("example"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'user1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    @"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("prop")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    username"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("string\n\n    @"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ApiProperty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("description"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'密码'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("example"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'pass1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    @"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("prop")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    password"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("string\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://gitee.com/hello_hww/img/raw/master/img1/20200813164747.png",alt:""}})]),s._v(" "),a("ul",[a("li",[s._v("所以做接口是最简单的，只要定义好模型，定义好模型有哪几个字段，然后在users.controller.ts里@Crud就可以了")])]),s._v(" "),a("h2",{attrs:{id:"_8-在typegoose中定义课程和课时的一对多关联"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-在typegoose中定义课程和课时的一对多关联"}},[s._v("#")]),s._v(" 8.在Typegoose中定义课程和课时的一对多关联")]),s._v(" "),a("p",[s._v("用户管理完了还要做视频模块的管理")]),s._v(" "),a("ul",[a("li",[s._v("建立模型时，习惯性地，是单数；在建模块或者控制器时，是复数。")]),s._v(" "),a("li",[s._v("因为在模型里，是在描述一个类，类不会取名为复数")]),s._v(" "),a("li",[s._v("在控制器和模块里是管理了所有")])]),s._v(" "),a("p",[s._v("course.model.ts")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("prop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ModelOptions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Ref"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" arrayProp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@typegoose/typegoose'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" ApiProperty "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@nestjs/swagger'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" Episode "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./episode.model'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n@"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ModelOptions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    schemaOptions"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        timestamps"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Course")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    @"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ApiProperty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("description"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'课程名称'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    @"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("prop")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("string\n\n    @"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ApiProperty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("description"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'封面图'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("example"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'pass1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    @"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("prop")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    cover"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("string\n\n    @"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("arrayProp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("itemsRef"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Episode'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    episodes"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("Ref"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Episode"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])]),a("p",[s._v("episode.model.ts")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("prop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" modelOptions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@typegoose/typegoose'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n@"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("modelOptions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    schemaOptions"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        timestamps"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Episode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    @"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("prop")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("string\n\n    @"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("prop")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    file"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("string\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("p",[s._v("两个模型定义和关联好后，加模块控制器，@crud")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("nest g mo -p admin courses\nnest g co -p admin courses\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://gitee.com/hello_hww/img/raw/master/img1/20200813173430.png",alt:""}})]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(":ReturnModelType<typeof Course>\n定义它的类型，<typeof Course>是它的泛型\n不写也可以，它只是一个类型的提示\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("在数据库模块引入这两个模型\n"),a("img",{attrs:{src:"https://gitee.com/hello_hww/img/raw/master/img1/20200813173714.png",alt:""}})]),s._v(" "),a("p",[s._v("给课时加模块控制器，@crud")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("nest g mo -p admin episodes\nnest g co -p admin episodes\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://gitee.com/hello_hww/img/raw/master/img1/20200813181826.png",alt:""}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/hello_hww/img/raw/master/img1/20200813181858.png",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"_9-使用typescript-elementui搭建后台界面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-使用typescript-elementui搭建后台界面"}},[s._v("#")]),s._v(" 9.使用Typescript+ElementUI搭建后台界面")]),s._v(" "),a("p",[s._v("跟server同级")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("vue create admin\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://gitee.com/hello_hww/img/raw/master/img1/20200813211847.png",alt:""}})]),s._v(" "),a("p",[a("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/typescript.html",target:"_blank",rel:"https://dignified.cn"}},[s._v("vue3.0最好用ts开发"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("两种语法：Vue.extend或class...extend")]),s._v(" "),a("comment-comment")],1)}),[],!1,null,null,null);t.default=e.exports}}]);