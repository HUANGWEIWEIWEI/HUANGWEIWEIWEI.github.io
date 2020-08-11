# 12.TypeScript

# 1.定义
微软开发的自由和开源的编程语言
JavaScript 的一个超集
本质上向这个语言添加了**可选的静态类型**和**基于类的面向对象编程**
ES5⊂ES2015⊂ES2016⊂TypeScript
>ECMAscript 2015 是在2015年6月份发布的ES6的第一个版本。依次类推ECMAscript 2016 是ES6的第二个版本、 ECMAscript 2017 是ES6的第三个版本……

<span style="color:yellow">TypeScript 与 JavaScript 的区别</span>

|TypeScript                                 |JavaScript                           |
|-------------------------------------------|-----------------------------------  |
|JavaScript的超集用于解决大型项目的代码复杂性     |一种脚本语言，用于创建动态网页            | 
|可以在编译期间发现并纠正错误                    |作为一种解释型语言，只能在运行时发现错误    | 
|强类型,支持静态和动态类型                       |弱类型，没有静态类型选项                 |
|最终被编译成JavaScript代码,使浏览器可以理解	  |可以直接在浏览器中使用                   |
|支持模块、泛型和接口                           |不支持模块，泛型或接口                   |
|支持ES3,ES4,ES5和ES6等                       |不支持编译其他 ES3，ES4，ES5 或 ES6 功能 |
|社区的支持仍在增长，而且还不是很大	              |大量的社区支持以及大量文档和解决问题的支持  |

# 2.获取TypeScript
命令行的 TypeScript 编译器可以使用 Node.js 包来安装。
## 1.安装 TypeScript
```shell
$ npm i -g typescript
```
## 2.编译 TypeScript 文件 
```shell
$ tsc helloworld.ts
# helloworld.ts => helloworld.js
```
## 3.线上写代码：[TypeScript Playground](https://www.typescriptlang.org/play/)

# 3.基础类型
## 1.Boolean 类型
```ts
let isDone: boolean = false;
// ES5：var isDone = false;
```
## 2.Number 类型
```ts
let count: number = 10;
// ES5：var count = 10;
```
## 3.String 类型
```ts
let name: string = "Semliker";
// ES5：var name = 'Semlinker';
```
## 4.Array 类型
```ts
let list: number[] = [1, 2, 3];
// ES5：var list = [1,2,3];

let list: Array<number> = [1, 2, 3]; // Array<number>泛型语法
// ES5：var list = [1,2,3];
```
## 5.Enum 类型
>enumeration -- 枚举

使用枚举我们可以定义一些带名字的常量。 使用枚举可以清晰地表达意图或创建一组有区别的用例。 TypeScript 支持数字的和基于字符串的枚举。

### 1.数字枚举
```ts
enum Direction {
  NORTH,
  SOUTH,
  EAST,
  WEST,
}

let dir: Direction = Direction.NORTH;
```
默认情况下，NORTH 的初始值为 0，其余的成员会从 1 开始自动增长。换句话说，Direction.SOUTH 的值为 1，Direction.EAST 的值为 2，Direction.WEST 的值为 3。上面的枚举示例代码经过编译后会生成以下js代码：
```js
"use strict";
var Direction;
(function (Direction) {
  Direction[(Direction["NORTH"] = 0)] = "NORTH";
  Direction[(Direction["SOUTH"] = 1)] = "SOUTH";
  Direction[(Direction["EAST"] = 2)] = "EAST";
  Direction[(Direction["WEST"] = 3)] = "WEST";
})(Direction || (Direction = {}));
var dir = Direction.NORTH;
```
设置 NORTH 的初始值，比如：
```js
enum Direction {
  NORTH = 3,
  SOUTH,
  EAST,
  WEST,
}
```

### 2.字符串枚举

在 TypeScript 2.4 版本，允许我们使用字符串枚举。在一个字符串枚举里，每个成员都必须用字符串字面量，或另外一个字符串枚举成员进行初始化。
```ts
enum Direction {
  NORTH = "NORTH",
  SOUTH = "SOUTH",
  EAST = "EAST",
  WEST = "WEST",
}
```
以上代码对于的 ES5 代码如下：
```js
"use strict";
var Direction;
(function (Direction) {
    Direction["NORTH"] = "NORTH";
    Direction["SOUTH"] = "SOUTH";
    Direction["EAST"] = "EAST";
    Direction["WEST"] = "WEST";
})(Direction || (Direction = {}));
```
### 3.异构枚举

异构枚举的成员值是数字和字符串的混合：
```ts
enum Enum {
  A,
  B,
  C = "C",
  D = "D",
  E = 8,
  F,
}
```
以上代码对于的 ES5 代码如下：
```js
"use strict";
var Enum;
(function (Enum) {
    Enum[Enum["A"] = 0] = "A";
    Enum[Enum["B"] = 1] = "B";
    Enum["C"] = "C";
    Enum["D"] = "D";
    Enum[Enum["E"] = 8] = "E";
    Enum[Enum["F"] = 9] = "F";
})(Enum || (Enum = {}));
```
上面数字枚举相对字符串枚举多了 “反向映射”：
```
console.log(Enum.A) //输出：0
console.log(Enum[0]) // 输出：A
```

## 断言

## 类型守卫

## 联合类型和类型别名

## 交叉类型

## 联合类型和类型别名

## 函数

## 数组 

## 对象

## 接口

## 类

## 泛型

## 装饰器

## 编译上下文

## 

***
参考文章：
[1.2W字 | 了不起的 TypeScript 入门教程](https://juejin.im/post/5edd8ad8f265da76fc45362c#heading-3)