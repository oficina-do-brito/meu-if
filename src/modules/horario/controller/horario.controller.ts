import { Request, Response } from 'express';
import { HorarioService } from '../service/horario.service';

export default class HorarioContoller {
  private servicoHorario = new HorarioService();

  public async index(request: Request, response: Response) {
    const resp = this.servicoHorario.findHorario();
    return response.json(resp);
  }
}
