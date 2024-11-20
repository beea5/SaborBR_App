import { FastifyRequest, FastifyReply } from 'fastify'
import { CraeteCustomersServices } from '../services/CraeteCustomersServices'

class CreateCustomerController{
    async handle(request: FastifyRequest, reply: FastifyReply ){

        const customerService = new CraeteCustomersServices()

        const customer = await customerService.execute();
        
    }
}

export { CreateCustomerController}