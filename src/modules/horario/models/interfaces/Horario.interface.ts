export interface IHorario {
  id: number;
  turno: string;
  horarioSaida: Date;
  horarioChegada: Date;
  idMotorista: number;
  idOnibus: number;
}
