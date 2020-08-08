const { request, response } = require("express");

var fs = require('fs');

var route = function(pathname,handle,response,params){
    if(typeof handle[pathname] === 'function'){
        handle[pathname](response,params);
    }else{
        console.log(404);
    }
}

module.exports.route = route;