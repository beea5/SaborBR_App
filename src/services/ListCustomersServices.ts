import prismaClient from "../prisma";

class ListCustomersServices{
 async execute(){

    const customers = await prismaClient.customer.findMany()

    return customers;
 }
}

export { ListCustomersServices }