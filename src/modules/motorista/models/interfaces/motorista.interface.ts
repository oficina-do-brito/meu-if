import { IUsuario } from "@modules/usuario/models/interfaces/usuario.interface";

export interface IMotorista extends IUsuario{
    ativo:boolean;
}