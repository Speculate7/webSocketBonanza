const net = require('net');

const server = net.createServer((c) => {
  // 'connection' listener.
  console.log('client connected');
  c.on('end', () => {
    console.log('client disconnected');
  });
  //c.write('hello\r\n');
  c.write('HTTP/1.1 404 NOT FOUND\r\nsocket: bonanza\r\n\r\nso much body', () => {
    c.end();
  });
  c.setEncoding('utf-8');
  c.on('data', (data) => console.log(data));
  //c.pipe(c);
});
server.on('error', (err) => {
  throw err;
});
server.listen(8124, () => {
  console.log('server bound');
});