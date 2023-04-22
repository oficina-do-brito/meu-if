import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Documento{
    @PrimaryGeneratedColumn("increment")
    id:number;

    @Column()
    idAluno:number;

    @Column()
    formato:string;

}