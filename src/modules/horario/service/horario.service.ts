import { UpdateResult } from 'typeorm';
import { CreateHorarioDto } from '../models/dtos/create-horario.dto';
import { UpdateHorarioDto } from '../models/dtos/update-horario.dto';
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
  public async create(horario: CreateHorarioDto): Promise<IHorario> {
    return await HorarioRepository.save(horario);
  }
  public async getAll(): Promise<IHorario[]> {
    return await HorarioRepository.find();
  }
  public async getOne(id: number): Promise<IHorario> {
    return await HorarioRepository.findOne({ where: { id } });
  }
  public async update(
    id: number,
    horario: UpdateHorarioDto,
  ): Promise<UpdateResult | null> {
    const horarioConferido = await HorarioRepository.findOne({ where: { id } });
    if (horarioConferido) {
      return await HorarioRepository.update({ id }, horario);
    }
    return null;
  }
  public async remove(id: number) {
    const horarioexiste = await HorarioRepository.findOne({ where: { id } });
    if (horarioexiste) {
      await HorarioRepository.remove(horarioexiste);
    }
  }
}
