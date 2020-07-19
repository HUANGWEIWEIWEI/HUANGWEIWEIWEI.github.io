# 3.Linux

## 3.1 Linux简介

Linux 内核最初只是由芬兰人林纳斯·托瓦兹（Linus Torvalds）在赫尔辛基大学上学时出于个人爱好而编写的。
Linux 是一套免费使用和自由传播的类 Unix 操作系统，是一个基于 POSIX 和 UNIX 的多用户、多任务、支持多线程和多 CPU 的操作系统。
Linux 能运行主要的 UNIX 工具软件、应用程序和网络协议。它支持 32 位和 64 位硬件。Linux 继承了 Unix 以网络为核心的设计思想，是一个性能稳定的多用户网络操作系统。

### 3.1.1 Linux 的发行版

Linux 的发行版说简单点就是将 Linux 内核与应用软件做一个打包。

![](https://gitee.com/hello_hww/img/raw/master/img1/20200718124436.png)

目前市面上较知名的发行版有：Ubuntu、RedHat、CentOS、Debian、Fedora、SuSE、OpenSUSE、Arch Linux、SolusOS 等。

### 3.1.2 Linux 应用领域

今天各种场合都有使用各种 Linux 发行版，从嵌入式设备到超级计算机，并且在服务器领域确定了地位，通常服务器使用 LAMP（Linux + Apache + MySQL + PHP）或 LNMP（Linux + Nginx+ MySQL + PHP）组合。

目前 Linux 不仅在家庭与企业中使用，并且在政府中也很受欢迎。

• 巴西联邦政府由于支持 Linux 而世界闻名。

• 有新闻报道俄罗斯军队自己制造的 Linux 发布版的，做为 G.H.ost 项目已经取得成果。

• 印度的 Kerala 联邦计划在向全联邦的高中推广使用 Linux。

• 中华人民共和国为取得技术独立，在龙芯处理器中排他性地使用 Linux。

• 在西班牙的一些地区开发了自己的 Linux 发布版，并且在政府与教育领域广泛使用，如 Extremadura 地区的 gnuLinEx 和 Andalusia 地区的 Guadalinex。

• 葡萄牙同样使用自己的 Linux 发布版 Caixa Mágica，用于 Magalh?es 笔记本电脑和 e-escola 政府软件。

• 法国和德国同样开始逐步采用 Linux。




### 3.1.3 Linux vs Windows

目前国内 Linux 更多的是应用于服务器上，而桌面操作系统更多使用的是 Windows。主要区别如下

|比较	|Windows|	Linux|
| --------------|:-------------:|:-------------:|
|界面	|界面统一，外壳程序固定所有 Windows 程序菜单几乎一致，快捷键也几乎相同	|图形界面风格依发布版不同而不同，可能互不兼容。GNU/Linux 的终端机是从 UNIX 传承下来，基本命令和操作方法也几乎一致。|
|驱动程序	|驱动程序丰富，版本更新频繁。默认安装程序里面一般包含有该版本发布时流行的硬件驱动程序，之后所出的新硬件驱动依赖于硬件厂商提供。对于一些老硬件，如果没有了原配的驱动有时很难支持。另外，有时硬件厂商未提供所需版本的 Windows 下的驱动，也会比较头痛。|	由志愿者开发，由 Linux 核心开发小组发布，很多硬件厂商基于版权考虑并未提供驱动程序，尽管多数无需手动安装，但是涉及安装则相对复杂，使得新用户面对驱动程序问题（是否存在和安装方法）会一筹莫展。但是在开源开发模式下，许多老硬件尽管在Windows下很难支持的也容易找到驱动。HP、Intel、AMD 等硬件厂商逐步不同程度支持开源驱动，问题正在得到缓解。|
|使用|	使用比较简单，容易入门。图形化界面对没有计算机背景知识的用户使用十分有利。	|图形界面使用简单，容易入门。文字界面，需要学习才能掌握。|
|学习|	系统构造复杂、变化频繁，且知识、技能淘汰快，深入学习困难。	|系统构造简单、稳定，且知识、技能传承性好，深入学习相对容易。|
|软件|	每一种特定功能可能都需要商业软件的支持，需要购买相应的授权。	|大部分软件都可以自由获取，同样功能的软件选择较少。|

## 3.2 安装

## 3.3 系统启动过程

分为5个阶段：

• 内核的引导。

• 运行 init。

• 系统初始化。

• 建立终端 。

• 用户登录系统。

```
init程序的类型：  
• SysV: init, CentOS 5之前, 配置文件： /etc/inittab。   
• Upstart: init,CentOS 6, 配置文件： /etc/inittab, /etc/init/*.conf。  
• Systemd： systemd, CentOS 7,配置文件： /usr/lib/systemd/system、 /etc/systemd/system。  
```

### 3.3.1内核引导

当计算机打开电源后，首先是BIOS开机自检，按照BIOS中设置的启动设备（通常是硬盘）来启动。

操作系统接管硬件以后，首先读入 /boot 目录下的内核文件。


### 3.3.2运行init

init 进程是系统所有进程的起点，你可以把它比拟成系统所有进程的老祖宗，没有这个进程，系统中任何进程都不会启动。

init 程序首先是需要读取配置文件 /etc/inittab。

运行级别

许多程序需要开机启动。它们在Windows叫做"服务"（service），在Linux就叫做"守护进程"（daemon）。

init进程的一大任务，就是去运行这些开机启动的程序。

但是，不同的场合需要启动不同的程序，比如用作服务器时，需要启动Apache，用作桌面就不需要。

Linux允许为不同的场合，分配不同的开机启动程序，这就叫做"运行级别"（runlevel）。也就是说，启动时根据"运行级别"，确定要运行哪些程序。
```
Linux系统有7个运行级别(runlevel)：
• 运行级别0：系统停机状态，系统默认运行级别不能设为0，否则不能正常启动
• 运行级别1：单用户工作状态，root权限，用于系统维护，禁止远程登陆
• 运行级别2：多用户状态(没有NFS)
• 运行级别3：完全的多用户状态(有NFS)，登陆后进入控制台命令行模式
• 运行级别4：系统未使用，保留
• 运行级别5：X11控制台，登陆后进入图形GUI模式
• 运行级别6：系统正常关闭并重启，默认运行级别不能设为6，否则不能正常启动
```

### 3.3.3系统初始化

在init的配置文件中有这么一行： si::sysinit:/etc/rc.d/rc.sysinit　它调用执行了/etc/rc.d/rc.sysinit，而rc.sysinit是一个bash shell的脚本，它主要是完成一些系统初始化的工作，rc.sysinit是每一个运行级别都要首先运行的重要脚本。

它主要完成的工作有：激活交换分区，检查磁盘，加载硬件模块以及其它一些需要优先执行任务。

l5:5:wait:/etc/rc.d/rc 5

这一行表示以5为参数运行/etc/rc.d/rc，/etc/rc.d/rc是一个Shell脚本，它接受5作为参数，去执行/etc/rc.d/rc5.d/目录下的所有的rc启动脚本，/etc/rc.d/rc5.d/目录中的这些启动脚本实际上都是一些连接文件，而不是真正的rc启动脚本，真正的rc启动脚本实际上都是放在/etc/rc.d/init.d/目录下。
而这些rc启动脚本有着类似的用法，它们一般能接受start、stop、restart、status等参数。

/etc/rc.d/rc5.d/中的rc启动脚本通常是K或S开头的连接文件，对于以 S 开头的启动脚本，将以start参数来运行。
而如果发现存在相应的脚本也存在K打头的连接，而且已经处于运行态了(以/var/lock/subsys/下的文件作为标志)，则将首先以stop为参数停止这些已经启动了的守护进程，然后再重新运行。

这样做是为了保证是当init改变运行级别时，所有相关的守护进程都将重启。

至于在每个运行级中将运行哪些守护进程，用户可以通过chkconfig或setup中的"System Services"来自行设定。


### 3.3.4建立终端

rc执行完毕后，返回init。这时基本系统环境已经设置好了，各种守护进程也已经启动了。

init接下来会打开6个终端，以便用户登录系统。在inittab中的以下6行就是定义了6个终端：
```
1:2345:respawn:/sbin/mingetty tty1
2:2345:respawn:/sbin/mingetty tty2
3:2345:respawn:/sbin/mingetty tty3
4:2345:respawn:/sbin/mingetty tty4
5:2345:respawn:/sbin/mingetty tty5
6:2345:respawn:/sbin/mingetty tty6
```
从上面可以看出在2、3、4、5的运行级别中都将以respawn方式运行mingetty程序，mingetty程序能打开终端、设置模式。
同时它会显示一个文本登录界面，这个界面就是我们经常看到的登录界面，在这个登录界面中会提示用户输入用户名，而用户输入的用户将作为参数传给login程序来验证用户的身份。

### 3.3.5用户登录系统
一般来说，用户的登录方式有三种：

• （1）命令行登录

• （2）ssh登录

• （3）图形界面登录

对于运行级别为5的图形方式用户来说，他们的登录是通过一个图形化的登录界面。登录成功后可以直接进入 KDE、Gnome 等窗口管理器。
而本文主要讲的还是文本方式登录的情况：当我们看到mingetty的登录界面时，我们就可以输入用户名和密码来登录系统了。
Linux 的账号验证程序是 login，login 会接收 mingetty 传来的用户名作为用户名参数。

然后 login 会对用户名进行分析：如果用户名不是 root，且存在 /etc/nologin 文件，login 将输出 nologin 文件的内容，然后退出。
这通常用来系统维护时防止非root用户登录。只有/etc/securetty中登记了的终端才允许 root 用户登录，如果不存在这个文件，则 root 用户可以在任何终端上登录。
/etc/usertty文件用于对用户作出附加访问限制，如果不存在这个文件，则没有其他限制。

<="" p="" style="caret-color: rgb(51, 51, 51); color: rgb(51, 51, 51); font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Noto Sans CJK SC", "WenQuanYi Micro Hei", Arial, sans-serif; font-size: 12px; font-style: normal; font-variant-caps: normal; font-weight: normal; letter-spacing: normal; orphans: auto; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: auto; word-spacing: 0px; -webkit-text-size-adjust: auto; -webkit-text-stroke-width: 0px; text-decoration: none;">

![](https://gitee.com/hello_hww/img/raw/master/img1/20200718131527.png)

## 3.4 系统目录结构

登录系统后，在当前命令窗口下输入命令：
```
 ls / 
```

会看到如下图所示:

![](https://gitee.com/hello_hww/img/raw/master/img1/20200718131639.png)

树状目录结构：

![](https://gitee.com/hello_hww/img/raw/master/img1/20200718131655.png)

### 3.4.1 目录的解释：

• /bin：

bin是Binary的缩写, 这个目录存放着最经常使用的命令。

• /boot：

这里存放的是启动Linux时使用的一些核心文件，包括一些连接文件以及镜像文件。

• /dev ：

dev是Device(设备)的缩写, 该目录下存放的是Linux的外部设备，在Linux中访问设备的方式和访问文件的方式是相同的。

• /etc：

这个目录用来存放所有的系统管理所需要的配置文件和子目录。

• /home：

用户的主目录，在Linux中，每个用户都有一个自己的目录，一般该目录名是以用户的账号命名的。

• /lib：

这个目录里存放着系统最基本的动态连接共享库，其作用类似于Windows里的DLL文件。几乎所有的应用程序都需要用到这些共享库。

• /lost+found：

这个目录一般情况下是空的，当系统非法关机后，这里就存放了一些文件。

• /media：

linux系统会自动识别一些设备，例如U盘、光驱等等，当识别后，linux会把识别的设备挂载到这个目录下。

• /mnt：

系统提供该目录是为了让用户临时挂载别的文件系统的，我们可以将光驱挂载在/mnt/上，然后进入该目录就可以查看光驱里的内容了。

• /opt：

 这是给主机额外安装软件所摆放的目录。比如你安装一个ORACLE数据库则就可以放到这个目录下。默认是空的。

• /proc：

这个目录是一个虚拟的目录，它是系统内存的映射，我们可以通过直接访问这个目录来获取系统信息。
这个目录的内容不在硬盘上而是在内存里，我们也可以直接修改里面的某些文件，比如可以通过下面的命令来屏蔽主机的ping命令，使别人无法ping你的机器：
echo 1 > /proc/sys/net/ipv4/icmp_echo_ignore_all

• /root：

该目录为系统管理员，也称作超级权限者的用户主目录。

• /sbin：

s就是Super User的意思，这里存放的是系统管理员使用的系统管理程序。

• /selinux：

 这个目录是Redhat/CentOS所特有的目录，Selinux是一个安全机制，类似于windows的防火墙，但是这套机制比较复杂，这个目录就是存放selinux相关的文件的。

• /srv：

 该目录存放一些服务启动之后需要提取的数据。

• /sys：

 这是linux2.6内核的一个很大的变化。该目录下安装了2.6内核中新出现的一个文件系统 sysfs 。

sysfs文件系统集成了下面3种文件系统的信息：针对进程信息的proc文件系统、针对设备的devfs文件系统以及针对伪终端的devpts文件系统。

该文件系统是内核设备树的一个直观反映。

当一个内核对象被创建的时候，对应的文件和目录也在内核对象子系统中被创建。

• /tmp：

这个目录是用来存放一些临时文件的。

• /usr：

 这是一个非常重要的目录，用户的很多应用程序和文件都放在这个目录下，类似于windows下的program files目录。

• /usr/bin：

系统用户使用的应用程序。

• /usr/sbin：

超级用户使用的比较高级的管理程序和系统守护程序。

• /usr/src：

内核源代码默认的放置目录。

• /var：

这个目录中存放着在不断扩充着的东西，我们习惯将那些经常被修改的目录放在这个目录下。包括各种日志文件。

• /run：

是一个临时文件系统，存储系统启动以来的信息。当系统重启时，这个目录下的文件应该被删掉或清除。如果你的系统上有 /var/run 目录，应该让它指向 run。


```
在 Linux 系统中，有几个目录是比较重要的，平时需要注意不要误删除或者随意更改内部文件。
/etc： 上边也提到了，这个是系统中的配置文件，如果你更改了该目录下的某个文件可能会导致系统不能启动。
/bin, /sbin, /usr/bin, /usr/sbin: 这是系统预设的执行文件的放置目录，比如 ls 就是在/bin/ls 目录下的。
值得提出的是，/bin, /usr/bin 是给系统用户使用的指令（除root外的通用户），而/sbin, /usr/sbin 则是给root使用的指令。 
/var： 这是一个非常重要的目录，系统上跑了很多程序，那么每个程序都会有相应的日志产生，而这些日志就被记录到这个目录下，具体在/var/log 目录下，另外mail的预设放置也是在这里。

在 Linux 或 Unix 操作系统中，所有的文件和目录都被组织成以一个根节点开始的倒置的树状结构。
文件系统的最顶层是由根目录开始的，系统使用 / 来表示根目录。在根目录之下的既可以是目录，也可以是文件，而每一个目录中又可以包含子目录文件。如此反复就可以构成一个庞大的文件系统。
在Linux文件系统中有两个特殊的目录，一个用户所在的工作目录，也叫当前目录，可以使用一个点 . 来表示；另一个是当前目录的上一级目录，也叫父目录，可以使用两个点 .. 来表示。
•  . ：代表当前的目录，也可以使用 ./ 来表示；
•  .. ：代表上一层目录，也可以 ../ 来代表。
如果一个目录或文件名以一个点 . 开始，表示这个目录或文件是一个隐藏目录或文件(如：.bashrc)。即以默认方式查找时，不显示该目录或文件。
```

### 3.4.2 目录作用分类

**系统启动必须：**

• /boot：存放的启动Linux 时使用的内核文件，包括连接文件以及镜像文件。

• /etc：存放所有的系统需要的配置文件和子目录列表，更改目录下的文件可能会导致系统不能启动。

• /lib：存放基本代码库（比如c++库），其作用类似于Windows里的DLL文件。几乎所有的应用程序都需要用到这些共享库。

• /sys： 这是linux2.6内核的一个很大的变化。该目录下安装了2.6内核中新出现的一个文件系统 sysfs 。sysfs文件系统集成了下面3种文件系统的信息：针对进程信息的proc文件系统、针对设备的devfs文件系统以及针对伪终端的devpts文件系统。该文件系统是内核设备树的一个直观反映。当一个内核对象被创建的时候，对应的文件和目录也在内核对象子系统中

**指令集合：**

• /bin：存放着最常用的程序和指令

• /sbin：只有系统管理员能使用的程序和指令。

**外部文件管理：**

• /dev ：Device(设备)的缩写, 存放的是Linux的外部设备。注意：在Linux中访问设备和访问文件的方式是相同的。

• /media：类windows的其他设备，例如U盘、光驱等等，识别后linux会把设备放到这个目录下。

• /mnt：临时挂载别的文件系统的，我们可以将光驱挂载在/mnt/上，然后进入该目录就可以查看光驱里的内容了。

**临时文件：**

• /run：是一个临时文件系统，存储系统启动以来的信息。当系统重启时，这个目录下的文件应该被删掉或清除。如果你的系统上有 /var/run 目录，应该让它指向 run。

• /lost+found：一般情况下为空的，系统非法关机后，这里就存放一些文件。

• /tmp：这个目录是用来存放一些临时文件的。

**账户：**

• /root：系统管理员的用户主目录。

• /home：用户的主目录，以用户的账号命名的。

• /usr：用户的很多应用程序和文件都放在这个目录下，类似于windows下的program files目录。

• /usr/bin：系统用户使用的应用程序与指令。

• /usr/sbin：超级用户使用的比较高级的管理程序和系统守护程序。

• /usr/src：内核源代码默认的放置目录。

**运行过程中要用：**
• /var：存放经常修改的数据，比如程序运行的日志文件（/var/log 目录下）。

• /proc：管理内存空间！虚拟的目录，是系统内存的映射，我们可以直接访问这个目录来，获取系统信息。这个目录的内容不在硬盘上而是在内存里，我们也可以直接修改里面的某些文件来做修改。

**扩展用的：**

• /opt：默认是空的，我们安装额外软件可以放在这个里面。

• /srv：存放服务启动后需要提取的数据（不用服务器就是空）

## 3.5 远程登录

Linux系统中是通过ssh服务实现的远程登录功能，默认ssh服务端口号为 22。

## 3.5.1 终端利用ssh登录远程服务器

安装ssh：
```
yum install ssh
```
启动ssh：
```
service sshd start
```
登录远程服务器：
```
ssh -p 50022 my@127.0.0.1
```
输入密码：
```
my@127.0.0.1:
```

-p 后面是端口

my 是服务器用户名

127.0.0.1 是服务器 ip

回车输入密码即可登录


## 3.5.2 Mac终端连接远程服务器

打开终端
输入命令：
```
ssh -p 22 root@123.46.167.91 ( ssh -p 端口号 用户名@ip)
```
或
```
ssh root@123.46.167.91 ( ssh 用户名@ip)
```
输入密码

接连成功

## 3.6 文件基本属性

使用ll或者ls –l命令来显示一个文件的属性以及文件所属的用户和组

```shell
[root@www /]# ls -l
total 64
dr-xr-xr-x   2 root root 4096 Dec 14  2012 bin
dr-xr-xr-x   4 root root 4096 Apr 19  2012 boot
……

```

### 3.6.1 属性介绍

![](https://gitee.com/hello_hww/img/raw/master/img1/20200718134753.png)

每个文件的属性由左边第一部分的10个字符来确定

从左至右用0-9这些数字来表示。
第0位确定文件类型，第1-3位确定属主（该文件的所有者）拥有该文件的权限。
第4-6位确定属组（所有者的同组用户）拥有该文件的权限，第7-9位确定其他用户拥有该文件的权限。

#### 第一个字符代表这个文件是目录、文件或链接文件等等。

• 当为[ d ]则是目录

• 当为[ - ]则是文件；

• 若是[ l ]则表示为链接文档(link file)；

• 若是[ b ]则表示为装置文件里面的可供储存的接口设备(可随机存取装置)；

若是[ c ]则表示为装置文件里面的串行端口设备，例如键盘、鼠标(一次性读取装置)。

#### 接下来的字符中，以三个为一组，且均为『rwx』 的三个参数的组合。

其中，[ r ]代表可读(read)、[ w ]代表可写(write)、[ x ]代表可执行(execute)。如果没有权限，就会出现减号[ - ]。


### 3.6.2 Linux文件属主和属组
```sh
[root@www /]# ls -l
total 64
drwxr-xr-x 2 root  root  4096 Feb 15 14:46 cron
drwxr-xr-x 3 mysql mysql 4096 Apr 21  2014 mysql
……
```

对于文件来说，它都有一个特定的所有者，也就是对该文件具有所有权的用户。

同时，在Linux系统中，用户是按组分类的，一个用户属于一个或多个组。

文件所有者以外的用户又可以分为文件所有者的同组用户和其他用户。

因此，Linux系统按文件所有者、文件所有者同组用户和其他用户来规定了不同的文件访问权限。

在以上实例中，mysql 文件是一个目录文件，属主和属组都为 mysql，属主有可读、可写、可执行的权限；与属主同组的其他用户有可读和可执行的权限；其他用户也有可读和可执行的权限。

对于 root 用户来说，一般情况下，文件的权限对其不起作用。

### 3.6.3 更改文件属性

1、chgrp：更改文件属组

语法：
```
chgrp [-R] 属组名 文件名
```
参数选项

• -R：递归更改文件属组，就是在更改某个目录文件的属组时，如果加上-R的参数，那么该目录下的所有文件的属组都会更改。

2、chown：更改文件属主，也可以同时更改文件属组

语法：
```
chown [–R] 属主名 文件名
chown [-R] 属主名：属组名 文件名
```

进入 /root 目录（~）将install.log的拥有者改为bin这个账号：
```
[root@www ~] cd ~
[root@www ~]# chown bin install.log
[root@www ~]# ls -l
-rw-r--r--  1 bin  users 68495 Jun 25 08:53 install.log
```
将install.log的拥有者与群组改回为root：
```
[root@www ~]# chown root:root install.log
[root@www ~]# ls -l
-rw-r--r--  1 root root 68495 Jun 25 08:53 install.log
```

3、chmod：更改文件9个属性

Linux文件属性有两种设置方法，一种是数字，一种是符号。

Linux文件的基本权限就有九个，分别是owner/group/others三种身份各有自己的read/write/execute权限。

先复习一下刚刚上面提到的数据：文件的权限字符为：『-rwxrwxrwx』， 这九个权限是三个三个一组的！其中，我们可以使用数字来代表各个权限，各权限的分数对照表如下：

• r:4

• w:2

• x:1

每种身份(owner/group/others)各自的三个权限(r/w/x)分数是需要累加的，例如当权限为： [-rwxrwx---] 分数则是：

• owner = rwx = 4+2+1 = 7

• group = rwx = 4+2+1 = 7

• others= --- = 0+0+0 = 0

所以等一下我们设定权限的变更时，该文件的权限数字就是770啦！变更权限的指令chmod的语法是这样的：

 chmod [-R] xyz 文件或目录

选项与参数：

• xyz : 就是刚刚提到的数字类型的权限属性，为 rwx 属性数值的相加。

• -R : 进行递归(recursive)的持续变更，亦即连同次目录下的所有文件都会变更

举例来说，如果要将.bashrc这个文件所有的权限都设定启用，那么命令如下：
```sh
[root@www ~]# ls -al .bashrc
-rw-r--r--  1 root root 395 Jul  4 11:45 .bashrc
[root@www ~]# chmod 777 .bashrc
[root@www ~]# ls -al .bashrc
-rwxrwxrwx  1 root root 395 Jul  4 11:45 .bashrc
```
那如果要将权限变成 -rwxr-xr-- 呢？那么权限的分数就成为 [4+2+1][4+0+1][4+0+0]=754。

符号类型改变文件权限

## 3.7 文件与目录管理

### 3.7.1 ls: 列出目录及文件名

选项与参数：
```
-a ：全部的文件，连同隐藏文件( 开头为 . 的文件) 一起列出来(常用)
-d ：仅列出目录本身，而不是列出目录内的文件数据(常用)
-l ：长数据串列出，包含文件的属性与权限等等数据；(常用)
```
例，将家目录下的所有文件列出来(含属性与隐藏档):
```sh
[root@www ~]# ls -al ~
```

### 3.7.2 cd：切换目录

Change Directory的缩写

### 3.7.3 pwd：显示目前的目录

Print Working Directory 的缩写

选项与参数：
```
-P ：显示出确实的路径，而非使用连结 (link) 路径。
```
实例显示出实际的工作目录，而非连结档本身的目录名而已:
```sh
[root@www ~]# cd /var/mail   <==注意，/var/mail是一个连结档
[root@www mail]# pwd
/var/mail         <==列出目前的工作目录
[root@www mail]# pwd -P
/var/spool/mail   <==怎么回事？有没有加 -P 差很多～
[root@www mail]# ls -ld /var/mail
lrwxrwxrwx 1 root root 10 Sep  4 17:54 /var/mail -> spool/mail
# 看到这里应该知道为啥了吧？因为 /var/mail 是连结档，连结到 /var/spool/mail ,linux里面的连结档相当于Windows里的快捷方式。
# 所以，加上 pwd -P 的选项后，会不以连结档的数据显示，而是显示正确的完整路径啊！
```

### 3.7.4 mkdir：创建一个新的目录

make directory

选项与参数：
```
-m ：配置文件的权限喔！直接配置，不需要看默认权限 (umask) 的脸色～
-p ：帮助你直接将所需要的目录(包含上一级目录)递归创建起来！
```
实例：请到/tmp底下尝试创建数个新目录看看：
```
[root@www ~]# cd /tmp
[root@www tmp]# mkdir test    <==创建一名为 test 的新目录
[root@www tmp]# mkdir test1/test2/test3/test4
mkdir: cannot create directory `test1/test2/test3/test4': 
No such file or directory       <== 没办法直接创建此目录啊！
[root@www tmp]# mkdir -p test1/test2/test3/test4
```
加了这个 -p 的选项，可以自行帮你创建多层目录！

实例：创建权限为 rwx--x--x 的目录。
```
[root@www tmp]# mkdir -m 711 test2
[root@www tmp]# ls -l
drwxr-xr-x  3 root  root 4096 Jul 18 12:50 test
drwxr-xr-x  3 root  root 4096 Jul 18 12:53 test1
drwx--x--x  2 root  root 4096 Jul 18 12:54 test2
```

### 3.7.5 rmdir：删除一个空的目录

选项与参数：
```
-p ：连同上一级『空的』目录也一起删除
```
删除 runoob 目录
```
[root@www tmp]# rmdir runoob/
```
将 mkdir 实例中创建的目录(/tmp 底下)删除掉！
```
[root@www tmp]# ls -l   <==看看有多少目录存在？
drwxr-xr-x  3 root  root 4096 Jul 18 12:50 test
drwxr-xr-x  3 root  root 4096 Jul 18 12:53 test1
drwx--x--x  2 root  root 4096 Jul 18 12:54 test2
[root@www tmp]# rmdir test   <==可直接删除掉，没问题
[root@www tmp]# rmdir test1  <==因为尚有内容，所以无法删除！
rmdir: `test1': Directory not empty
[root@www tmp]# rmdir -p test1/test2/test3/test4
[root@www tmp]# ls -l        <==您看看，底下的输出中test与test1不见了！
```
drwx--x--x  2 root  root 4096 Jul 18 12:54 test2
利用 -p 这个选项，立刻就可以将 test1/test2/test3/test4 一次删除。

不过要注意的是，这个 rmdir 仅能删除空的目录，你可以使用 rm 命令来删除非空目录。

### 3.7.6 cp: 复制文件或目录

语法:
```
[root@www ~]# cp [-adfilprsu] 来源档(source) 目标档(destination)
[root@www ~]# cp [options] source1 source2 source3 .... directory
```
选项与参数：
```
-a：相当於 -pdr 的意思，至於 pdr 请参考下列说明；(常用)

-d：若来源档为连结档的属性(link file)，则复制连结档属性而非文件本身；

-f：为强制(force)的意思，若目标文件已经存在且无法开启，则移除后再尝试一次；

-i：若目标档(destination)已经存在时，在覆盖时会先询问动作的进行(常用)

-l：进行硬式连结(hard link)的连结档创建，而非复制文件本身；

-p：连同文件的属性一起复制过去，而非使用默认属性(备份常用)；

-r：递归持续复制，用於目录的复制行为；(常用)

-s：复制成为符号连结档 (symbolic link)，亦即『捷径』文件；

-u：若 destination 比 source 旧才升级 destination ！
```
用 root 身份，将 root 目录下的 .bashrc 复制到 /tmp 下，并命名为 bashrc
```
[root@www ~]# cp ~/.bashrc /tmp/bashrc
[root@www ~]# cp -i ~/.bashrc /tmp/bashrc
cp: overwrite `/tmp/bashrc'? n  <==n不覆盖，y为覆盖
```
### 3.7.7 rm: 移除文件或目录

选项与参数：
```
-f ：就是 force 的意思，忽略不存在的文件，不会出现警告信息；
-i ：互动模式，在删除前会询问使用者是否动作
-r ：递归删除啊！最常用在目录的删除了！这是非常危险的选项！！！
```
将刚刚在 cp 的实例中创建的 bashrc 删除掉！
```sh
[root@www tmp]# rm -i bashrc
rm: remove regular file `bashrc'? y
```
如果加上 -i 的选项就会主动询问喔，避免你删除到错误的档名！

### 3.7.8 mv: 移动文件与目录，或修改文件与目录的名称

选项与参数：
```
-f ：force 强制的意思，如果目标文件已经存在，不会询问而直接覆盖；
-i ：若目标文件 (destination) 已经存在时，就会询问是否覆盖！
-u ：若目标文件已经存在，且 source 比较新，才会升级 (update)
```
复制一文件，创建一目录，将文件移动到目录中
```
[root@www ~]# cd /tmp
[root@www tmp]# cp ~/.bashrc bashrc
[root@www tmp]# mkdir mvtest
[root@www tmp]# mv bashrc mvtest
```
将某个文件移动到某个目录去，就是这样做！

将刚刚的目录名称更名为 mvtest2
```
[root@www tmp]# mv mvtest mvtest2
```

### 3.7.9 查看文件内容

cat  由第一行开始显示文件内容

tac  从最后一行开始显示，可以看出 tac 是 cat 的倒着写！

nl   显示的时候，顺道输出行号！

more 一页一页的显示文件内容

less 与 more 类似，但是比 more 更好的是，他可以往前翻页！

head 只看头几行

tail 只看尾巴几行

```
可以使用 man [命令]来查看各个命令的使用文档，如 ：man cp。
```

## 3.8 用户和用户组管理

## 3.9  磁盘管理

df：列出文件系统的整体磁盘使用量

du：检查磁盘空间使用量

fdisk：用于磁盘分区

## 3.10 vi/vim

所有的 Unix Like 系统都会内建 vi 文书编辑器，Vim是从 vi 发展出来的一个文本编辑器。

![](https://gitee.com/hello_hww/img/raw/master/img1/20200718142729.png)

:w	将编辑的数据写入硬盘档案中(常用)
:w!	若文件属性为『只读』时，强制写入该档案。不过，到底能不能写入， 还是跟你对该档案的档案权限有关啊！
:q	离开 vi (常用)
:q!	若曾修改过档案，又不想储存，使用 ! 为强制离开不储存档案。
注意一下啊，那个惊叹号 (!) 在 vi 当中，常常具有『强制』的意思～	
:wq	储存后离开，若为 :wq! 则为强制储存后离开 (常用)

![](https://gitee.com/hello_hww/img/raw/master/img1/20200718143032.png)

## 3.11 yum 命令

前端软件包管理器。基於RPM包管理，能够从指定的服务器自动下载RPM包并且安装，可以自动处理依赖性关系，并且一次安装所有依赖的软体包，无须繁琐地一次次下载、安装。

apt/yum/homebrew----ubuntu/centOs/mac ：包管理器对应系统

```
1.列出所有可更新的软件清单命令：yum check-update
2.更新所有软件命令：yum update
3.仅安装指定的软件命令：yum install <package_name>
4.仅更新指定的软件命令：yum update <package_name>
5.列出所有可安裝的软件清单命令：yum list
6.删除软件包命令：yum remove <package_name>
7.查找软件包 命令：yum search <keyword>
8.清除缓存命令:
yum clean packages: 清除缓存目录下的软件包
yum clean headers: 清除缓存目录下的 headers
yum clean oldheaders: 清除缓存目录下旧的 headers
yum clean, yum clean all (= yum clean packages; yum clean oldheaders) :清除缓存目录下的软件包及旧的headers
```


## 参考文章

关于SSH 22端口的来历，及其相关配置
https://baijiahao.baidu.com/s?id=1613129005662609247&wfr=spider&for=pc

Linux 文件与目录管理
https://www.runoob.com/linux/linux-file-content-manage.html
