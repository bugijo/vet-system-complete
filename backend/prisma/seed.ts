import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Iniciando seed do banco de dados...');

  // Criar cargos
  const cargos = [
    { nome: 'DONO', descricao: 'Proprietário da clínica' },
    { nome: 'VETERINARIO', descricao: 'Médico veterinário' },
    { nome: 'FUNCIONARIO', descricao: 'Funcionário geral' },
    { nome: 'FINANCEIRO', descricao: 'Responsável pelo financeiro' },
  ];

  for (const cargo of cargos) {
    await prisma.cargo.upsert({
      where: { nome: cargo.nome },
      update: {},
      create: cargo,
    });
  }

  console.log('✅ Cargos criados com sucesso!');

  // Criar usuário administrador
  const hashedPassword = await bcrypt.hash('admin123', 10);
  
  const adminUser = await prisma.usuario.upsert({
    where: { email: 'admin@vetclinic.com' },
    update: {},
    create: {
      nome: 'Administrador',
      email: 'admin@vetclinic.com',
      senha: hashedPassword,
      cargoId: 1, // DONO
    },
  });

  console.log('✅ Usuário administrador criado:', adminUser.email);
  console.log('🌱 Seed concluído com sucesso!');
}

main()
  .catch((e) => {
    console.error('❌ Erro durante o seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });