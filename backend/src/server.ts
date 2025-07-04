import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { tutorRoutes } from './routes/tutor.routes';
import { petRoutes } from './routes/pet.routes';
import { agendamentoRoutes } from './routes/agendamento.routes';
import { prontuarioRoutes } from './routes/prontuario.routes';
import { produtoRoutes } from './routes/produto.routes';
import { authRoutes } from './routes/auth.routes';
import { dashboardRoutes } from './routes/dashboard.routes';
import { faturaRoutes } from './routes/fatura.routes';

// Carrega as variáveis de ambiente
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3333;

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.use('/api', tutorRoutes);
app.use('/api', petRoutes);
app.use('/api', agendamentoRoutes);
app.use('/api', prontuarioRoutes);
app.use('/api', produtoRoutes);
app.use('/api', authRoutes);
app.use('/api', dashboardRoutes);
app.use('/api', faturaRoutes);

// Rota de teste
app.get('/', (req, res) => {
  res.json({ message: 'API do Sistema Veterinário funcionando!' });
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});