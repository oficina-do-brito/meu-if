import { IHorario } from '../models/interfaces/Horario.interface';
import HorarioRepository from '../models/repository/horario.repository';

export class HorarioService {
  public async findHorario(): Promise<IHorario[] | string> {
    const horario = await HorarioRepository.find();
    if (horario != null) {
      return horario;
    }
    return 'não foi possivel encontrar';
  }
}
