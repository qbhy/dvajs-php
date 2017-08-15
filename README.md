# dvajs-php

[dvaJs](https://github.com/dvajs/dva) 的 php 服务端渲染实例

## 特性

* 简单易用：php api 仅两步(new DvaJs and exec render) 
* 支持所有 dvajs 的特性(RN相关除外)

## 项目依赖

1. php 的 `v8js` 扩展，并且版本必须 >= 0.1.3

## 安装
```bash
$ composer require 96qbhy/dvajs:dev-master
```

## 使用示例(临时)

### 克隆本项目运行
```bash
git clone https://github.com/96qbhy/dvajs-php.git
cd dvajs-php/views
npm install
npm run build
cd ..
composer dumpautoload
php -S localhost:8088
```
完成以上操作后在浏览器访问 `http://localost:8088/example.php` 即可看到效果。  
  
### 在框架中集成
#### 在 `laravel` 中集成 `dvajs-php` 
[https://github.com/96qbhy/dvajs-laravel](https://github.com/96qbhy/dvajs-laravel)
> 更多例子请稍等，或者可以给我 PR 。



[dvajs-php](https://github.com/96qbhy/dvajs-php)  
96qbhy@gmail.com

