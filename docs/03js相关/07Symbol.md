# Symbol

规范规定，JavaScript 中对象的属性只能为 字符串类型 或者 Symbol类型 ，毕竟我们也只见过这两种类型。

## 1. 概念介绍

ES6引入Symbol作为一种新的原始数据类型，表示独一无二的值，主要是为了防止属性名冲突。

ES6之后，JavaScript一共有其中数据类型：Symbol、undefined、null、Boolean、String、Number、Object。

简单使用：
```js
let leo = Symbol();
typeof leo; // "symbol"
```

Symbol 支持传入参数作为 Symbol 名，方便代码调试：
```js
let leo = Symbol("leo");
```

## 2. 注意事项**

Symbol函数不能用new，会报错。

由于Symbol是一个原始类型，不是对象，所以不能添加属性，它是类似于字符串的数据类型。
```js
let leo = new Symbol()
// Uncaught TypeError: Symbol is not leo constructor
```

Symbol都是不相等的，即使参数相同。
```js
// 没有参数
let leo1 = Symbol();
let leo2 = Symbol();
leo1 === leo2; // false 

// 有参数
let leo1 = Symbol('leo');
let leo2 = Symbol('leo');
leo1 === leo2; // false 
```

Symbol不能与其他类型的值计算，会报错。
```js
let leo = Symbol('hello');
leo + " world!";  // 报错
`${leo} world!`;  // 报错
```

Symbol 不能自动转换为字符串，只能显式转换。
```js
let leo = Symbol('hello');
alert(leo); 
// Uncaught TypeError: Cannot convert a Symbol value to a string

String(leo);    // "Symbol(hello)"
leo.toString(); // "Symbol(hello)"
```

Symbol 可以转换为布尔值，但不能转为数值：
```js
let a1 = Symbol();
Boolean(a1);
!a1;        // false
Number(a1); // TypeError
a1 + 1 ;    // TypeError
```

Symbol 属性不参与 for...in/of 循环。
```js
let id = Symbol("id");
let user = {
  name: "Leo",
  age: 30,
  [id]: 123
};

for (let key in user) console.log(key); // name, age (no symbols)

// 使用 Symbol 任务直接访问
console.log( "Direct: " + user[id] );
```

## 3. 字面量中使用 Symbol 作为属性名

在对象字面量中使用 Symbol 作为属性名时，需要使用 方括号 （ [] ），如 [leo]: "leo" 。

好处：防止同名属性，还有防止键被改写或覆盖。
```js
let leo = Symbol();
// 写法1
let user = {};
user[leo] = 'leo';

// 写法2
let user = {
    [leo] : 'leo'
} 

// 写法3
let user = {};
Object.defineProperty(user, leo, {value : 'leo' });

// 3种写法 结果相同
user[leo]; // 'leo'
```
需要注意 ：Symbol作为对象属性名时，不能用点运算符，并且必须放在方括号内。
```js
let leo = Symbol();
let user = {};
// 不能用点运算
user.leo = 'leo';
user[leo] ; // undefined
user['leo'] ; // 'leo'

// 必须放在方括号内
let user = {
    [leo] : function (text){
        console.log(text);
    }
}
user[leo]('leo'); // 'leo'

// 上面等价于 更简洁
let user = {
    [leo](text){
        console.log(text);
    }
}
```

常常还用于创建一组常量，保证所有值不相等：
```js
let user = {};
user.list = {
    AAA: Symbol('Leo'),
    BBB: Symbol('Robin'),
    CCC: Symbol('Pingan')
}
```

## 4. 应用：消除魔术字符串

魔术字符串：指代码中多次出现，强耦合的字符串或数值，应该避免，而使用含义清晰的变量代替。

这样如果要修改这个字符串只用更改一个地方即可，方便快捷也不会导致程序出错。

