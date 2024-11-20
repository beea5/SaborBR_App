import { FastifyRequest, FastifyReply } from 'fastify'
import {ListCustomersServices} from '../services/ListCustomersServices'

class ListCustomersController{
 async handle(request: FastifyRequest, reply: FastifyReply ){
    const listCustomerServices = new ListCustomersServices();

    const customers = await listCustomerServices.execute();
    reply.send(customers);
 }
}

export { ListCustomersController }