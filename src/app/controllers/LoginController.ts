import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import Login from '../models/Login';

interface Request {
  matricula: number;
  senha: string;
}

class LoginController {
  public async store({ matricula, senha }: Request): Promise<Login> {
    const loginRepository = getRepository(Login);
    const verify = await loginRepository.findOne({
      where: { matricula },
    });

    if (verify) {
      throw new Error('Esta matrícula já foi cadastrada');
    }

    const hashedSenha = await hash(senha, 8);

    const logincr = loginRepository.create({
      matricula,
      senha: hashedSenha,
    });

    await loginRepository.save(logincr);

    return logincr;
  }
}

export default LoginController;
