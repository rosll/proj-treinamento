import {
  MigrationInterface, QueryRunner, Table, TableForeignKey,
} from 'typeorm';

export default class Treinamento1601256957828 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'treinamento',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'func_id',
            type: 'uuid',
          },
          {
            name: 'curs_id',
            type: 'uuid',
          },
          {
            name: 'data_tr',
            type: 'timestamp with time zone',
          },
          {
            name: 'vencimento_tr',
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'treinamento',
      new TableForeignKey({
        columnNames: ['func_id'],
        referencedColumnNames: ['funcionario_id'],
        referencedTableName: 'funcionarios',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'treinamento',
      new TableForeignKey({
        columnNames: ['curs_id'],
        referencedColumnNames: ['curso_id'],
        referencedTableName: 'cursos',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('treinamento');
  }
}
