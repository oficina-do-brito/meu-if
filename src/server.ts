import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { AppDataSource } from './database/data-source';
import routes from '@shared/routes';
import AppError from '@shared/error';

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }
    return response.status(500).json({
      status: 'error',
      message: 'Intern al server error',
    });
  },
);

AppDataSource.initialize().then(async () => {
  // eslint-disable-next-line no-console
  console.log('App conectada ao banco');
  app.listen(3333, () => {
    // eslint-disable-next-line no-console
    console.log('App rodando...');
  });
});
