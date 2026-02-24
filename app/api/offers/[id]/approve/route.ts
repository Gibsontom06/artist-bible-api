import { prisma } from '@/lib/prisma';
import { buildShowStoragePrefix } from '@/lib/storage';

export async function POST(_: Request, { params }: { params: { id: string } }) {
  const offer = await prisma.offer.update({ where: { id: params.id }, data: { status: 'APPROVED' }, include: { artist: true } });
  const existing = await prisma.show.findFirst({ where: { gmailThreadId: offer.gmailThreadId } });
  if (!existing) {
    await prisma.show.create({
      data: {
        artistId: offer.artistId,
        date: new Date(),
        city: 'TBD',
        venue: 'TBD',
        status: 'APPROVED',
        gmailThreadId: offer.gmailThreadId,
        storagePrefix: buildShowStoragePrefix(offer.artist.slug, new Date(), 'TBD', 'TBD')
      }
    });
  }
  return Response.json({ ok: true });
}
