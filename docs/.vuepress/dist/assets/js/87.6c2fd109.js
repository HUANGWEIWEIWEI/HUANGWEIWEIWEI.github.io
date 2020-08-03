(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{263:function(e,n,s){"use strict";s.r(n);var t=s(6),a=Object(t.a)({},(function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"_1-mac显示项目树：tree命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-mac显示项目树：tree命令"}},[e._v("#")]),e._v(" 1.mac显示项目树：tree命令")]),e._v(" "),s("h2",{attrs:{id:"_1-1-mac安装tree命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-mac安装tree命令"}},[e._v("#")]),e._v(" 1.1 Mac安装tree命令")]),e._v(" "),s("p",[e._v("tree是一个能列出递归目录的命令，以图形显示驱动器或路径的文件夹结构，可以生成命令树。Windows和Linux都有，mac没有原生支持，需要安装tree或者在home目录中添加.bashrc文件里面加入：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("alias tree=\"find . -print | sed -e 's;1*/;|____;g;s;____|; |;g'\" \n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("保存退出后，使用source .bashrc命令更新一下脚本资源，再在终端下试一下tree命令.\n第二种没有试过，我们来试下比较简单的第一种吧。")]),e._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 安装Homebrew 在终端输入下面指令")]),e._v("\n\n/usr/bin/ruby -e "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v('"')]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 安装 tree")]),e._v("\nbrew "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" tree\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br")])]),s("h2",{attrs:{id:"_1-2-tree命令的使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-tree命令的使用"}},[e._v("#")]),e._v(" 1.2 tree命令的使用")]),e._v(" "),s("p",[e._v("·在某个项目下执行tree命令即可")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("panzhiqiangdeMacBook-Pro:webpack2-in-action panzhiqiang$ tree -L 1\n\n# -L 1 指只显示一级目录\n\n.\n├── README.md\n├── index.html\n├── index.js\n├── node_modules\n└── package.json\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br")])]),s("p",[e._v("·")]),e._v(" "),s("p",[e._v("tree命令后面的参数有其他可选,具体我们可以用tree --help来查看")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("panzhiqiangdeMacBook-Pro:webpack2-in-action panzhiqiang$ tree --help\nusage: tree [-acdfghilnpqrstuvxACDFJQNSUX] [-H baseHREF] [-T title ]\n        [-L level [-R]] [-P pattern] [-I pattern] [-o filename] [--version]\n        [--help] [--inodes] [--device] [--noreport] [--nolinks] [--dirsfirst]\n        [--charset charset] [--filelimit[=]#] [--si] [--timefmt[=]<f>]\n        [--sort[=]<name>] [--matchdirs] [--ignore-case] [--] [<directory list>]\n  ------- Listing options -------\n  -a            All files are listed.显示所有文件和目录\n  -d            List directories only.显示目录名称而非内容\n  -l            Follow symbolic links like directories.\n  -f            Print the full path prefix for each file.在每个文件或目录之前，显示完整的相对路径名称\n  -x            Stay on current filesystem only.\n  -L n          Descend only level directories deep.只显示 n 层目录 （n 为数字）\n  -R            Rerun tree when max dir level reached.\n  -P pattern    List only those files that match the pattern given.\n  -I pattern    Do not list files that match the given pattern.\n  --ignore-case Ignore case when pattern matching.\n  --matchdirs   Include directory names in -P pattern matching.\n  --noreport    Turn off file/directory count at end of tree listing.\n  --charset X   Use charset X for terminal/HTML and indentation line output.\n  --filelimit # Do not descend dirs with more than # files in them.\n  --timefmt <f> Print and format time according to the format <f>.\n  -o filename   Output to file instead of stdout.\n  -------- File options ---------\n  -q            Print non-printable characters as '?'.\n  -N            Print non-printable characters as is.\n  -Q            Quote filenames with double quotes.\n  -p            Print the protections for each file.\n  -u            Displays file owner or UID number.\n  -g            Displays file group owner or GID number.\n  -s            Print the size in bytes of each file.\n  -h            Print the size in a more human readable way.\n  --si          Like -h, but use in SI units (powers of 1000).\n  -D            Print the date of last modification or (-c) status change.\n  -F            Appends '/', '=', '*', '@', '|' or '>' as per ls -F.在执行文件，目录，Socket，符号连接，管道名称名称，各自加上\"*\",\"/\",\"=\",\"@\",\"|\"号\n  --inodes      Print inode number of each file.\n  --device      Print device ID number to which each file belongs.\n  ------- Sorting options -------\n  -v            Sort files alphanumerically by version.\n  -t            Sort files by last modification time.用文件和目录的更改时间排序\n  -c            Sort files by last status change time.\n  -U            Leave files unsorted.\n  -r            Reverse the order of the sort.以相反次序排列\n  --dirsfirst   List directories before files (-U disables).目录显示在前，文件显示在后\n  --sort X      Select sort: name,version,size,mtime,ctime.\n  ------- Graphics options ------\n  -i            Don't print indentation lines.\n  -A            Print ANSI lines graphic indentation lines.\n  -S            Print with CP437 (console) graphics indentation lines.\n  -n            Turn colorization off always (-C overrides).\n  -C            Turn colorization on always.\n  ------- XML/HTML/JSON options -------\n  -X            Prints out an XML representation of the tree.\n  -J            Prints out an JSON representation of the tree.\n  -H baseHREF   Prints out HTML format with baseHREF as top directory.\n  -T string     Replace the default HTML title and H1 header with string.\n  --nolinks     Turn off hyperlinks in HTML output.\n  ---- Miscellaneous options ----\n  --version     Print version and exit.\n  --help        Print usage and this help message and exit.\n  --            Options processing terminator.\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br"),s("span",{staticClass:"line-number"},[e._v("23")]),s("br"),s("span",{staticClass:"line-number"},[e._v("24")]),s("br"),s("span",{staticClass:"line-number"},[e._v("25")]),s("br"),s("span",{staticClass:"line-number"},[e._v("26")]),s("br"),s("span",{staticClass:"line-number"},[e._v("27")]),s("br"),s("span",{staticClass:"line-number"},[e._v("28")]),s("br"),s("span",{staticClass:"line-number"},[e._v("29")]),s("br"),s("span",{staticClass:"line-number"},[e._v("30")]),s("br"),s("span",{staticClass:"line-number"},[e._v("31")]),s("br"),s("span",{staticClass:"line-number"},[e._v("32")]),s("br"),s("span",{staticClass:"line-number"},[e._v("33")]),s("br"),s("span",{staticClass:"line-number"},[e._v("34")]),s("br"),s("span",{staticClass:"line-number"},[e._v("35")]),s("br"),s("span",{staticClass:"line-number"},[e._v("36")]),s("br"),s("span",{staticClass:"line-number"},[e._v("37")]),s("br"),s("span",{staticClass:"line-number"},[e._v("38")]),s("br"),s("span",{staticClass:"line-number"},[e._v("39")]),s("br"),s("span",{staticClass:"line-number"},[e._v("40")]),s("br"),s("span",{staticClass:"line-number"},[e._v("41")]),s("br"),s("span",{staticClass:"line-number"},[e._v("42")]),s("br"),s("span",{staticClass:"line-number"},[e._v("43")]),s("br"),s("span",{staticClass:"line-number"},[e._v("44")]),s("br"),s("span",{staticClass:"line-number"},[e._v("45")]),s("br"),s("span",{staticClass:"line-number"},[e._v("46")]),s("br"),s("span",{staticClass:"line-number"},[e._v("47")]),s("br"),s("span",{staticClass:"line-number"},[e._v("48")]),s("br"),s("span",{staticClass:"line-number"},[e._v("49")]),s("br"),s("span",{staticClass:"line-number"},[e._v("50")]),s("br"),s("span",{staticClass:"line-number"},[e._v("51")]),s("br"),s("span",{staticClass:"line-number"},[e._v("52")]),s("br"),s("span",{staticClass:"line-number"},[e._v("53")]),s("br"),s("span",{staticClass:"line-number"},[e._v("54")]),s("br"),s("span",{staticClass:"line-number"},[e._v("55")]),s("br"),s("span",{staticClass:"line-number"},[e._v("56")]),s("br"),s("span",{staticClass:"line-number"},[e._v("57")]),s("br"),s("span",{staticClass:"line-number"},[e._v("58")]),s("br"),s("span",{staticClass:"line-number"},[e._v("59")]),s("br"),s("span",{staticClass:"line-number"},[e._v("60")]),s("br"),s("span",{staticClass:"line-number"},[e._v("61")]),s("br")])]),s("p",[e._v("这样我们可以愉快的玩tree命令了")]),e._v(" "),s("h2",{attrs:{id:"_1-3-常用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-常用"}},[e._v("#")]),e._v(" 1.3 常用")]),e._v(" "),s("p",[e._v("tree -N -L 1 直接列出文件和目录名称，包括控制字符，目录深度为1")]),e._v(" "),s("h2",{attrs:{id:"参考文章"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[e._v("#")]),e._v(" 参考文章")]),e._v(" "),s("p",[e._v("https://segmentfault.com/a/1190000009962072")]),e._v(" "),s("p",[e._v("https://www.jianshu.com/p/6807e7ddde6f")]),e._v(" "),s("p",[e._v("https://blog.csdn.net/cxrsdn/article/details/100006348?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.nonecase&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.nonecase")]),e._v(" "),s("p",[e._v("https://blog.csdn.net/sean908/article/details/89020626?utm_medium=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.nonecase&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.nonecase")])])}),[],!1,null,null,null);n.default=a.exports}}]);