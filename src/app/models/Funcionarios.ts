/* eslint-disable camelcase */
import {
  Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn,
} from 'typeorm';

@Entity('funcionarios')
class Funcionarios {
  @PrimaryGeneratedColumn('uuid')
  funcionario_id: string;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  foto: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Funcionarios;
