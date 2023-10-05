const express = require('express');
const app = express();

const server = require('http').createServer(app);

const cors = require('cors');
app.use(cors());

const io = require('socket.io')(server,{
  cors:{
    origin:"*"
  }
});
// const connectedSockets = {};

io.on('connection', (socket) => {
  const socketId = socket.id;

  socket.on("chat",(payload)=>{
    console.log(payload);
    io.emit("chat",payload) 
  })
});


server.listen(5000, () => {
  console.log('Server listening on port 5000.');
});
