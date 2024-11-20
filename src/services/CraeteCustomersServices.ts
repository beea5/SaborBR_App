import prismaClient from "../prisma";

class CraeteCustomersServices{
    async execute(){

        console.log("ROTA FOI CHAMADA")
        
        return { ok: true}
    }
}

export { CraeteCustomersServices }