import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableUsuario1682017574938 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'usuarios',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            generationStrategy: 'increment',
          },
          {
            name: 'nome',
            type: 'varchar',
          },
          {
            name: 'dataNascimento',
            type: 'timestamp',
          },
          {
            name: 'email',
            type: 'varchar',
          },
          {
            name: 'password',
            type: 'varchar',
          },
          {
            name: 'tipoUsuario',
            type: 'varchar',
          },
          {
            name: 'endereco',
            type: 'varchar',
          },
          {
            name: 'numeroCelular',
            type: 'varchar',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable('usuarios');
  }
}
