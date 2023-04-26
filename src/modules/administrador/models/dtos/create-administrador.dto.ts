import { CreateUsuarioDto } from '@modules/usuario/models/dtos/create-usuario.dto';

export default class CreateAdministradorDto extends CreateUsuarioDto {
  ativo: boolean;
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
