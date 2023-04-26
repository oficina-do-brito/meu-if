import { UpdateUsuarioDto } from '@modules/usuario/models/dtos/update-usuario.dto';

export default class UpdateAdministrador extends UpdateUsuarioDto {
  ativo?: boolean;
  constructor() {
    super();
    this.ativo = true;
  }
}

// nome: string;
// dataNascimento: Date;
// email: string;
// password: string;
// tipoUsuario: string; //enum
// endereco: string;
// numeroCelular: string;
