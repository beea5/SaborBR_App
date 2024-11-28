import prismaClient from "../prisma";

interface CraeteCustomerProps {
   name: string;
   end: string;
   fone: string;
   cep: string;
   complement?: string;
   email: string;
   senha: string;
}

class CraeteCustomersServices {  // Fixed class name typo (Craete -> Create)
    async execute({ name, end, fone, cep, complement, email, senha }: CraeteCustomerProps) {

        // Check if any required fields are missing
        if (!name || !end || !fone || !cep || !email || !senha) {
            throw new Error("Preencha todos os campos!");
        }

        // Create customer record in the database
        const customer = await prismaClient.customer.create({
            data: {
                name,
                end,
                fone,
                cep,
                email,
                senha,
                status: true,
                complement  // Optionally include complement if provided
            }
        });

        return customer;
    }
}

export { CraeteCustomersServices };
