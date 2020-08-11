# 3..yml文件--YAML

.github文件夹里还会有*.yml文件

![](https://gitee.com/hello_hww/img/raw/master/img1/20200730204439.png)

yaml 语言（或者说是一种规范吧）可以编写 .yml 文件，和 json 一样是配置文件。

Yet Another Markup Language

另一种标记语言

特别适合用 grep、Python、Perl、Ruby 操作

一种基于Unicode容易阅读，容易和脚本语言交互的，用来表达资料序列的编程语言。

![yaml](https://gitee.com/uploads/images/2018/0319/214332_5f678f5c_1623141.png)

可参考--[阮一峰-YAML 语言教程](https://link.jianshu.com?t=http%3A%2F%2Fwww.ruanyifeng.com%2Fblog%2F2016%2F07%2Fyaml.html) 

也许是有人认为 json 的写法不爽，于是乎发明了这玩意，通过下面的例子，可以看到 yaml 写的配置文件确实要比 json 方便很多。

## 1.2.1.编写规则


*   **大小写敏感**

json 里也是大小写敏感的，这点二者一样。

*   **使用缩进表示层级关系**

json 中使用 `{}` 的嵌套表示层级，而 yaml 使用缩进，后者更方便一些。

*   **`#` 表示注释**

json 文件中不允许写注释，对于很长配置文件全靠字面意思猜挺痛快的，yaml 可以写注释，:100:

## 1.2.2数据结构


配置文件理应十分简洁，与 json 相比，不用频繁的写 `{}` 和 `[]`，毕竟换行和 `-` 符号更加简洁，字符串也不需要频繁的加引号（无论是单引号还是双引号）。

- 对象
---
    # conf.yml
    animal: pets
    hash: { name: Steve, foo: bar }
    

转换为 json 为：

    {
        { "animal": "pets" },
        { "hash": { "name": "Steve", "foo": "bar" } }
    }
    

- 数组
---
    # conf.yml
    Animal:
     - Cat
     - Dog
     - Goldfish
    

转换为 json 为：

    { "Animal": [ "Cat", "Dog", "Goldfish" ] }
    

- 字符串
---

    # conf.yml
    # 正常情况下字符串不用写引号
    str: 这是一行字符串
    # 字符串内有空格或者特殊字符时需要加引号
    str: '内容： 字符串'
    

- null
----

    # conf.yml
    parent: ~
    

.yml 中 ~ 表示 null，转换为 json 为：

    { "parent": null }

## 1.2.3适应场景

- 脚本语言：由于实现简单，解析成本很低，YAML 特别适合在脚本语言中使用
- 序列化： YAML是由宿主语言数据类型直转，的比较适合做序列化。
- 配置文件：写 YAML 要比写 XML 快得多(无需关注标签或引号)，并且比 INI 文档功能更强。由于兼容性问题，不同语言间的数据流转建议不要用 YAML。

## 1.2.4语言优点

- YAML易于人们阅读。
- YAML数据在编程语言之间是可移植的。
- YAML匹配敏捷语言的本机数据结构。
- YAML具有一致的模型来支持通用工具。
- YAML支持单程处理。
- YAML具有表现力和可扩展性。
- YAML易于实现和使用。

## 1.2.5 YAML 语法

- 使用空格 Space 缩进表示分层，不同层次之间的缩进可以使用不同的空格数目，但是同层元素一定左对齐，即前面空格数目相同（不能使用 Tab，各个系统 Tab对应的 Space 数目可能不同，导致层次混乱）
- ‘#’表示注释，只能单行注释，从#开始处到行尾
- 破折号后面跟一个空格（a dash and space）表示列表
- 用冒号和空格表示键值对 key: value
- 简单数据（scalars，标量数据）可以不使用引号括起来，包括字符串数据。用单引号或者双引号括起来的被当作字符串数据，在单引号或双引号中使用C风格的转义字符