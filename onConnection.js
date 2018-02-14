function onConnection(socket){
    console.log("connection " + socket.id);
    socket.on('send-message', function (message) {
        io.sockets.emit('send-message-to-all', message);
    });
}

module.exports = onConnection;