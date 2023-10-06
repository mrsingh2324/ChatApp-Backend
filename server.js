
const { Server } = require("socket.io");

const io = new Server(8000, {
  cors: true,
});

io.on('connection', (socket) => {
  const socketId = socket.id;

  socket.on("chat",(payload)=>{
    console.log(payload);
    io.emit("chat",payload) 
  })
});
