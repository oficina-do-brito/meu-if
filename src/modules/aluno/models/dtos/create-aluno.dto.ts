import { CreateUsuarioDto } from "@modules/usuario/models/dtos/create-usuario.dto";

export default class CreateAlunoDto extends CreateUsuarioDto{
    instituicao:string;
    numeroCelularFamiliar:string;
}