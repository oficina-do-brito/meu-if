import AdminController from '@modules/administrador/controller';
import AlunoController from '@modules/aluno/controller';
import HorarioContoller from '@modules/horario/controller/horario.controller';
import MotoristaController from '@modules/motorista/controller';
import OnibusController from '@modules/onibus/controller/onibus.controller';
import { Router } from 'express';

const routes = Router();
const alunoControler = new AlunoController();
const horarioController = new HorarioContoller();
const onibusController = new OnibusController();
const motoristaController = new MotoristaController();
const administradorController = new AdminController();

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

//                                                              --      Modules            --
//Admin routes
routes.post('/administrador', administradorController.create);
routes.get('/administrador', administradorController.getAll);
routes.get('/administrador/:id', administradorController.getOne);
routes.patch('/administrador/:id', administradorController.update);
routes.delete('/administrador/:id', administradorController.delete);

//Horarios routes
routes.get('/horarios', horarioController.index);

//Onibus routes
routes.get('/onibus', onibusController.findAll);
routes.get('/onibus/:id', onibusController.findOne);
routes.post('/onibus', onibusController.create);
routes.patch('/onibus/:id', onibusController.update);
routes.delete('/onibus/:id', onibusController.deleteOne);

//Motorista routes
routes.get('/motorista', motoristaController.getAllMotorista);

//Motorista routes
routes.post('/aluno', alunoControler.create);

export default routes;
