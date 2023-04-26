import { Request, Response } from 'express';
import MotoristaService from '../service';

export default class MotoristaController {
  private _serviceMotorista: MotoristaService;
  constructor() {
    this._serviceMotorista = new MotoristaService();
  }
  getAllMotorista = async (request: Request, response: Response) => {
    const motoristas = this._serviceMotorista.getAll();
    return response.json(motoristas);
  };
}
