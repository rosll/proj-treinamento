/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import { Router } from 'express';
import { getRepository } from 'typeorm';
import FuncionariosController from '../app/controllers/FuncionariosController';
import Funcionarios from '../app/models/Funcionarios';

const funcionariosRouter = Router();

funcionariosRouter.post('/', async (request, response) => {
  try {
    const { nome, email, foto } = request.body;

    const funcionariosController = new FuncionariosController();

    const funcr = await funcionariosController.store({
      nome,
      email,
      foto,
    });

    return response.json(funcr);
  } catch (erro) {
    return response.status(400).json({ error: erro.message });
  }
});

funcionariosRouter.get('/', async (request, response) => {
  const funcionariosRepository = getRepository(Funcionarios);
  const funcr = await funcionariosRepository.find();

  return response.json(funcr);
});

funcionariosRouter.get('/:id_funcionario', async (request, response) => {
  const funcionariosRepository = getRepository(Funcionarios);
  const { id_funcionario } = request.params;
  const cursocr = await funcionariosRepository.findOne();

  return response.json(cursocr);
});

funcionariosRouter.delete('/:id_funcionario', async (request, response) => {
  const funcionariosRepository = getRepository(Funcionarios);
  const { id_funcionario } = request.params;
  await funcionariosRepository.delete(id_funcionario);

  return response.send();
});

export default funcionariosRouter;
