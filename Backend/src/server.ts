import Fastify from 'fastify';
import cors from '@fastify/cors';
import { routes } from './routes';

const app = Fastify({ logger: true });

// Registra o CORS para permitir requisições de qualquer origem (para desenvolvimento)
app.register(cors, {
  origin: "*", // Permite todas as origens, pode ser configurado para um domínio específico
  methods: ["GET", "POST", "PUT", "DELETE"], // Defina os métodos permitidos conforme sua necessidade
});

// Registrar as rotas
app.register(routes);

// Configuração de erro
app.setErrorHandler((error, request, reply) => {
  reply.code(400).send({ message: error.message });
});

// Inicia o servidor
const start = async () => {
  try {
    await app.listen({ host: '0.0.0.0', port: 3333 });  // Escutando em todos os IPs locais
    console.log('Servidor rodando em http://localhost:3333');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();
