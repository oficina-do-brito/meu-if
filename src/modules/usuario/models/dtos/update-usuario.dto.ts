export class UpdateUsuarioDto {
  nome?: string;
  dataNascimento?: Date;
  password?: string;
  tipoUsuario?: string; //enum
  endereco?: string;
  numeroCelular?: string;
}
