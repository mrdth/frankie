import fs from 'fs';
import path from 'path';
import edge from 'edge.js';
import type Express from 'express';

const engine = (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
  /*
  |-------------------------------------------------------------------------------------------------
  | Register the edge view engine
  |-------------------------------------------------------------------------------------------------
  */

  req.app.engine('edge', async (filePath, options, callback) => {
    edge.mount(req.app.settings.views);
    return callback(null, await edge.render(filePath, options));
  });

  /*
  |-------------------------------------------------------------------------------------------------
  | Set the app view engine
  |-------------------------------------------------------------------------------------------------
  */

  req.app.set('views', path.join(__dirname, '/views'));
  req.app.set('view engine', 'edge');

  next();
};

export default engine;
