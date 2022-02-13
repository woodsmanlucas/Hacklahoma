const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors')
app.use(cors())
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

app.get('/', (req, res) => {
  res.send({ response: "I am alive"}).status(200)
});

var messages = []

io.on('connection', (socket) => {
  console.log('a user connected');
  io.emit("messages", messages);
  socket.on('message', (msg) => {
    messages = [...messages, msg]
    io.emit("messages", messages);
    console.log(msg)
  })
});

server.listen(5000, () => {
  console.log('listening on *:5000');
});