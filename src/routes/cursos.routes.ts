/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import { Router } from 'express';
import { getRepository } from 'typeorm';
import CursosController from '../app/controllers/CursosController';
import Cursos from '../app/models/Cursos';

const cursosRouter = Router();

cursosRouter.post('/', async (request, response) => {
  try {
    const { nome_curso, carga_horaria } = request.body;

    const cursosController = new CursosController();

    const cursocr = await cursosController.store({
      nome_curso,
      carga_horaria,
    });

    return response.json(cursocr);
  } catch (erro) {
    return response.status(400).json({ error: erro.message });
  }
});

cursosRouter.get('/', async (request, response) => {
  const cursosRepository = getRepository(Cursos);
  const cursocr = await cursosRepository.find();

  return response.json(cursocr);
});

cursosRouter.get('/:id_curso', async (request, response) => {
  const cursosRepository = getRepository(Cursos);
  const { curso_id } = request.params;
  const cursocr = await cursosRepository.findOne();

  return response.json(cursocr);
});

cursosRouter.put('/:id_curso', async (request, response) => {
  const cursosRepository = getRepository(Cursos);

  const { id_curso } = request.params;
  const { nome_curso, carga_horaria } = request.body;

  await cursosRepository.findOne(id_curso);

  return response.json({ nome_curso, carga_horaria });
});

cursosRouter.delete('/:id_curso', async (request, response) => {
  const cursosRepository = getRepository(Cursos);
  const { id_curso } = request.params;
  await cursosRepository.delete(id_curso);

  return response.send('Curso Deletado!');
});

export default cursosRouter;
