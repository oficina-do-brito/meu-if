import { Repository } from 'typeorm';
import Horario from '../entities/horario.entity';

// usar repository. extend

export class HorarioRepository extends Repository<Horario> {
  //definimos nossos metodos
  public async findByTurno(turno: string): Promise<Horario | undefined> {
    return this.findOne({ where: { turno } });
  }
}
