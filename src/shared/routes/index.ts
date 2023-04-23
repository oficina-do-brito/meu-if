import HorarioContoller from '@modules/horario/controller/horario.controller';
import OnibusController from '@modules/onibus/controller/onibus.controller';
import { Router } from 'express';

const routes = Router();
const horarioController = new HorarioContoller();
const busController = new OnibusController();

routes.get('/', (request, response) => {
  return response.json({
    message: `Bem vindo a app meu-if temos as seguintes rotas
      GET: /api ... 
    `,
  });
});
routes.get('/horarios', horarioController.index);

//Onibus routes
routes.get('/onibus', busController.findAll);
routes.get('/onibus/:id', busController.findOne);
routes.post('/onibus', busController.create);
routes.patch('/onibus/:id', busController.update);
routes.delete('/onibus/:id', busController.deleteOne);

export default routes;
