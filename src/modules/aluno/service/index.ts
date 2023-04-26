import CreateAlunoDto from '../models/dtos/create-aluno.dto';
import { IAluno } from '../models/interfaces/aluno.interface';
import AlunoRepository from '../models/repository/aluno.repository';

export default class AlunoService {
  public async create(aluno: CreateAlunoDto): Promise<IAluno> {
    return await AlunoRepository.save(aluno);
  }
}
