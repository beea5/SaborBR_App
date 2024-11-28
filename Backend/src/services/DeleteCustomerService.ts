import prismaClient from "../prisma";

interface DeleteCustomerProps{
    email: string;
}
class DeleteCustomerService{
 async execute({ email }: DeleteCustomerProps){
  

    if (!email){
        throw new Error("Solicitação invalida!")
    }
   
    const findCustomer = await prismaClient.customer.findFirst({
        where:{
            email:email
        }
    })

    if(!findCustomer){
        throw new Error("Cliente nao existe!")
    }

    await prismaClient.customer.delete({
        where:{
            email: findCustomer.email
        }
    })

    return { message: "Deletado comm sucesso!"}

 }
}

export { DeleteCustomerService }