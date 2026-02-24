import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const artists = ['DirtySnatcha', 'WHOiSEE', 'DARK MATTER', 'Kotrax', 'Hvrcrft'];
  for (const name of artists) {
    await prisma.artist.upsert({
      where: { slug: name.toLowerCase().replace(/\s+/g, '-') },
      update: {},
      create: { name, slug: name.toLowerCase().replace(/\s+/g, '-') }
    });
  }
  await prisma.user.upsert({
    where: { email: 'admin@artistbible.local' },
    update: { role: 'ADMIN' },
    create: { email: 'admin@artistbible.local', name: 'Admin', role: 'ADMIN' }
  });
}

main().finally(async () => prisma.$disconnect());
