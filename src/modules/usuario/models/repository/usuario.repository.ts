import { AppDataSource } from 'src/database/data-source';
import Usuario from '../entities/usuario.entity';

const UsuarioRepository = AppDataSource.getTreeRepository(Usuario);

export default UsuarioRepository;
