import { CreateUsuarioDto } from "@modules/usuario/models/dtos/create-usuario.dto";

export default class CreateMotoristaDto extends CreateUsuarioDto{
    ativo:boolean;
}