import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Usuario {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  nome: string;

  @Column()
  dataNascimento: Date;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  tipoUsuario: string; //enum

  @Column()
  endereco: string;

  @Column()
  numeroCelular: string;
}