```js
function fun(name){
    if(name == 'leo') {
        console.log('hello');
    }
}
fun('leo');   // 'leo' 为魔术字符串
```
常使用变量，消除魔术字符串：
```js
let obj = {
    name: 'leo'
};
function fun(name){
    if(name == obj.name){
        console.log('hello');
    }
}
fun(obj.name); // 'hello'
```
使用Symbol消除强耦合，使得不需关系具体的值:
```js
let obj = {
    name: Symbol()
};
function fun (name){
    if(name == obj.name){
        console.log('hello');
    }
}
fun(obj.name); // 'hello'
```
## 5. 属性名遍历
Symbol作为属性名遍历，不出现在for...in、for...of循环，也不被Object.keys()、Object.getOwnPropertyNames()、JSON.stringify()返回。
```js
let leo = Symbol('leo'), robin = Symbol('robin');
let user = {
    [leo]:'18', [robin]:'28'
}
for(let k of Object.values(user)){console.log(k)}
// 无输出

let user = {};
let leo = Symbol('leo');
Object.defineProperty(user, leo, {value: 'hi'});
for(let k in user){
    console.log(k); // 无输出
}
Object.getOwnPropertyNames(user);   // []
Object.getOwnPropertySymbols(user); // [Symbol(leo)]
```
Object.getOwnPropertySymbols方法返回一个数组，包含当前对象所有用做属性名的Symbol值。
```js
let user = {};
let leo = Symbol('leo');
let pingan = Symbol('pingan');
user[leo] = 'hi leo';
user[pingan] = 'hi pingan';
let obj = Object.getOwnPropertySymbols(user);
obj; //  [Symbol(leo), Symbol(pingan)]
```
另外可以使用Reflect.ownKeys方法可以返回所有类型的键名，包括常规键名和 Symbol 键名。
```js
let user = {
    [Symbol('leo')]: 1,
    age : 2, 
    address : 3,
}
Reflect.ownKeys(user); // ['age', 'address',Symbol('leo')]
```
由于Symbol值作为名称的属性不被常规方法遍历获取，因此常用于定义对象的一些非私有，且内部使用的方法。

## 6. Symbol.for()、Symbol.keyFor()

### 6.1 Symbol.for()
用于重复使用一个Symbol值，接收一个字符串作为参数，若存在用此参数作为名称的Symbol值，返回这个Symbol，否则新建并返回以这个参数为名称的Symbol值。
```js
let leo = Symbol.for('leo');
let pingan = Symbol.for('pingan');
leo === pingan;  // true
```
Symbol() 和 Symbol.for()区别：
```js
Symbol.for('leo') === Symbol.for('leo'); // true
Symbol('leo') === Symbol('leo');         // false
```

### 6.2 Symbol.keyFor()
用于返回一个已使用的Symbol类型的key:
```js
let leo = Symbol.for('leo');
Symbol.keyFor(leo);   //  'leo'

let leo = Symbol('leo');
Symbol.keyFor(leo);   //  undefined
```
## 7. 内置的Symbol值
ES6提供11个内置的Symbol值，指向语言内部使用的方法：
### 7.1 Symbol.hasInstance
当其他对象使用instanceof运算符，判断是否为该对象的实例时，会调用这个方法。比如，foo instanceof Foo在语言内部，实际调用的是Foo[Symbol.hasInstance](foo)。
```js
class P {
    [Symbol.hasInstance](a){
        return a instanceof Array;
    }
}
[1, 2, 3] instanceof new P(); // true
```
P是一个类，new P()会返回一个实例，该实例的Symbol.hasInstance方法，会在进行instanceof运算时自动调用，判断左侧的运算子是否为Array的实例。
### 7.2 Symbol.isConcatSpreadable
值为布尔值，表示该对象用于Array.prototype.concat()时，是否可以展开。
```js
let a = ['aa','bb'];
['cc','dd'].concat(a, 'ee'); 
// ['cc', 'dd', 'aa', 'bb', 'ee']
a[Symbol.isConcatSpreadable]; // undefined
let b = ['aa','bb']; 
b[Symbol.isConcatSpreadable] = false; 
['cc','dd'].concat(b, 'ee'); 
// ['cc', 'dd',[ 'aa', 'bb'], 'ee']
```
### 7.3 Symbol.species
指向一个构造函数，在创建衍生对象时会使用，使用时需要用get取值器。
```js
class P extends Array {
    static get [Symbol.species](){
        return this;
    }
}
```
解决下面问题：
```js
// 问题：  b应该是 Array 的实例，实际上是 P 的实例
class P extends Array{}
let a = new P(1,2,3);
let b = a.map(x => x);
b instanceof Array; // true
b instanceof P; // true
// 解决：  通过使用 Symbol.species
class P extends Array {
  static get [Symbol.species]() { return Array; }
}
let a = new P();
let b = a.map(x => x);
b instanceof P;     // false
b instanceof Array; // true
```

