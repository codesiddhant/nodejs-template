var socket = require('socket.io-client')('http://edit.webserver.com:4000/');
socket.on('connect', function(data){
});

let i = 0
setInterval(function(){
  socket.emit("data", "siddhant " + i);
 i++
}, 2000);

socket.on('reply', function(data){

  console.log(data + ' ' + i)
});


//socket.emit("notice", "siddhant");
// socket.on('disconnect', function(){});


