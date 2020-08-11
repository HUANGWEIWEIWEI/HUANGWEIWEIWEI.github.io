## npm


npm install说明
一、常用简写
	• npm install=npm i。在git clone项目的时候，项目文件中并没有 node_modules文件夹，项目的依赖文件可能很大。直接执行，npm会根据package.json配置文件中的依赖配置下载安装。
	• -global=-g，全局安装，安装后的包位于系统预设目录下
	• --save=-S，安装的包将写入package.json里面的dependencies，dependencies：生产环境需要依赖的库
--save-dev=-D，安装的包将写入packege.json里面的devDependencies，devdependencies：只有开发环境下需要依赖的库