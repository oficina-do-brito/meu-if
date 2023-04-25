import { UpdateResult } from 'typeorm';
import CreateAdministradorDto from '../models/dtos/create-administrador.dto';
import UpdateAdministrador from '../models/dtos/update-administrador.dto';
import { IAministrador } from '../models/interfaces/administrador.interface';
import AdministradorRepository from '../models/repository/administrador.repository';

export default class AdminService {
  public async findAll(): Promise<IAministrador[]> {
    return await AdministradorRepository.find();
  }
  public async findOne(id: number): Promise<IAministrador> {
    return await AdministradorRepository.findOne({ where: { id }});
  }
  public async create(admin: CreateAdministradorDto): Promise<IAministrador> {
    return await AdministradorRepository.save(admin);
  }
  public async update(
    id: number,
    admin: UpdateAdministrador,
  ): Promise<UpdateResult> {
    return await AdministradorRepository.update({ id }, admin);
  }

  public async remove(id: number) {
    const Admin = await AdministradorRepository.findOne({ where: { id }});
    if (Admin) {
      await AdministradorRepository.remove(Admin);
    }
  }

}