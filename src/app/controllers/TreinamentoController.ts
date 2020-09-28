/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import { getRepository } from 'typeorm';
import { startOfHour, parseISO } from 'date-fns';
import Treinamento from '../models/Treinamento';

interface Request {
  func_id: string;
  curs_id: string;
  data_tr: string;
  vencimento_tr: string;
}

class TreinamentoController {
  public async store({
    func_id,
    curs_id,
    data_tr,
    vencimento_tr,
  }: Request): Promise<Treinamento> {
    const dataT = startOfHour(parseISO(data_tr));
    const treinamentoRepository = getRepository(Treinamento);
    const treinamento = treinamentoRepository.create({
      func_id,
      curs_id,
      data_tr: dataT,
      vencimento_tr: data_tr,
    });
    await treinamentoRepository.save(treinamento);
    return treinamento;
  }
}

export default TreinamentoController;
