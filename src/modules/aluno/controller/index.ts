import { Request, Response } from 'express';
import AlunoService from '../service';

export default class AlunoController {
  private _alunoService: AlunoService;
  constructor() {
    this._alunoService = new AlunoService();
  }
  create = async (request: Request, response: Response): Promise<Response> => {
    const aluno = request.body;
    const alunocriado = this._alunoService.create(aluno);
    return response.json(alunocriado);
  };
}
