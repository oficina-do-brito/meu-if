import { UpdateUsuarioDto } from '@modules/usuario/models/dtos/update-usuario.dto';

export default class UpdateAlunoDto extends UpdateUsuarioDto {
  instituicao?: string;
  numeroCelularFamiliar?: string;
  constructor() {
    super();
  }
}
