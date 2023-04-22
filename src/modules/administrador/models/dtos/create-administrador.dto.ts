import { CreateUsuarioDto } from "@modules/usuario/models/dtos/create-usuario.dto";

export default class CreateAdministradorDto extends CreateUsuarioDto{
    ativo:boolean;
}