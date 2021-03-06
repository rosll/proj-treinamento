/* eslint-disable camelcase */
import {
  Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn,
} from 'typeorm';

@Entity('cursos')
class Cursos {
  @PrimaryGeneratedColumn('uuid')
  curso_id: string;

  @Column()
  nome_curso: string;

  @Column()
  carga_horaria: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Cursos;
