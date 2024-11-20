import fastify, { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
  // Define a rota GET /teste
  fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
    // Envia a resposta como um objeto JSON
    return { ok: true };
  });
}
