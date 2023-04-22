import Usuario from "@modules/usuario/models/entities/usuario.entity";
import { Column, Entity } from "typeorm";

@Entity()
export class Aluno extends Usuario{
    @Column()
    instituicao:string;
    
    @Column()
    numeroCelularFamiliar:string;
}