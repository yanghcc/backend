var WebSocketServer = require('ws').Server,
    wss = new WebSocketServer({
        port: 3000
    });
wss.on('connection', function (ws) {
    console.log('client connected');
    ws.on('message', function (message) {
        console.log(message);
    });
    autoSent()
    function autoSent() {
        let a = 0
        setInterval(() => {
            a++
            ws.send('fuck!' + a);
        }, 1000)
    }
});
// const server = require('http').createServer();
// const io = require('socket.io')(server);
// io.on('connection', client => {
//     client.on('message', data => {
//         console.log(data)
//     });
//     client.on('disconnect', () => {
//         console.log('disconnect')
//     });
// });
// server.listen(3000);