export interface IUsuario {
  id: number;
  nome: string;
  dataNascimento: Date;
  email: string;
  password: string;
  tipoUsuario: string; //enum
  endereco: string;
  numeroCelular: string;
}
