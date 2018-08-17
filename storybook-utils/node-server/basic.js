const http = require('http');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const config = require('./config.json');

app.use('/api', require('./request'));

const { port } = config;
app.set('port', port);
const server = http.createServer(app);
server.listen(port, () => {
  console.log(`\n> Server for request listen on http://localhost:${port}/api`);
});
