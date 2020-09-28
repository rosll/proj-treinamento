/* eslint-disable camelcase */
import { Router } from 'express';
import { getRepository } from 'typeorm';
import LoginController from '../app/controllers/LoginController';
import Login from '../app/models/Login';

const loginRouter = Router();

loginRouter.post('/', async (request, response) => {
  try {
    const { matricula, senha } = request.body;
    const loginController = new LoginController();

    const logincr = await loginController.store({
      matricula,
      senha,
    });

    delete logincr.senha; // Possível erro

    return response.json(logincr);
  } catch (erro) {
    return response.status(400).json({ error: erro.message });
  }
});

loginRouter.get('/', async (request, response) => {
  const loginRepository = getRepository(Login);
  const logincr = await loginRepository.find();

  delete logincr[0].senha; // Possível erro
  return response.json(logincr);
});

loginRouter.get('/:id_login', async (request, response) => {
  const loginRepository = getRepository(Login);
  const { id_login } = request.params;
  const logincr = await loginRepository.findOne(id_login);

  return response.json(logincr);
});

loginRouter.delete('/:id_login', async (request, response) => {
  const loginRepository = getRepository(Login);
  const { id_login } = request.params;
  await loginRepository.delete(id_login);

  return response.send('Login Deletado!');
});

export default loginRouter;
