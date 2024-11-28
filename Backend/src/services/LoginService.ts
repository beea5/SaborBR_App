import prismaClient from "../prisma";
import { compare } from "bcryptjs";  // Para comparar senhas criptografadas
import { sign } from "jsonwebtoken"; // Para gerar o token JWT

interface LoginProps {
  email: string;
  senha: string;
}

class LoginService {
  async execute({ email, senha }: LoginProps) {
    // Verificar se o email existe no banco de dados
    const user = await prismaClient.customer.findUnique({
      where: { email },
    });

    if (!user) {
      throw new Error("Usuário não encontrado!");
    }

    // Verificar se a senha está correta
    const passwordMatch = await compare(senha, user.senha);
    if (!passwordMatch) {
      throw new Error("Senha incorreta!");
    }

    // Gerar o token JWT (a chave secreta deve ser configurada no ambiente)
    const token = sign(
      { userId: user.id }, // Payload do token
      process.env.JWT_SECRET || "secretkey", // Chave secreta
      { expiresIn: "1h" } // Expiração do token
    );

    return { token };
  }
}

export { LoginService };
