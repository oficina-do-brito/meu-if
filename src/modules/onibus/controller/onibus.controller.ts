import { Request, Response } from 'express';
import OnibusService from '../service/onibus.service';
import { UpdateOnibusDto } from '../models/dtos/update-onibus.dto';

export default class OnibusController {
  private onibusService = new OnibusService();

  public async create(request: Request, response: Response) {
    const reqBody = request.body(); // CreateHorarioDto tem que ser
    const newOnibus = await this.onibusService.create(reqBody);
    return response.json(newOnibus);
  }

  public async findAll(request: Request, response: Response) {
    const newOnibus = await this.onibusService.getAll();
    return response.json(newOnibus);
  }

  public async findOne(request: Request, response: Response) {
    const reqId = parseInt(request.params.id);
    const newOnibus = await this.onibusService.getOne(reqId);
    return response.json(newOnibus);
  }

  public async update(request: Request) {
    const id = parseInt(request.params.id);
    const reqUpdate = this.onibusService.getOne(id);
    if (reqUpdate) {
      await this.onibusService.update(id, reqUpdate as UpdateOnibusDto);
    }
  }

  public async deleteOne(request: Request) {
    const id = parseInt(request.params.id);
    await this.onibusService.remove(id);
  }
}
