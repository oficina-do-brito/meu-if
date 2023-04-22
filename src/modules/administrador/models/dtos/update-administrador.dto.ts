import { UpdateUsuarioDto } from "@modules/usuario/models/dtos/update-usuario.dto";

export default class UpdateAdministrador extends UpdateUsuarioDto{
    ativo:boolean;
}