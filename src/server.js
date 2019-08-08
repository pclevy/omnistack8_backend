express = require('express');
const routes = require('./routes');

server = express();

server.use(routes);

server.listen(3333);

