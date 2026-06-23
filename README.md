# SaborBR App

Aplicativo acadêmico de pedidos de marmitas, desenvolvido para explorar desenvolvimento mobile, autenticação, catálogo de produtos, cálculo de frete e integração entre cliente e API.

## Funcionalidades

- Cadastro e autenticação de usuários.
- Catálogo de marmitas.
- Cálculo de frete conforme a localização.
- Fluxo de pedido e acompanhamento do usuário.

## Arquitetura

```text
Front-end mobile (Expo / React Native) → API REST (Fastify / TypeScript) → MongoDB (Prisma)
```

| Componente | Repositório | Responsabilidade |
| --- | --- | --- |
| Front-end | [FrontSaborBR](https://github.com/beea5/FrontSaborBR) | Interface mobile, navegação e experiência do usuário. |
| Back-end | [BackSabor](https://github.com/beea5/BackSabor) | API REST, regras de negócio e persistência. |

## Tecnologias

- **Mobile:** React Native, Expo, Expo Router e TypeScript.
- **API:** Node.js, Fastify, TypeScript e CORS.
- **Dados:** Prisma e MongoDB.

## Como executar localmente

### 1. Back-end

```bash
git clone https://github.com/beea5/BackSabor.git
cd BackSabor
npm install
npm run dev
```

A API inicia em `http://localhost:3333`. Configure a conexão do banco de dados conforme o schema do Prisma antes de iniciar o servidor.

### 2. Front-end mobile

```bash
git clone https://github.com/beea5/FrontSaborBR.git
cd FrontSaborBR
npm install
npm start
```

Use o Expo Go em um dispositivo físico ou execute `npm run android`, `npm run ios` ou `npm run web` conforme o ambiente disponível.

## Fluxo principal

1. O usuário cria uma conta ou realiza login.
2. Navega pelo catálogo de marmitas.
3. Informa os dados necessários para cálculo de frete.
4. Confirma o pedido.
5. O aplicativo consome a API, que aplica as regras e persiste os dados.

## Contexto acadêmico

Projeto desenvolvido na disciplina de Programação para Dispositivos Móveis em Android por Beatriz Colombo de Oliveira, Lucas Palma Cardoso e Gabriel Lunardi.
