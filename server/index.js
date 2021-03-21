const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const router = require('./router');


const PORT = process.env.PORT || 4000;

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connectio', (socket) => {
    console.log('New connetion...');

    socket.on('disconnect', () => {
        console.log('user had left...');
    })
});

app.use(router);

server.listen(PORT, () => console.log(`Running port... ${PORT}`))