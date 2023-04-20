import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import { AppDataSource } from './database/data-source';
import routes from '@shared/routes';

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

AppDataSource.initialize().then(async () => {
  // eslint-disable-next-line no-console
  console.log('App conectada ao banco');
  app.listen(3333, () => {
    // eslint-disable-next-line no-console
    console.log('App rodando...');
  });
});
