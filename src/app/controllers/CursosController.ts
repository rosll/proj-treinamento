/* eslint-disable camelcase */
import { getRepository } from 'typeorm';

import Cursos from '../models/Cursos';

interface Request {
  nome_curso: string;
  carga_horaria: number;
}

class CursosController {
  public async store({ nome_curso, carga_horaria }: Request): Promise<Cursos> {
    const cursosRepository = getRepository(Cursos);

    const cursocr = cursosRepository.create({
      nome_curso,
      carga_horaria,
    });

    await cursosRepository.save(cursocr);

    return cursocr;
  }
}

export default CursosController;
