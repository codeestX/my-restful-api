基于node.js + koa2搭建的restfulapi demo，扩展自[learn-javascript](https://github.com/michaelliao/learn-javascript)，基本涵盖了主要的api类型，联动文章：[编写](http://codeest.cn/2016/09/21/web-api-code/) [部署](http://codeest.cn/2016/09/24/web-api/)

#Usage
项目目录下执行，`node start`

* GET (json)  
`http://localhost:3000/api/geeknews/version`
`http://localhost:3000/api/products`

* GET (image)  
`http://localhost:3000/img/test.jpg`

* GET (file)  
`http://localhost:3000/apk/geeknews.apk`

* POST (json)  
`http://localhost:3000/api/products`  
body {"name":"XBox","price":3999}

* DELETE (json)  
`http://localhost:3000/api/products/p1`