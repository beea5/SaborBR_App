import fastify, { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { request } from "http";
import { CreateCustomerController } from './controllers/CreateCustomerController'
import { ListCustomersController } from './controllers/ListCustomersController'
import { DeleteCustomerController } from './controllers/DeleteCustomerController'
import { LoginController } from './controllers/LoginController'; 

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
  // Define a rota GET /teste
  fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
    // Envia a resposta como um objeto JSON
    return { ok: true };
  });

  fastify.post("/customer", async ( request: FastifyRequest, reply: FastifyReply) =>{
   return new CreateCustomerController().handle(request, reply)
  })

  fastify.get("/customers", async ( request: FastifyRequest, reply: FastifyReply) =>{
    return new ListCustomersController().handle(request, reply)
   })

   fastify.delete("/customer", async ( request: FastifyRequest, reply: FastifyReply) =>{
    return new DeleteCustomerController().handle(request, reply)
   })

   fastify.post("/login", async (request: FastifyRequest, reply: FastifyReply) => {
    return new LoginController().handle(request, reply);
  });

}
