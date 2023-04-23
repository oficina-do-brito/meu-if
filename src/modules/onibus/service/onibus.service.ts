import { UpdateResult } from 'typeorm';
import { CreateOnibusDto } from '../models/dtos/create-onibus.dto';
import { UpdateOnibusDto } from '../models/dtos/update-onibus.dto';
import { IOnibus } from '../models/interfaces/onibus.interface';
import OnibusRepository from '../models/repository/onibus.repository';

export default class OnibusService {
  public async create(newOnibus: CreateOnibusDto): Promise<IOnibus> {
    return await OnibusRepository.save(newOnibus);
  }
  public async getAll(): Promise<IOnibus[]> {
    return await OnibusRepository.find();
  }
  public async getOne(id: number): Promise<IOnibus> {
    return await OnibusRepository.findOne({ where: { id } });
  }
  public async update(
    id: number,
    updateOnibus: UpdateOnibusDto,
  ): Promise<UpdateResult> {
    //TODO:verificar se existe? pra depois da o update
    const bus = await OnibusRepository.findOne({ where: { id } });
    return await OnibusRepository.update({ id }, updateOnibus);
  }
  public async remove(id: number) {
    const bus = await this.getOne(id);
    if (bus) {
      await OnibusRepository.remove(bus);
    }
  }
}
