import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => {
  return response.json({
    message: `Bem vindo a app meu-if temos as seguintes rotas
      GET: /api ... 
    `,
  });
});
export default routes;
