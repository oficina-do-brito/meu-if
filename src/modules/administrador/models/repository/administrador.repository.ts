import { AppDataSource } from "src/database/data-source";
import Administrador from "../entities/administrador.entity";

const  AdministradorRepository = AppDataSource.getRepository(Administrador);
export default AdministradorRepository;