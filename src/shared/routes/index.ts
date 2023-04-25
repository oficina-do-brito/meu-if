import HorarioContoller from '@modules/horario/controller/horario.controller';
import MotoristaController from '@modules/motorista/controller';
import OnibusController from '@modules/onibus/controller/onibus.controller';
import { Router } from 'express';

const routes = Router();
const horarioController = new HorarioContoller();
const busController = new OnibusController();
const motoristaController = new MotoristaController();

routes.get('/', (request, response) => {
  return response.json({
    resources: [
      {
        aluno: {
          Post: '/aluno',
          GetAll: '/aluno',
          Get: '/aluno/:id',
          Patch: 'aluno/:id',
          Delete: 'aluno/:id',
        },
      },
      {
        documento: {
          Post: '/documento',
          GetAll: '/documento',
          Get: '/documento/:id',
          Patch: 'documento/:id',
          Delete: 'documento/:id',
        },
      },
      {
        horario: {
          Post: '/horario',
          GetAll: '/horario',
          Get: '/horario/:id',
          Patch: 'horario/:id',
          Delete: 'horario/:id',
        },
      },
      {
        motorista: {
          Post: '/motorista',
          GetAll: '/motorista',
          Get: '/motorista/:id',
          Patch: 'motorista/:id',
          Delete: 'motorista/:id',
        },
      },
      {
        onibus: {
          Post: '/onibus',
          GetAll: '/onibus',
          Get: '/onibus/onibus:id',
          Patch: '/onibus:id',
          Delete: '/onibus:id',
        },
      },
    ],
  });
});
//Horarios routes
routes.get('/horarios', horarioController.index);

//Onibus routes
routes.get('/onibus', busController.findAll);
routes.get('/onibus/:id', busController.findOne);
routes.post('/onibus', busController.create);
routes.patch('/onibus/:id', busController.update);
routes.delete('/onibus/:id', busController.deleteOne);

//Motorista routes
routes.get('/motorista', motoristaController.getAllMotorista);

export default routes;
