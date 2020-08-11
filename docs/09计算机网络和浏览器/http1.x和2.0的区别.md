# http1.x和2.0的区别?有没有去了解过传输效率方面的对比？

## Http协议的进化史

随着Http协议发展的20年间，从物理带宽、CPU、内存，到软件都有了很大的提升，而原来的协议也具有了很大的局限性：

- 性能低于带宽的使用率
- Web的设计与维护变得更复杂
- 客户端与服务端的资源消耗增加
- 资源的缓存局限

![](https://gitee.com/hello_hww/img/raw/master/img1/20200620223117.png)

而HTTP/2 的主要设计思想应该都是源自 Google的 SPDY 协议。

## HTTP/2的优势

HTTP/2试图解决HTTP/1.1的许多缺点和不灵活之处。

- Multiplexing and Concurrency：多个请求可以同时在同一个TCP链接中在耗时非常短的情况下成功发送，并且Response能够允许不按顺序被接收，在这过程中客户端与服务端不需要建立多个TCP链接。
- Stream Dependencies：客户端可以告知Server，哪些资源可以优先传送
- Header Compression：Http头压缩后，大小会被大大减小
- Server Push：Server可以在客户端没有请求之前发送一些资源














