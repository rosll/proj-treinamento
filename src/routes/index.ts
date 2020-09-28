import { Router } from 'express';
import cursosRouter from './cursos.routes';
import funcionariosRouter from './funcionarios.routes';

const routes = Router();

routes.use('/cursos', cursosRouter);
routes.use('/funcionarios', funcionariosRouter);

export default routes;
