import { Request, Response } from 'express';
import OnibusService from '../service';
import { UpdateOnibusDto } from '../models/dtos/update-onibus.dto';

export default class OnibusController {
  private _onibusService: OnibusService;

  constructor() {
    this._onibusService = new OnibusService();
    //fazendo bind do this
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.deleteOne = this.deleteOne.bind(this);
    this.findAll = this.findAll.bind(this);
    this.findOne = this.findOne.bind(this);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const reqBody = request.body; // CreateHorarioDto tem que ser
    const newOnibus = await this._onibusService.create(reqBody);
    return response.json(newOnibus);
  }

  public async findAll(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const allBus = await this._onibusService.getAll();
    return response.json(allBus);
  }

  public async findOne(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const reqId = parseInt(request.params.id);
    const newOnibus = await this._onibusService.getOne(reqId);
    return response.json(newOnibus);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const id = parseInt(request.params.id);
    const reqUpdate = this._onibusService.getOne(id);
    if (reqUpdate) {
      await this._onibusService.update(id, reqUpdate as UpdateOnibusDto);
    }
    return response.json({ message: 'atualizado' });
  }

  public async deleteOne(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const id = parseInt(request.params.id);
    this._onibusService.remove(id);
    return response.json({ message: 'deletado meu chapa' });
  }
}
