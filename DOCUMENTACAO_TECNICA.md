# Documentação Técnica - SaborBR

## 1. Objetivo

O SaborBR é um projeto acadêmico de aplicativo móvel para pedidos de marmitas. O sistema cobre cadastro de clientes, autenticação, catálogo, cálculo de frete e fluxo de pedidos, integrando um aplicativo React Native a uma API REST.

## 2. Arquitetura

- Front-end: React Native, Expo Router e TypeScript.
- Back-end: Node.js, Fastify, TypeScript e CORS.
- Persistência: MongoDB acessado pelo Prisma ORM.
- Porta da API: 3333.

## 3. Repositórios do ecossistema

| Repositório | Responsabilidade |
| --- | --- |
| [SaborBR_App](https://github.com/beea5/SaborBR_App) | Documentação e visão integrada do projeto. |
| [FrontSaborBR](https://github.com/beea5/FrontSaborBR) | Aplicativo mobile e navegação. |
| [BackSabor](https://github.com/beea5/BackSabor) | API REST, regras de negócio e persistência. |

## 4. Modelo de dados atual

O schema Prisma atualmente configurado usa MongoDB e possui a coleção customers. Por ser um banco orientado a documentos, os dados não são modelados como tabelas relacionais tradicionais.

### Coleção customers

| Campo | Tipo | Regra | Descrição |
| --- | --- | --- | --- |
| _id | ObjectId | chave primária | Identificador do cliente. |
| name | String | obrigatório | Nome do cliente. |
| end | String | obrigatório | Endereço. |
| fone | String | obrigatório | Telefone. |
| cep | String | obrigatório | CEP. |
| complement | String | opcional | Complemento do endereço. |
| email | String | único | E-mail usado na identificação do cliente. |
| senha | String | obrigatório | Credencial persistida pelo sistema. |
| created_at | DateTime | padrão: agora | Data de criação. |
| updated_at | DateTime | padrão: agora | Data da última atualização. |
| status | Boolean | padrão: true | Indica se o cadastro está ativo. |

### Relacionamentos atuais

No schema versionado, não há relacionamentos entre coleções. A entidade Customer é o único modelo persistido. Portanto, pedidos, produtos, itens e pagamentos ainda não aparecem como coleções Prisma no repositório.

## 5. Evolução recomendada do modelo

Customer (1) -> Order (N) -> OrderItem (N) -> Product (1)

- Product: catálogo de marmitas, preço e disponibilidade.
- Order: pedido vinculado ao cliente, endereço, frete, total e status.
- OrderItem: itens do pedido, quantidade e preço registrado no momento da compra.

## 6. Fluxo técnico principal

1. O cliente se cadastra ou realiza login.
2. O aplicativo consulta o catálogo e exibe as opções disponíveis.
3. O cliente informa endereço/CEP para cálculo de frete.
4. O front-end envia a solicitação à API Fastify.
5. A API aplica as regras de negócio e persiste os dados via Prisma/MongoDB.

## 7. Execução local

### Back-end

npm install
npm run dev

Antes de iniciar, defina DATABASE_URL para a conexão MongoDB esperada pelo Prisma.

### Front-end

npm install
npm start

O Expo permite executar no Expo Go, Android, iOS ou navegador.

## 8. Observações de segurança

- Não versione valores reais de DATABASE_URL.
- Senhas devem ser armazenadas com hash antes do uso em produção.
- Valide os dados recebidos pela API e restrinja CORS conforme o ambiente.
