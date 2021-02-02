const WebSocket = require('ws');
const http = require('http');

const server = http.createServer((req, res) => res.end('req complete'));
const wsserver = new WebSocket.Server({server});
const wsocket = new WebSocket("ws://127.0.0.1:8080");

wsserver.on('connection', function connection(ws) {
    ws.onmessage = (msg) => ws.send("hello world");
    console.log('ws msg sent');
});

wsocket.onmessage = () => console.log(message);
server.listen(8080);


/*TODO
- troubleshoot inability to see message sent to ws
*/