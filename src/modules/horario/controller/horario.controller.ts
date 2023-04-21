import { Request, Response } from 'express';
import { HorarioService } from '../service/horario.service';

export default class HorarioContoller {
  public async index(request: Request, response: Response) {
    //crio uma instancia dom serviço  // precisa de 1 repositorio
    const servicoHorario = new HorarioService();
    const resp = servicoHorario.findHorario();
    return response.json(resp);
  }
}
