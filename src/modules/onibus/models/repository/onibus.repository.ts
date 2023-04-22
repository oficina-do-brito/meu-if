import { AppDataSource } from 'src/database/data-source';
import Onibus from '../entities/onibus.entity';

const OnibusRepository = AppDataSource.getRepository(Onibus);
export default OnibusRepository;
