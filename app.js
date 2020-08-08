var handler = require('./handler');
var route = require('./route');
var server = require('./server');

var handle = {}
handle['/'] = handler.index;
handle['/index'] = handler.index;
handle['/getUser'] = handler.getUser;
handle['/addUser'] = handler.addUser;
server.startServer(handle,route)
