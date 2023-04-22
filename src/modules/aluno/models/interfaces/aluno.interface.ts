import { IUsuario } from "@modules/usuario/models/interfaces/usuario.interface";

export interface IAluno extends IUsuario{
    instituicao:string;
    numeroCelularFamiliar:string;
}