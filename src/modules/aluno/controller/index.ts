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
    if (alunocriado) {
      return response.json(alunocriado).status(201);
    }
    return response
      .json({
        message:
          'Aluno ja consta no sistema, por favor dedefina suas credenciais para ter acesso',
      })
      .status(400);
  };
  findAll = async (request: Request, response: Response): Promise<Response> => {
    const listAlunos = await this._alunoService.getAll();
    return response.json(listAlunos).status(200);
  };
  findOne = async (request: Request, response: Response): Promise<Response> => {
    const idBuscado = parseInt(request.params.id);
    const aluno = await this._alunoService.getOne(idBuscado);
    return response.json(aluno).status(200);
  };
  update = async (request: Request, response: Response): Promise<Response> => {
    const idBuscado = parseInt(request.params.id);
    const UpAluno = request.body;
    const aluno = await this._alunoService.update(idBuscado, UpAluno);
    if (aluno) {
      return response.json(aluno).status(200);
    }
    return response
      .json({ message: 'esse aluno não existe, impossivel atualizar' })
      .status(400);
  };
  delete = async (request: Request, response: Response): Promise<Response> => {
    const idBuscado = parseInt(request.params.id);
    const removido = await this._alunoService.remove(idBuscado);
    if (removido) {
      return response.json({ message: 'removido com sucesso' }).status(204);
    }
    return response
      .json({ message: 'não existe aluno como esse no banco' })
      .status(400);
  };
}
