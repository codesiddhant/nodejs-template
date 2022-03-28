var socket = require('socket.io-client')('http://editor.nekione.local:4000/');
socket.on('connect', function(data){
});

let i = 0

let data = {
  "ip" : "12345",
  "dir": "/home/siddhant" 
}
let paw =JSON.stringify(data);
setInterval(function(){
  socket.emit("data", paw);
 i++
}, 2000);

socket.on('reply', function(data){

  console.log(data)
});


//socket.emit("notice", "siddhant");
// socket.on('disconnect', function(){});


