import { getRepository } from 'typeorm';

import Funcionarios from '../models/Funcionarios';

interface Request {
  nome: string
  email: string
  foto: string
}

class FuncionariosController {
  public async store({ nome, email, foto }: Request): Promise<Funcionarios> {
    const funcionariosRepository = getRepository(Funcionarios);

    const verify = await funcionariosRepository.findOne({
      where: { email },
    });

    if (verify) {
      throw new Error('Este email já foi cadastrado por outra pessoa!');
    }

    const funcr = funcionariosRepository.create({
      nome,
      email,
      foto,
    });

    await funcionariosRepository.save(funcr);

    return funcr;
  }
}

export default FuncionariosController;
