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
    return await AdministradorRepository.findOne({ where: { id } });
  }
  /**
   * @description chama o @method  findAdminByEmail e
   * Se ja existir um usuario com o email cadastrado no sistema: retorna undefined --> não podendo cadastrar,
   * Se não existir ainda  cria o administrador
   */
  public async create(
    admin: CreateAdministradorDto,
  ): Promise<IAministrador | undefined> {
    const { email } = admin;
    const buscaPorEmail = await this.findAdminByEmail(email);
    if (buscaPorEmail) {
      return undefined;
    }
    return await AdministradorRepository.save(admin);
  }
  public async update(
    id: number,
    admin: UpdateAdministrador,
  ): Promise<UpdateResult> {
    return await AdministradorRepository.update({ id }, admin);
  }

  public async remove(id: number) {
    const Admin = await AdministradorRepository.findOne({ where: { id } });
    if (Admin) {
      await AdministradorRepository.remove(Admin);
    }
  }
  public async findAdminByEmail(
    email: string,
  ): Promise<IAministrador | undefined> {
    return await AdministradorRepository.findOne({ where: { email } });
  }
}
