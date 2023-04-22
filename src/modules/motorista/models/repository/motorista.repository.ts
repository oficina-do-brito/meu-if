import { AppDataSource } from "src/database/data-source";
import Motorista from "../entities/motorista.entity";

const  MotoristaRepository = AppDataSource.getRepository(Motorista);
export default  MotoristaRepository;