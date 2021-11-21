import { NextFunction, Request, Response } from 'express';

const controller = {

  show: async function (req: Request, res: Response, next: NextFunction) {
    res.render('home', { message: 'Hello, World!' });
  }
};

export default controller;
