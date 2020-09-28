/* eslint-disable camelcase */
import {
  Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn,
} from 'typeorm';

@Entity('login')
class Login {
  @PrimaryGeneratedColumn('uuid')
  matricula_id: string;

  @Column()
  matricula: number;

  @Column()
  senha: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Login;
