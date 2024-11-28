import { FastifyRequest, FastifyReply } from 'fastify'
import { DeleteCustomerService } from '../services/DeleteCustomerService'
class DeleteCustomerController{
    async handle(request: FastifyRequest, reply: FastifyReply ){
        const { email } = request.query as { email: string }
        
        const customerServices = new DeleteCustomerService();

        const customer = await customerServices.execute({ email })

        reply.send(customer);
     }
    

}

export { DeleteCustomerController }