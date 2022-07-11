#!/usr/bin/env node

// Module dependencies
import app from '../app.js';
import debugLib from 'debug';
//import http from 'http';
const debug = debugLib('tarot-api:server');

// Get port from environment and store in Express
const PORT = normalizePort(process.env.PORT || '8000');
app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});

//app.set('port', port);

// Create HTTP server
//var server = http.createServer(app);

// Listen on provided port, on all network interfaces.
//server.listen(PORT);
//server.on('error', onError);
//server.on('listening', onListening);

// Normalize a port into a number, string, or false.
function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}


// Event listener for HTTP server "error" event.
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof PORT === 'string'
    ? 'Pipe ' + PORT
    : 'Port ' + PORT;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

// Event listener for HTTP server "listening" event.
function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
