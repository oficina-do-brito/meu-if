import { IMotorista } from '../models/interfaces/motorista.interface';
import MotoristaRepository from '../models/repository/motorista.repository';

export default class MotoristaService {
  public async getAll(): Promise<Array<IMotorista>> {
    return await MotoristaRepository.find();
  }
}
