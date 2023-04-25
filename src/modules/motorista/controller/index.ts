import { Request, Response } from 'express';
import MotoristaService from '../service';

export default class MotoristaController {
  private _serviceMotorista: MotoristaService;
  constructor() {
    this._serviceMotorista = new MotoristaService();
  }
  public getService(): MotoristaService {
    return this._serviceMotorista;
  }

  public async getAllMotorista(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const motoristas = this.getService().getAll();
    return response.json(motoristas);
  }
}
