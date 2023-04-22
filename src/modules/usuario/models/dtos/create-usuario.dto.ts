export class CreateUsuarioDto {
  nome: string;
  dataNascimento: Date;
  email: string;
  password: string;
  tipoUsuario: string; //enum
  endereco: string;
  numeroCelular: string;
}
