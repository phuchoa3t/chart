$(function() {
    var socket = io.connect('http://localhost:3030', {
        'sync disconnect on unload': true
    });
    
    socket.on('disconnect', () => {
        log('you have been disconnected');
    });

    socket.on('reconnect', () => {
        log('you have been reconnected');
        if (username) {
            socket.emit('add user', username);
        }
    });

    socket.on('reconnect_error', () => {
        log('attempt to reconnect has failed');
    });

    socket.on('change_price', (data) => {
        console.log(data)
        $("#bitx_eth").text(data.price)
        // log('attempt to reconnect has failed');
    });

});
