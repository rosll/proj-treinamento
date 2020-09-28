/* eslint-disable camelcase */
import {
 Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToMany,
} from 'typeorm';

import Cursos from './Cursos';
import Funcionarios from './Funcionarios';

@Entity('treinamento')
class Treinamento {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToMany(() => Cursos)
  @JoinColumn({ name: 'curs_id' })
  cursid: Cursos;

  @ManyToMany(() => Funcionarios)
  @JoinColumn({ name: 'func_id' })
  funcid: Funcionarios;

  @Column()
  func_id: string;

  @Column()
  curs_id: string;

  @Column('time with time zone')
  data_tr: Date;

  @Column()
  vencimento_tr: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Treinamento;
