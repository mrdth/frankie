import express from 'express';
import http from 'http';
import routes from './routes';
require('dotenv').config();

const app = express();
routes.register(app);

const port = process.env.APP_PORT;
const server = http.createServer(app).listen(port);

// module.exports = server;
