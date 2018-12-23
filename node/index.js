const env = process.env.NODE_ENV || 'development';
const config = require('./config/config')[env];
const app = require('express')();
const http = require('http');


const server = http.createServer(app);
const io = require('socket.io')(server);

require('./config/database')(config);
require('./config/express')(app);
require('./config/routes')(app);
require('./config/websockets')(io);
server.listen(config.port, () => console.log("Listening on port: " + config.port));