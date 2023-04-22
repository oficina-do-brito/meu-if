import { UpdateUsuarioDto } from "@modules/usuario/models/dtos/update-usuario.dto";

export default class UpdateMotoristaDto extends UpdateUsuarioDto{
    ativo:boolean;
}