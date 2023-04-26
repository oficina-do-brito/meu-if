import { UpdateResult } from 'typeorm';
import CreateAlunoDto from '../models/dtos/create-aluno.dto';
import UpdateAlunoDto from '../models/dtos/update-aluno.dto';
import { IAluno } from '../models/interfaces/aluno.interface';
import AlunoRepository from '../models/repository/aluno.repository';

export default class AlunoService {
  public async create(aluno: CreateAlunoDto): Promise<IAluno | undefined> {
    const { email } = aluno;
    const alunoEmail = await AlunoRepository.findOne({ where: { email } });
    if (alunoEmail) {
      return undefined;
    }
    return await AlunoRepository.save(aluno);
  }
  public async getAll(): Promise<Array<IAluno>> {
    return await AlunoRepository.find();
  }
  public async getOne(id: number): Promise<IAluno | undefined> {
    return await AlunoRepository.findOne({ where: { id } });
  }
  public async update(
    id: number,
    aluno: UpdateAlunoDto,
  ): Promise<UpdateResult | IAluno> {
    const alunoId = this.getOne(id);
    if (alunoId) {
      await AlunoRepository.update({ id }, aluno);
      const aln = {
        id: id,
        ...aluno,
      } as IAluno;
      return aln;
    }
    return await AlunoRepository.update({ id }, aluno);
  }
  public async remove(id: number): Promise<boolean> {
    const alunoexist = await this.getOne(id);
    if (alunoexist) {
      await AlunoRepository.remove(alunoexist);
      return true;
    }
    return false;
  }
}
