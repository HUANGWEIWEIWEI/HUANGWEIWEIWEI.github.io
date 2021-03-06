# 1.计算机网络

## 1.1网络基础知识

### 1.1.1 计算机网络概念

是一个将分散的、具有独立功能的计算机系统，通过通信设备与线路连接起来，由功能完善的软件实现资源共享和信息传递的系统。

### 1.1.2功能

	数据通信
	资源共享
	负载均衡
    高可靠性

### 1.1.3分类
```
按通讯距离分  
	局域网 Local Area Network  
	    以太网  
			以太网的帧格式  
				其中目的地址和源地址指的是MAC地址，即设备的物理地址。MAC地址用于标示网卡，每个网卡都具有唯一的MAC 地址
                当在同一个局域网中，主机A需要给主机B发送消息时，主机A将以太网帧发出，此时局域网中所有主机均可收到这个桢，主机中的网卡接收到以太网桢后，会将目的MAC地址和自己的MAC地址进行比较,如果不相同就会丢弃，如果相同则会接收，此时则Ｂ主机就收到了Ａ的消息。
                其最后面是CRC循环冗余码，用于差错控制，即检验帧的正确性
                在以太网协议中，目的地址分为三种单播地址、广播地址、多播地址，其中单播地址如上面Ａ给Ｂ主机发送，其接收者为一个，并且其目的地址的最高字节的低位为０
			以太网的特点
				无连接。发送方和接收方不建立连接。
				不可靠。接收方不向发送方进行确认，差错帧直接丢弃。
			跟以太网相关的拓扑结构有星型和总线型
			CSMA/CD协议
				每一个站在发送数据之前以及发送数据时以及发送数据时都要检测一下总线上是否有其他计算机在发送数据。
				是总线型，半双工网络（半双工是指允许数据在两个方向上传输,但是,在某一时刻,只允许数据在一个方向上传输）
		无线局域网WLAN
			网络结构
            看下图
			上图的AP就是通信基站，如果基站覆盖的移动设备可以直接通过基站来通信，如果是不同基站的移动设备，不仅仅要通过自己的基站传输数据，还需要基站和基站之间传输数据，来达到两个在不同基站覆盖范围内的无线设备通信。
	城域网 Metropolitan Area Network
	广域网 Wide Area Network
按网络拓扑结构分
	总线型
	星型
	环型
	树型
	分布式
按信息交换方式分
按通信介质分
按传输带宽分
按使用范围分
按通讯传播方式分
```
![](https://gitee.com/hello_hww/img/raw/master/img1/20200721170257.png)

### 1.1.4衡量计算机网络的性能的指标
```
速率
	速率就是数据传输（数据是指0和1）的速率，比如你用迅雷下载，1兆每秒，来衡量目前数据传输的快慢。它是计算机网络中最重要的一个性能指标。
带宽
	在计算机网络中，网络带宽是指在单位时间（一般指的是1秒钟）内能传输的数据量，比如说你家的电信网络是100兆比特，意思是，一秒内最大的传输速率是100兆比特。
吞吐量
	吞吐量表示在单位时间内通过某个网络（或信道、接口）的数据量。
时延
	时延是指数据（报文/分组/比特流）从网络（或链路）的一端传送到另一端所需的时间。单位是s。
	发送时延
	传播时延
	排队时延
	处理时延
	往返时间
	时延带宽积--是指传播时延乘以带宽
```
## 1.1.5 OSI参考模型!!!


## 1.2 HTTP
## 1.3 HTTPS
## 1.4 TCP/IP
## 1.5 网络安全

