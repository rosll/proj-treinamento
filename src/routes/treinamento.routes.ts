/* eslint-disable camelcase */
import { Router } from 'express';
import { getRepository } from 'typeorm';
import TreinamentoController from '../app/controllers/TreinamentoController';
import Treinamento from '../app/models/Treinamento';

const treinamentoRouter = Router();

treinamentoRouter.post('/', async (request, response) => {
  try {
    const {
      func_id,
      curs_id,
      data_tr,
      vencimento_tr,
    } = request.body;

    const treinamentoController = new TreinamentoController();
    const treinamento = await treinamentoController.store({
      func_id,
      curs_id,
      data_tr,
      vencimento_tr,
    });
    return response.json(treinamento);
  } catch (erro) {
    return response.status(400).json({ error: erro.message });
  }
});

treinamentoRouter.get('/', async (request, reponse) => {
  const treinamentoRepository = getRepository(Treinamento);
  const treinamentocr = await treinamentoRepository.find();
  return reponse.json(treinamentocr);
});

treinamentoRouter.get('/:id_trein', async (request, response) => {
  const treinamentoRepository = getRepository(Treinamento);
  const { id_trein } = request.params;
  const treinamentocr = await treinamentoRepository.findOne(id_trein);
  return response.json(treinamentocr);
});

treinamentoRouter.delete('/:id_trein', async (request, response) => {
  const treinamentoRepository = getRepository(Treinamento);
  const { id_trein } = request.params;
  await treinamentoRepository.delete(id_trein);
  return response.send('');
});

export default treinamentoRouter;
