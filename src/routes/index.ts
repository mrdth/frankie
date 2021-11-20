import { Application } from 'express';
import fs from 'fs';
import path from 'path';

const router = {
  register: (app: Application) => {
    const fileList = fs.readdirSync(__dirname);

    fileList.forEach(function (fileName) {
      if (fileName === 'index.ts') {
        return;
      }
      const moduleName = path.basename(fileName, '.ts');

      try {
        const module = require(path.join(__dirname, fileName));
        app.use(`/${moduleName}/`, module);
      } catch (e) {
        console.error(e);
      }
    });
  }
};

export default router;
