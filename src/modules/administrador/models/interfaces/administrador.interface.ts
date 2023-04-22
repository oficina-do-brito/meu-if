import { IUsuario } from "@modules/usuario/models/interfaces/usuario.interface";

export interface IAministrador extends IUsuario{
    ativo:boolean;
}