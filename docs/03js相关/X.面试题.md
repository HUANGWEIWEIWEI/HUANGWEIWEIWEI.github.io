# X. JS相关面试题

## 1.typeof Array 与 typeof Array()

``` js
typeof Array
//"function"
typeof Array() //"object"
```

Array本身是js内建的一个构造函数，

当他在调用或者初始化的时候，才会typeof成对象。

 构造函数，不实例化，也只是个函数。

 

## 2. 异步加载js的三种方法

defer：只支持IE如果您的脚本不会改变文档的内容，可将defer属性加入到&lt;script&gt;标签中，以便加快处理文档的速度。因为浏览器知道它将能够安全地读取文档的剩余部分而不用执行脚本，它将推迟对脚本的解释，直到文档已经显示给用户为止。 

async，HTML5属性仅适用于外部脚本，并且如果在IE中，同时存在defer和async，那么defer的优先级比较高，脚本将在页面完成时执行。 

创建script标签，插入到DOM中，加载完毕后callBack

### js加载时间线 ：

　　它是根据js出生的那一刻开始记录的一系列浏览器按照顺序做的事，形容的就是加载顺序，可以用来优化什么东西，理论基础，背下来.

　　1、创建Document对象，开始解析web页面。解析HTML元素和他们的文本内容后添加Element对象和Text节点到文档中。这个阶段 `document.readyState = 'loading'` 。（生成document对象，document状态位变为loading）

　　2、遇到link外部css，创建线程加载，并继续解析文档。

　　3、遇到script外部js，并且没有设置async、defer，浏览器加载，并阻塞，等待js加载完成并执行该脚本，然后继续解析文档。

　　4、遇到script外部js，并且设置有async、defer，浏览器创建线程加载，并继续解析文档。 对于async属性的脚本，脚本加载完成后立即执行。（异步禁止使用document.write()）

document.write(): 特别特殊他是把里面的东西当成HTML文档输出到页面里去，但是有一点就是，有的时候，当你整个文档全部都解析的差不多的时候再用document.write()的话会把你之前所有的文档流都清空，用它里面的文档流代替

例：整个页面只显示a，这里的document.write(); 在这里有消除文档流的功能，连script都消除了。

``` html
<div style="height:100px;width:100px;background-color:red;"></div>
<script type="text/javascript">
    window.onload = function() {
        document.write('a');
    }
</script>
```

　　5、遇到img等，先正常解析dom结构，然后浏览器异步加载src，并继续解析文档。

　　6、当文档解析完成，document.readyState = 'interactive'。
先解析完，再加载完，然后状态位变为interactive（活跃）

查看状态位的转换：

``` js
console.log(document.readyState);
document.onreadystatechange = function() {
    console.log(document.readyState);
}
```

　　7、文档解析完成后，所有设置有defer的脚本会按照顺序执行。（注意与async的不同, 但同样禁止使用(document.write()）; 

　　8、document对象触发DOMContentLoaded事件，这也标志着程序执行从同步脚本执行阶段，转化为事件驱动阶段。

例1：同时打印出a和complete, 而且onDOMContentLoaded是不好使的，只有绑定在addEventListener才好用。

``` js
    console.log(document.readyState);
    document.onreadystatechange = function() {
        console.log(document.readyState);
    }
    document.addEventListener('DOMContentLoaded', function() {
        console.log('a');
    }, false)
```

例2：

``` js
window.onload和下面这个的区别
$(document).ready(function() {
    //当DOM解析完就执行的部分（不用加载完，加载完是给用户看的，对于我们来说解析完就可以操作了）
    /*它的原理就是interactive和DOMContentLoaded事件*/
})
```

区别就是：window.onload满需要都加载完，但是它解析完就可以操作了（这是jQuery的方法）

例3：当把script放在上面时候最好这样写，不要写onload，千万不要写onload，但是最好的方法还是写在下面

``` html
<head>
    <meta charset="UTF-8">
    <title>lottery</title>
    <script type="text/javascript">
        document.addEventListener('DOMContentLoaded', function() {
            var div = document.getElementsByTagName('div')[0];
            console.log(div);
        }, false)
    </script>
    <!-- script标签写在上面又能处理下面的代码，而且效率还高，因为登高DOM解析完就执行，而不是DOM加载完 -->
</head>
<!-- //script标签写在上面又能处理下面的代码，而且效率还高，因为登高DOM解析完就执行，而不是DOM加载完 -->
```

　　9、当所有async的脚本加载完成并执行后、img等加载完成后，document.readyState = 'complete'，window对象触发load事件。

　　10、从此，以异步响应方式处理用户输入、网络事件等。

总结就是三个点：先生成document对象，代表js可以运行了，第二步就是文档解析完了，第三步就是文档加载完了并且执行完了

下面我们看看异步加载js的三种方式:

异步加载js的方法:

### 1)async   

HTML5的属性, 让JavaScript代码进行异步加载

``` html
<script type="text/javascript" src="05.js" async="async">
</script>
```

### 2)defer   

老版本IE专用

``` html
<script type="text/javascript" defer="defer">
</script>
```

### 3)动态的创建script的标签

(可以解决兼容h5以及低版本ie的问题),代码如下:

``` html
<script type="text/javascript">
    function asyncLoaded(url, callback) {
        var script = document.createElement("script");
        //                script.src = url;   假如说网速非常好，直接执行完成了，后面就监听不到状态的改变了
        if (script.readyState) {
            script.onreadystatechange = function() {
                if (script.readyState == "complete" || script.readyState == "loaded") {
                    //                            执行某个函数
                    callback()
                }
            }
        } else {
            script.onload = function() {
                //                        执行某个函数
                callback()
            }
        }
        script.src = url; //异步的过程
        document.head.appendChild(script)
    }
    asyncLoaded("05.js", function() {
        fn() //05.js中的函数
    })
</script>
```
