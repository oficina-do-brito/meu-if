import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Horario {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  turno: string;

  @Column()
  horarioSaida: Date;

  @Column()
  horarioChegada: Date;

  @Column()
  idMotorista: number;

  @Column()
  idOnibus: number;
}
export default Horario;
