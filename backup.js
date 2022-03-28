var socket = require('socket.io-client')('http://192.168.106.138:8000/');
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


var socket = require('socket.io-client')('http://192.168.106.138:8000/');
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


