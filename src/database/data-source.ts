import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { CreateTableUsuario1682017574938 } from './migrations/1682017574938-CreateTableUsuario';
import { CreateTableHorario1682017595402 } from './migrations/1682017595402-CreateTableHorario';
import { CreateTableAdministrador1682017612328 } from './migrations/1682017612328-CreateTableAdministrador';
import { CreateTableMotorista1682017634686 } from './migrations/1682017634686-CreateTableMotorista';
import { CreateTableDocumento1682017644691 } from './migrations/1682017644691-CreateTableDocumento';
import { CreateTableOnibus1682017660026 } from './migrations/1682017660026-CreateTableOnibus';
import { CreateTableAluno1682017727318 } from './migrations/1682017727318-CreateTableAluno';

import Horario from '@modules/horario/models/entities/horario.entity';
import Usuario from '@modules/usuario/models/entities/usuario.entity';
import Onibus from '@modules/onibus/models/entities/onibus.entity';
import { Aluno } from '@modules/aluno/models/entities/aluno.entity';
import Documento from '@modules/documento/models/entities/documento.entity';
import Administrador from '@modules/administrador/models/entities/administrador.entity';
import Motorista from '@modules/motorista/models/entities/motorista.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'db',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  synchronize: true,
  logging: false,
  entities: [
    Horario,
    Usuario,
    Onibus,
    Aluno,
    Documento,
    Administrador,
    Motorista,
  ],
  migrations: [
    CreateTableUsuario1682017574938,
    CreateTableHorario1682017595402,
    CreateTableAdministrador1682017612328,
    CreateTableMotorista1682017634686,
    CreateTableDocumento1682017644691,
    CreateTableOnibus1682017660026,
    CreateTableAluno1682017727318,
  ],
  subscribers: [],
});
