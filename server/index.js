const express = require("express");
const socketio = require("socket.io");
const http = require("http");

const PORT = process.env.PORT || 8000;

const router = require("./router");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on("connection", (socket) => {
  console.log("socket");

  socket.on('join', ({ name, group}) => {
      console.log(name, group);
  });
  socket.on('disconnect', () => {
      console.log('user had left...');
  })
});

app.use(router);

server.listen(PORT, () => console.log(`Running is port... ${PORT}`));
