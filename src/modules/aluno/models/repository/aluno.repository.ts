import { AppDataSource } from "src/database/data-source";
import { Aluno } from "../entities/aluno.entity";

const AlunoRepository = AppDataSource.getRepository(Aluno);

export default AlunoRepository;