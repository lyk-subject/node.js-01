var http = require('http')
var url = require('url')
const StringDecoder = require('string_decoder').StringDecoder;
var querystring = require('querystring');
const { LOADIPHLPAPI } = require('dns');
function startServer(handle, route) {
    var server = http.createServer(function (request, response) {
        if (request.url !== "/favicon.ico") {
            var pathname = url.parse(request.url).pathname;
            console.log(pathname);
            var params = null
            var data = "";
            //提交方式处理
            if (request.method === 'GET') {
                params = url.parse(request.url).query;
                route.route(pathname, handle, response, params);
            } else if (request.method === 'POST') {
                request.on('data', chunk => {
                    data+=chunk;	//创建一个数组，把每次传递过来的数据保存
                }).on('end', () => {
                    console.log(data);
                    route.route(pathname, handle, response, data);
                });
            }
        }

    })
    server.listen('8080')
}

module.exports.startServer = startServer;