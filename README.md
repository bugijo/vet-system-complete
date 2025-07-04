# Sistema de Gestão Veterinária

Um sistema completo de gestão para clínicas veterinárias, desenvolvido com React (frontend) e Node.js (backend).

## 🚀 Tecnologias

### Backend
- **Node.js** com TypeScript
- **Express.js** para API REST
- **Prisma** como ORM
- **PostgreSQL** como banco de dados
- **bcryptjs** para criptografia de senhas
- **jsonwebtoken** para autenticação JWT

### Frontend
- **React 18** com TypeScript
- **Vite** como bundler
- **React Router** para roteamento
- **TailwindCSS** para estilização
- **Radix UI** para componentes
- **React Hook Form** para formulários
- **Zod** para validação
- **Axios** para requisições HTTP
- **TanStack Query** para gerenciamento de estado

## 📁 Estrutura do Projeto

```
vet-system-complete/
├── backend/
│   ├── src/
│   │   ├── controllers/     # Controladores da API
│   │   ├── models/          # Modelos de dados
│   │   ├── routes/          # Rotas da API
│   │   ├── services/        # Lógica de negócio
│   │   ├── lib/             # Configurações (Prisma)
│   │   └── server.ts        # Servidor principal
│   ├── prisma/
│   │   └── seed.ts          # Dados iniciais
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/      # Componentes React
│   │   ├── pages/           # Páginas da aplicação
│   │   ├── contexts/        # Contextos React
│   │   ├── hooks/           # Hooks customizados
│   │   ├── services/        # Serviços de API
│   │   ├── utils/           # Utilitários
│   │   ├── App.tsx          # Componente principal
│   │   └── main.tsx         # Ponto de entrada
│   ├── vite.config.ts
│   └── package.json
└── README.md
```

## 🛠️ Instalação e Configuração

### Pré-requisitos
- Node.js (versão 18 ou superior)
- PostgreSQL
- npm ou yarn

### Backend

1. Navegue até a pasta do backend:
```bash
cd backend
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env
```

4. Configure o banco de dados no arquivo `.env`:
```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/vet_system"
JWT_SECRET="seu_jwt_secret_aqui"
PORT=3333
```

5. Execute as migrações do Prisma:
```bash
npx prisma migrate dev
```

6. Execute o seed para dados iniciais:
```bash
npx prisma db seed
```

7. Inicie o servidor:
```bash
npm run dev
```

### Frontend

1. Navegue até a pasta do frontend:
```bash
cd frontend
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env
```

4. Configure a URL da API no arquivo `.env`:
```env
VITE_API_URL=http://localhost:3333
```

5. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

## 📋 Funcionalidades

- **Autenticação e Autorização**
  - Login de usuários
  - Controle de acesso por cargo
  - JWT para sessões

- **Gestão de Tutores**
  - Cadastro, edição e exclusão
  - Listagem com busca
  - Histórico de pets

- **Gestão de Pets**
  - Cadastro completo de animais
  - Vinculação com tutores
  - Histórico médico

- **Agendamentos**
  - Calendário de consultas
  - Gestão de horários
  - Status de agendamentos

- **Prontuários Médicos**
  - Histórico de consultas
  - Prescrições e tratamentos
  - Anexos e observações

- **Gestão Financeira**
  - Controle de faturas
  - Relatórios financeiros
  - Gestão de pagamentos

- **Estoque**
  - Controle de produtos
  - Movimentações
  - Alertas de estoque baixo

## 🔐 Usuário Padrão

Após executar o seed, será criado um usuário administrador:
- **Email:** admin@vetclinic.com
- **Senha:** admin123

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Suporte

Para suporte, entre em contato através do email: suporte@vetclinic.com