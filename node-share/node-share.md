title: Node.js
speaker: Shadow
transition: glue
theme: green
files: /js/demo.js,/css/demo.css

[slide]

# Node.js 学习分享
## 演讲者：Shadow

[slide]

# 目录
------

## Node.js简介
## Node.js常用模块
## 异步解决方案
## web应用框架

[slide]

[magic data-transition="zoomIn"]
# Node.js简介

=====

## 什么是Node.js

Node.js is a JavaScript runtime built on Chrome's `V8` JavaScript `engine`.

Node.js uses an `event-driven`, `non-blocking I/O model` that makes it lightweight and efficient

=====

## 安装Node.js

- 官网下载安装文件直接安装(windows or mac os)
- 源码安装(linux)
- 使用版本管理工具安装(nvm)

=====

## npm 和 nvm

+ npm(Node.js package manager), yarn
+ nvm(Node.js version manager)

=====

## IDE

- webstorm(插件丰富)
- subline
- vscode(推荐)
- vim

=====

## 关于V8

+ V8 is Google's open source `JavaScript engine`.

+ V8 implements `ECMAScript` as specified in ECMA-262.

+ V8 is written in `C++` and is used in Google Chrome, the open source browser from Google.

+ V8 can run `standalone`, or can be `embedded` into any C++ application.

=====

## 事件驱动机制与异步回调机制

Node.js uses an `event-driven`, `non-blocking I/O model` that makes it lightweight and efficient

+ Node.js 大多数模块都是基于`Events`

+ Node.js 使用回调函数的形式来完成异步操作

=====

## 事件驱动和异步回调举例
```javascript
let http = require('http');

let options = {
    host: 'www.google.com',
    port: 80,
    path: '/upload',
    method: 'POST'
};

let req = http.request(options, function (res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function (body) {
        console.log('BODY: ' + body);
    });
    console.log('test');
});
req.on('error', function (e) {
    console.log('problem with request: ' + e.message);
});
// write data to request body
req.write('data\n');
req.write('data\n');
req.end();
```
=====

[/magic]

[slide]

[magic data-transition="zoomIn"]

# Node.js常用模块

=====

## [fs](https://nodejs.org/api/fs.html)

Node.js 的基础文件读写模块


=====

## [events](https://nodejs.org/api/events.html)

Node.js 基础事件驱动模块

+ .addListener()
+ .emit()
+ .on()
+ .removeListener()

=====

## [child_process](https://nodejs.org/api/child_process.html)

Node.js 多进程处理模块

+ .exec()
+ .fork()
+ .spawn()
+ .send()

=====

## [http](https://nodejs.org/api/http.html)

Node.js HTTP server and client

+ http.Agent
+ http.ClientRequest
+ http.Server
+ http.ServerResponse
+ http.IncomingMessage
+ http.createServer()
+ http.request()

=====

## process

The process object is a `global` that provides information about, and control over, the current `Node.js process`. As a global, it is always available to Node.js applications without using require().

+ process.abort()
+ process.exit()
+ process.cwd()

...

=====

## stream

所有Node.js读写流的基础模块

+ Writable Stream
+ Readable Stream

=====
## 模块总结

+ 基础模块都是异步回调的方式
+ 基础模块大多都是事件驱动的，且都基于 `events`
+ 基础模块的读写都是基于 `stream`
[/magic]

[slide]

[magic data-transition="zoomIn"]

## 异步解决方案

+ callback-hell，难以维护
+ 使用同步的方式编写异步代码
=====

## [async](http://caolan.github.io/async/)

+ series
+ paralle
+ waterfall
+ each/filter/map

=====

## Promise

一个 Promise 表示一个现在、将来或永不可能可用的值

[Promise/A+](https://promisesaplus.com/)

+ es6 原生支持Promise
+ Q
+ bluebird

=====

## generator函数

es6 的新语法，Generator 函数是`协程`在 ES6 的实现，最大特点就是可以交出函数的执行权（即暂停执行）

```javascript
function* gen(x){
  var y = yield x + 2;
  return y;
}

let g = gen(1);
gen.next();
gen.next();
```

=====

## async/await
es7的新语法，async 函数就是 Generator 函数的语法糖。

```javascript
var fs = require('fs');

var readFile = function (fileName){
  return new Promise(function (resolve, reject){
    fs.readFile(fileName, function(error, data){
      if (error) reject(error);
      resolve(data);
    });
  });
};

var gen = function* (){
  var f1 = yield readFile('/etc/fstab');
  var f2 = yield readFile('/etc/shells');
  console.log(f1.toString());
  console.log(f2.toString());
};


var asyncReadFile = async function (){
  var f1 = await readFile('/etc/fstab');
  var f2 = await readFile('/etc/shells');
  console.log(f1.toString());
  console.log(f2.toString());
};

```


[/magic]

[slide]

# web应用框架


## express


## koa


## meteor


## thinkJS


## sails


## egg

[slide]


# 构建打包工具


## grunt/gulp


## webpack

[slide]

# 测试工具

## mocha

## chai


[slide]

# 一些优秀的Node.js开源项目

+ [Nodeclub](https://github.com/cnodejs/nodeclub/), 使用 Node.js 和 MongoDB 开发的社区系统
+ hexo, yeoman, 博客构建工具
+ N-chat 使用 Express + Socket.IO 搭建的多人聊天室
+ N-blog 使用 Express + MongoDB 搭建多人博客

[slide]

# Thanks