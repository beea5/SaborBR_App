import { FastifyRequest, FastifyReply } from 'fastify'
//import { CraeteCustomersServices } from '../services/CraeteCustomersServices'
import { CraeteCustomersServices } from '../services/CraeteCustomersServices'
class CreateCustomerController{
    async handle(request: FastifyRequest, reply: FastifyReply ){
        const { name, end, fone, cep, complement, email, senha} = request.body as { name: string, end: string, fone: string, cep: string, complement?: string, email: string, senha: string}
   
         const customerService = new CraeteCustomersServices()

        const customer = await customerService.execute({name, end, fone, cep, complement, email, senha});
        
        reply.send(customer)
    }
}

export { CreateCustomerController}