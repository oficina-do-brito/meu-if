import { AppDataSource } from 'src/database/data-source';
import Horario from '../entities/horario.entity';

const HorarioRepository = AppDataSource.getRepository(Horario);
export default HorarioRepository;
