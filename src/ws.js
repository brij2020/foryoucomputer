
const { io } = require("socket.io-client");
const socket = io('ws://localhost:8080/');
// socket.on("connect", () => {
//     console.log(socket.connected); // true
//   });
//   socket.emit("hello", "world");
socket.open(e => {
    if(e) {
        console.log('connected',e)

    } else {
        console.log('connected')
    }
})
socket.on("nextschedule", (arg) => {
    console.log(arg)
  });
 export  { socket }
  

 