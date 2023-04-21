import HorarioContoller from '@modules/horario/controller/horario.controller';
import { Router } from 'express';

const routes = Router();
const horarioController = new HorarioContoller();

routes.get('/', (request, response) => {
  return response.json({
    message: `Bem vindo a app meu-if temos as seguintes rotas
      GET: /api ... 
    `,
  });
});
routes.get('/horarios', horarioController.index);

export default routes;
