const WebSocket = require('ws');

const port = 8080;
const wsserver = new WebSocket.Server({port});
const wsocket = new WebSocket("ws://localhost:8080");

wsserver.on('connection', function connection(ws) {
    ws.send("hello world");
    console.log('ws server started');
});

wsocket.onmessage = (message) => console.log(message.data);

/*
    Issues
i keep getting error 426 Upgrade required whenever I 
run this. I've been looking into how to handle upgrade
request and send headers. see link

    TODO
- add upgrade event and as res headers
*/