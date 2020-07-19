# git的使用

## Git 流程图

![](https://gitee.com/hello_hww/img/raw/master/img1/20200630154726.png)

Workspace：工作区
Index / Stage：暂存区
Repository：仓库区（或本地仓库）
Remote：远程仓库

## 配置 Git

```sh
# 配置全局用户
$ git config --global user.name "用户名" 
$ git config --global user.email "git账号"
# 配置别名
$ git config --global alias.co checkout
$ git config --global alias.ss status
$ git config --global alias.cm commit
$ git config --global alias.br branch
$ git config --global alias.rg reflog
# 这里只是美化 log 的输出，实际使用时可以在 git lg 后面加命令参数，如： git lg -10 显示最近10条提交
$ git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"
# 删除全局配置
$ git config --global --unset alias.xxx
$ git config --global --unset user.xxx
```

## 查看 Git 信息

```sh
# 查看系统配置
$ git config --list
# 查看用户配置
$ cat ~/.gitconfig 
# 查看当前项目的 git 配置
$ cat .git/config
# 查看暂存区的文件
$ git ls-files
# 查看本地 git 命令历史
$ git reflog
# 查看所有 git 命令
$ git --help -a 
# 查看当前 HEAD 指向
$ cat .git/HEAD

# git 中 D 向下翻一行  F 向下翻页  B 向上翻页  Q 退出
# 查看提交历史
$ git log --oneline  
          --grep="关键字"
          --graph 
          --all      
          --author "username"     
          --reverse 
          -num
          -p
          --before=  1  day/1  week/1  "2019-06-06" 
          --after= "2019-06-06"
          --stat 
          --abbrev-commit 
          --pretty=format:"xxx"
          
# oneline -> 将日志记录一行一行的显示
# grep="关键字" -> 查找日志记录中(commit提交时的注释)与关键字有关的记录
# graph -> 记录图形化显示 ！！！    
# all -> 将所有记录都详细的显示出来
# author "username" -> 查找这个作者提交的记录
# reverse -> commit 提交记录顺序翻转      
# before -> 查找规定的时间(如:1天/1周)之前的记录   
# num -> git log -10 显示最近10次提交 ！！！    
# stat -> 显示每次更新的文件修改统计信息，会列出具体文件列表 ！！！
# abbrev-commit -> 仅显示 SHA-1 的前几个字符，而非所有的 40 个字符 ！！！
# pretty=format:"xxx" ->  可以定制要显示的记录格式 ！！！
# p -> 显示每次提交所引入的差异（按 补丁 的格式输出）！！！

符号解释：
*	表示一个 commit
|	表示分支前进
/	表示分叉
\	表示合入
|/	表示新分支


```

## git命令

```git
克隆代码(可以是http地址或git地址)
git clone 

拉取代码
git pull

切换分支
git checkout

查看工作区状态
git status

查看过往提交记录
git log

提交到暂存区
git add .

提交到本地仓库
git commit -m "本次提交说明"

add和commit的合并，便捷写法（未追踪的文件无法直接提交到暂存区/本地仓库）
git commit -am "本次提交说明"

将本地分支和远程分支进行关联
git push -u origin branchName

提交到远程仓库
git push

拉取远程分支的代码
git pull origin branchName 

合并分支
git merge branchName 

查看本地拥有哪些分支
git branch

查看所有分支（包括远程分支和本地分支）
git branch -a 

切换分支
git checkout branchName 

临时将工作区文件的修改保存至堆栈中
git stash

将之前保存至堆栈中的文件取出来
git stash pop

```

## github

issues 提交评论、建议或问题的地方

in:name/description/readme ...
按名称查找...


# 参考文章

三年 Git 使用心得 & 常见问题整理
https://juejin.im/post/5ee649ff51882542ea2b5108?utm_source=gold_browser_extension

push代码时遇到错误
https://blog.csdn.net/zhangkui0418/article/details/82977519
