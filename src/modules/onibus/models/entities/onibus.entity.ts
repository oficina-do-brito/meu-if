import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export default class Onibus {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  ativo: boolean;

  @Column()
  capacidade: number;

  @Column()
  idMotorista: number;

  @Column()
  notificacao: string;
}
