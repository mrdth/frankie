import { NextFunction, Request, Response } from 'express';

const controller = {

  show: async function (req: Request, res: Response, next: NextFunction) {
    res.send('Hello, World!');
  }
};

export default controller;
