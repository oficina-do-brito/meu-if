import { Request, Response } from 'express';
import { UsuarioService } from '../service/usuario.service';

export default class UsuarioController {
  private usuarioService = new UsuarioService();

  public allUsers(request: Request, response: Response) {
    // usamos a instanciamos um serviço
    const respon = this.usuarioService.getAllUsers();
    return response.json(respon);
  }
}
