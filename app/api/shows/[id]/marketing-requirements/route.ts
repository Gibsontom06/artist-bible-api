import { prisma } from '@/lib/prisma';
import { computeReadiness } from '@/lib/readiness';

export async function POST(req: Request, { params }: { params: { id: string } }) {
  const data = await req.json();
  const reqs = await prisma.marketingRequirements.upsert({
    where: { showId: params.id },
    update: data,
    create: { showId: params.id, ...data }
  });
  await prisma.show.update({ where: { id: params.id }, data: { announcementReadyStatus: computeReadiness(reqs) } });
  return Response.json({ ok: true });
}
