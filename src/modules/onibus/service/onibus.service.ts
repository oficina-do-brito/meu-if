import { UpdateResult } from 'typeorm';
import { CreateOnibusDto } from '../models/dtos/create-onibus.dto';
import { UpdateOnibusDto } from '../models/dtos/update-onibus.dto';
import { IOnibus } from '../models/interfaces/onibus.interface';
import OnibusRepository from '../models/repository/onibus.repository';

export default class OnibusService {
  public async create(newOnibus: CreateOnibusDto): Promise<IOnibus> {
    return await OnibusRepository.save(newOnibus);
  }
  public async getAll(): Promise<IOnibus[] | undefined> {
    const buss = await OnibusRepository.find();
    if (buss != null) {
      return buss;
    }
    return undefined;
  }
  public async getOne(id: number): Promise<IOnibus | undefined> {
    const bus = await OnibusRepository.findOne({ where: { id } });
    if (bus != null) {
      return bus;
    }
    return undefined;
  }

  public async update(
    id: number,
    updateOnibus: UpdateOnibusDto,
  ): Promise<UpdateResult | undefined> {
    const bus = await OnibusRepository.findOne({ where: { id } });
    if (bus != null) {
      const novo = await OnibusRepository.update({ id }, updateOnibus);
      return novo;
    }
    return undefined;
  }
  // remove

  public async remove(id: number) {
    const bus = await this.getOne(id);
    if (bus) {
      await OnibusRepository.remove(bus);
    }
  }
}
