import Usuario from "@modules/usuario/models/entities/usuario.entity";
import { Column, Entity } from "typeorm";

@Entity()
export default class Administrador extends Usuario{
    @Column()
    ativo:boolean;

}