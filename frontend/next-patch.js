const http = require('http');

const HTTP_KEEPALIVE_TIMEOUT_MS = 550_000;

function patchCreateServer() {
  const createServer = http.createServer;
  http.createServer = (handler) => {
    const server = createServer(handler);
    server.keepAliveTimeout = HTTP_KEEPALIVE_TIMEOUT_MS;
    return server;
  };
}

patchCreateServer();