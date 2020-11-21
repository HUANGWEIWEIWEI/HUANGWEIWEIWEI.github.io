(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{280:function(s,n,a){"use strict";a.r(n);var t=a(6),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"_2-git的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-git的使用"}},[s._v("#")]),s._v(" 2.git的使用")]),s._v(" "),a("h2",{attrs:{id:"_2-1git-流程图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1git-流程图"}},[s._v("#")]),s._v(" 2.1Git 流程图")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/hello_hww/img/raw/master/img1/20200630154726.png",alt:""}})]),s._v(" "),a("p",[s._v("Workspace：工作区"),a("br"),s._v("\nIndex / Stage：暂存区"),a("br"),s._v("\nRepository：仓库区（或本地仓库）"),a("br"),s._v("\nRemote：远程仓库")]),s._v(" "),a("h2",{attrs:{id:"_2-2配置-git"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2配置-git"}},[s._v("#")]),s._v(" 2.2配置 Git")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置全局用户")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.name "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"用户名"')]),s._v(" \n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.email "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git账号"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置别名")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global alias.co checkout\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global alias.ss status\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global alias.cm commit\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global alias.br branch\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global alias.rg reflog\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这里只是美化 log 的输出，实际使用时可以在 git lg 后面加命令参数，如： git lg -10 显示最近10条提交")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global alias.lg "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit\"")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除全局配置")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global --unset alias.xxx\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global --unset user.xxx\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("h2",{attrs:{id:"_2-3查看-git-信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3查看-git-信息"}},[s._v("#")]),s._v(" 2.3查看 Git 信息")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看系统配置")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --list\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看用户配置")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" ~/.gitconfig \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看当前项目的 git 配置")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" .git/config\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看暂存区的文件")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" ls-files\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看本地 git 命令历史")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reflog\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看所有 git 命令")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" --help -a \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看当前 HEAD 指向")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" .git/HEAD\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git 中 D 向下翻一行  F 向下翻页  B 向上翻页  Q 退出")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看提交历史")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log --oneline  \n          --grep"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"关键字"')]),s._v("\n          --graph \n          --all      \n          --author "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"username"')]),s._v("     \n          --reverse \n          -num\n          -p\n          --before"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  day/1  week/1  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2019-06-06"')]),s._v(" \n          --after"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2019-06-06"')]),s._v("\n          --stat \n          --abbrev-commit \n          --pretty"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("format:"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xxx"')]),s._v("\n          \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# oneline -> 将日志记录一行一行的显示")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# grep="关键字" -> 查找日志记录中(commit提交时的注释)与关键字有关的记录')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# graph -> 记录图形化显示 ！！！    ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# all -> 将所有记录都详细的显示出来")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# author "username" -> 查找这个作者提交的记录')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# reverse -> commit 提交记录顺序翻转      ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# before -> 查找规定的时间(如:1天/1周)之前的记录   ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# num -> git log -10 显示最近10次提交 ！！！    ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# stat -> 显示每次更新的文件修改统计信息，会列出具体文件列表 ！！！")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# abbrev-commit -> 仅显示 SHA-1 的前几个字符，而非所有的 40 个字符 ！！！")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# pretty=format:"xxx" ->  可以定制要显示的记录格式 ！！！')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# p -> 显示每次提交所引入的差异（按 补丁 的格式输出）！！！")]),s._v("\n\n符号解释：\n*\t表示一个 commit\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\t表示分支前进\n/\t表示分叉\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\t表示合入\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("/\t表示新分支\n\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br")])]),a("h2",{attrs:{id:"_2-4git命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4git命令"}},[s._v("#")]),s._v(" 2.4git命令")]),s._v(" "),a("div",{staticClass:"language-git line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[s._v("克隆代码(可以是http地址或git地址)\ngit clone \n\n拉取代码\ngit pull\n\n切换分支\ngit checkout\n\n查看工作区状态\ngit status\n\n查看过往提交记录\ngit log\n\n\n\n文件夹初始化为git仓库\ngit init\n\n提交到暂存区\ngit add . ：监控工作区的状态树，使用它会把工作时的所有变化提交到暂存区，包括文件内容修改(modified)以及新文件(new)，但不包括被删除的文件。\n\ngit add -u ：仅监控已经被add的文件（即tracked file），他会将被修改的文件提交到暂存区。add -u 不会提交新文件（untracked file）。（git add --update的缩写）\n\ngit add -A ：是上面两个功能的合集（git add --all的缩写）\n\n\n提交到本地仓库\ngit commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"本次提交说明"')]),s._v("\n\n\ngit commit -am "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"本次提交说明"')]),s._v("\ngit add .和git commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"本次提交说明"')]),s._v("的合并，便捷写法（未追踪的文件无法直接提交到暂存区/本地仓库）\n\n\n将本地的仓库关联到远程仓库地址，这个origin在之后可以指代远程仓库的地址\norgin只是一个代号，可以改为任意名字。\ngit remote add origin http或ssh地址\n\n查看关联到的远程地址\ngit remote -v\n\n删除关联到的远程地址\ngit remote rm origin\n\n将本地分支和远程分支进行关联，并且将origin和branchName设为默认推送仓库地址和分支\ngit pull -u origin branchName\n\n把两段不相干的分支进行强行合并\ngit pull origin master --allow-unrelated-histories\n\n提交到远程仓库\ngit push\n\n加了参数-f 强制将本地的修改覆盖了远程仓库的版本，将其他人的commit都冲掉，而且无法使用通常的git reset方式回退\ngit push -u origin master -f \n\n\n\n拉取远程分支的代码\ngit pull origin branchName \n\n合并某分支到当前分支\ngit merge branchName \n\n查看本地拥有哪些分支(结果列表中前面标*号的表示当前使用分支)\ngit branch\n\n查看所有分支（包括远程分支和本地分支）\ngit branch -a \n\n创建名为branchName的分支\ngit branch branchName\n\n切换分支\ngit checkout branchName 或者 git switch branchName\n\n创建+切换分支\ngit checkout -b branchName或者git switch -c branchName\n\n删除分支\ngit branch -d branchName\n\n\n\n临时将工作区文件的修改保存至堆栈中\ngit stash\n\n将之前保存至堆栈中的文件取出来\ngit stash pop\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br"),a("span",{staticClass:"line-number"},[s._v("79")]),a("br"),a("span",{staticClass:"line-number"},[s._v("80")]),a("br"),a("span",{staticClass:"line-number"},[s._v("81")]),a("br"),a("span",{staticClass:"line-number"},[s._v("82")]),a("br"),a("span",{staticClass:"line-number"},[s._v("83")]),a("br"),a("span",{staticClass:"line-number"},[s._v("84")]),a("br"),a("span",{staticClass:"line-number"},[s._v("85")]),a("br"),a("span",{staticClass:"line-number"},[s._v("86")]),a("br"),a("span",{staticClass:"line-number"},[s._v("87")]),a("br"),a("span",{staticClass:"line-number"},[s._v("88")]),a("br"),a("span",{staticClass:"line-number"},[s._v("89")]),a("br"),a("span",{staticClass:"line-number"},[s._v("90")]),a("br"),a("span",{staticClass:"line-number"},[s._v("91")]),a("br"),a("span",{staticClass:"line-number"},[s._v("92")]),a("br")])]),a("h2",{attrs:{id:"_2-5github"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-5github"}},[s._v("#")]),s._v(" 2.5github")]),s._v(" "),a("p",[s._v("issues 提交评论、建议或问题的地方")]),s._v(" "),a("p",[s._v("in:name/description/readme ...\n按名称查找...")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.cnblogs.com/itzlg/p/12318012.html",target:"_blank",rel:"https://dignified.cn"}},[s._v("GitHub上重要的几个搜索技巧"),a("OutboundLink")],1)]),s._v(" "),a("h1",{attrs:{id:"参考文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[s._v("#")]),s._v(" 参考文章")]),s._v(" "),a("p",[s._v("三年 Git 使用心得 & 常见问题整理\nhttps://juejin.im/post/5ee649ff51882542ea2b5108?utm_source=gold_browser_extension")]),s._v(" "),a("p",[s._v("push代码时遇到错误\nhttps://blog.csdn.net/zhangkui0418/article/details/82977519")]),s._v(" "),a("comment-comment")],1)}),[],!1,null,null,null);n.default=e.exports}}]);