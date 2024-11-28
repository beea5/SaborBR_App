import { FastifyRequest, FastifyReply } from 'fastify';
import { LoginService } from '../services/LoginService';

class LoginController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { email, senha } = request.body as { email: string, senha: string };

    const loginService = new LoginService();
    try {
      const { token } = await loginService.execute({ email, senha });
      reply.send({ token });
    } catch (error) {
      // Verifica se o erro é uma instância de Error
      if (error instanceof Error) {
        // Se o erro for uma instância de Error, podemos acessar .message com segurança
        reply.code(400).send({ message: error.message });
      } else {
        // Se o erro não for uma instância de Error, envia uma mensagem genérica
        reply.code(500).send({ message: 'Ocorreu um erro inesperado. Por favor, tente novamente.' });
      }
    }
  }
}

export { LoginController };
