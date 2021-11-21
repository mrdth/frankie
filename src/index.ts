import express from 'express';
import renderEngine from './express-edge';
import http from 'http';

import routes from './routes';

require('dotenv').config();

const app = express();

app.use(renderEngine);

routes.register(app);

const port = process.env.APP_PORT;
const server = http.createServer(app).listen(port);

// module.exports = server;
