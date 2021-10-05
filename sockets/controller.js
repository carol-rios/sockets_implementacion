const socketController = (socket) => {
    console.log('Client online.', socket.id);

    socket.on('disconnect', () => {
        console.log('Client offline.', socket.id);
    })
    socket.on('enviar-mensaje', (payload, callback) => {
        const id = 12345
        callback(id)
        socket.broadcast.emit('mensaje-server', payload)
    })
}

export { socketController }