import { Router } from 'express';
import cursosRouter from './cursos.routes';
import funcionariosRouter from './funcionarios.routes';
import treinamentoRouter from './treinamento.routes';

const routes = Router();

routes.use('/cursos', cursosRouter);
routes.use('/funcionarios', funcionariosRouter);
routes.use('/treinamento', treinamentoRouter);

export default routes;
