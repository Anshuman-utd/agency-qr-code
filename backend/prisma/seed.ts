import { PrismaClient } from '../src/generated/prisma';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import * as bcrypt from 'bcrypt';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('Seeding database...');
  
  // Clean up database
  await prisma.qRIssuance.deleteMany({});
  await prisma.agencyUser.deleteMany({});
  await prisma.agency.deleteMany({});

  // 1. Create Agency
  const agency = await prisma.agency.create({
    data: {
      name: 'Alpha Agency',
      code: 'ALPHA',
    },
  });
  console.log(`Created agency: ${agency.name} (${agency.id})`);

  // 2. Create Admin and Staff users
  const passwordHash = await bcrypt.hash('password123', 10);

  const admin = await prisma.agencyUser.create({
    data: {
      agencyId: agency.id,
      name: 'Agency Head',
      email: 'admin@alpha.com',
      passwordHash,
      role: 'ADMIN',
      isActive: true,
    },
  });
  console.log(`Created admin: ${admin.email}`);

  const staff = await prisma.agencyUser.create({
    data: {
      agencyId: agency.id,
      name: 'Verification Staff',
      email: 'staff@alpha.com',
      passwordHash,
      role: 'STAFF',
      isActive: true,
    },
  });
  console.log(`Created staff: ${staff.email}`);
  
  console.log('Database seeded successfully.');
}

main()
  .catch((e) => {
    console.error('Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
