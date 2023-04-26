import { IUsuario } from '../models/interfaces/usuario.interface';
import UsuarioRepository from '../models/repository/usuario.repository';

export class UsuarioService {
  public async getAllUsers(): Promise<IUsuario[] | undefined> {
    const users = UsuarioRepository.find();
    return users;
  }
}
