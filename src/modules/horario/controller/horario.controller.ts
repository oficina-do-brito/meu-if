import { Request, Response } from 'express';
import { HorarioService } from '../service/horario.service';

export default class HorarioContoller {
  private _servicoHorario: HorarioService;
  constructor() {
    this._servicoHorario = new HorarioService();
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.remove = this.remove.bind(this);
    this.index = this.index.bind(this);
    this.getOne = this.getOne.bind(this);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const resp = this._servicoHorario.findHorario();
    return response.json(resp);
  }
  public async create(request: Request, response: Response): Promise<Response> {
    const reqhorario = request.body;
    const newHorarioCriado = await this._servicoHorario.create(reqhorario);
    return response.json(newHorarioCriado);
  }
  public async update(request: Request, response: Response): Promise<Response> {
    const idHorario = parseInt(request.params.id);
    const horario = request.body;
    const newHorarioCriado = await this._servicoHorario.update(
      idHorario,
      horario,
    );
    return response.json(newHorarioCriado);
  }
  public async getAll(request: Request, response: Response): Promise<Response> {
    const horarios = this._servicoHorario.getAll();
    return response.json(horarios);
  }
  public async getOne(request: Request, response: Response): Promise<Response> {
    const idHorario = parseInt(request.params.id);
    const horario = this._servicoHorario.getOne(idHorario);
    return response.json(horario);
  }
  public async remove(request: Request, response: Response): Promise<Response> {
    const idHorario = parseInt(request.params.id);
    this._servicoHorario.remove(idHorario);
    return response.json({ message: 'deleted' });
  }
}
