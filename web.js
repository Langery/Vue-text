/* eslint-disable */
var http = require('http')
var url = require('url')
var fs = require('fs')

// 访问地址 端口号
var hostName = '127.0.0.1'
var port = 3000

// web创建服务
var web = http.createServer(function (req, res) {
  var pathname = __dirname + url.parse(req.url).pathname
  // __dirname: Node文件夹位置
  // console.log(pathname)
  fs.readFile(pathname, function (err, data) {
    // res.end('Hello Node')
    res.end(data)
  })
})

web.listen(port, hostName, function () {
  console.log('server start()')
})