### 7.4 Symbol.match
当执行str.match(myObject)，传入的属性存在时会调用，并返回该方法的返回值。
```js
class P {
    [Symbol.match](string){
        return 'hello world'.indexOf(string);
    }
}
'h'.match(new P());   // 0
```

### 7.5 Symbol.replace
当该对象被String.prototype.replace方法调用时，会返回该方法的返回值。
```js
let a = {};
a[Symbol.replace] = (...s) => console.log(s);
'Hello'.replace(a , 'World') // ["Hello", "World"]
```

### 7.6 Symbol.hasInstance
当该对象被String.prototype.search方法调用时，会返回该方法的返回值。
```js
class P {
    constructor(val) {
        this.val = val;
    }
    [Symbol.search](s){
        return s.indexOf(this.val);
    }
}
'hileo'.search(new P('leo')); // 2
```

### 7.7 Symbol.split
当该对象被String.prototype.split方法调用时，会返回该方法的返回值。
// 重新定义了字符串对象的split方法的行为
```js
class P {
    constructor(val) {
        this.val = val;
    }
    [Symbol.split](s) {
        let i = s.indexOf(this.val);
        if(i == -1) return s;
        return [
            s.substr(0, i),
            s.substr(i + this.val.length)
        ]
    }
}
'helloworld'.split(new P('hello')); // ["hello", ""]
'helloworld'.split(new P('world')); // ["", "world"] 
'helloworld'.split(new P('leo'));   // "helloworld"
```
### 7.8 Symbol.iterator
对象进行for...of循环时，会调用Symbol.iterator方法，返回该对象的默认遍历器。
```js
class P {
    *[Symbol.interator]() {
        let i = 0;
        while(this[i] !== undefined ) {
            yield this[i];
            ++i;
        }
    }
}
let a = new P();
a[0] = 1;
a[1] = 2;
for (let k of a){
    console.log(k);
}
```

### 7.9.Symbol.toPrimitive
该对象被转为原始类型的值时，会调用这个方法，返回该对象对应的原始类型值。调用时，需要接收一个字符串参数，表示当前运算模式，运算模式有：
```js
Number : 此时需要转换成数值
String : 此时需要转换成字符串
Default : 此时可以转换成数值或字符串
```
```js
let obj = {
  [Symbol.toPrimitive](hint) {
    switch (hint) {
      case 'number':
        return 123;
      case 'string':
        return 'str';
      case 'default':
        return 'default';
      default:
        throw new Error();
     }
   }
};
2 * obj // 246
3 + obj // '3default'
obj == 'default' // true
String(obj) // 'str'
```

### 7.10 Symbol.toStringTag
在该对象上面调用Object.prototype.toString方法时，如果这个属性存在，它的返回值会出现在toString方法返回的字符串之中，表示对象的类型。也就是说，这个属性可以用来定制[object Object]或[object Array]中object后面的那个字符串。
```js
// 例一
({[Symbol.toStringTag]: 'Foo'}.toString())
// "[object Foo]"
// 例二
class Collection {
  get [Symbol.toStringTag]() {
    return 'xxx';
  }
}
let x = new Collection();
Object.prototype.toString.call(x) // "[object xxx]"
```

### 7.11 Symbol.unscopables
该对象指定了使用with关键字时，哪些属性会被with环境排除。
```js
// 没有 unscopables 时
class MyClass {
  foo() { return 1; }
}
var foo = function () { return 2; };
with (MyClass.prototype) {
  foo(); // 1
}
// 有 unscopables 时
class MyClass {
  foo() { return 1; }
  get [Symbol.unscopables]() {
    return { foo: true };
  }
}
var foo = function () { return 2; };
with (MyClass.prototype) {
  foo(); // 2
}
```
上面代码通过指定Symbol.unscopables属性，使得with语法块不会在当前作用域寻找foo属性，即foo将指向外层作用域的变量。
