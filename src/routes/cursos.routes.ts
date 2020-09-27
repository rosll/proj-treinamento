import { Router } from 'express';

const cursosRouter = Router();

cursosRouter.post('/', (request, response) => {
  try {
    return response.json({ msgg: 'teste' });
  } catch (erro) {
    return response.status(400).json({ error: erro.message });
  }
});

export default cursosRouter;
