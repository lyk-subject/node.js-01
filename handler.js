var fs = require('fs');

function index (response){
    var myStream = fs.createReadStream('./index.html');
    response.writeHead(200, {'Content-Type': 'text/html'});   
    myStream.pipe(response)
}
function getUser(response,params){
    console.log(params);
    var user = {
        name : 'liang',
        live : 'rz'
    }
    response.writeHead(200, {'Content-Type': 'application/json'});   
    response.end(JSON.stringify(user)) 
}
function addUser(response,params){
  console.log(params);
}

module.exports = {
    index : index,
    getUser : getUser,
    addUser : addUser
}