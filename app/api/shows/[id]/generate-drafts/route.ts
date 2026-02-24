import { prisma } from '@/lib/prisma';
import { generateMarketingDrafts } from '@/lib/openai';

export async function POST(_: Request, { params }: { params: { id: string } }) {
  const show = await prisma.show.findUnique({ where: { id: params.id }, include: { artist: true, marketingRequirements: true, lineup: true } });
  if (!show) return Response.json({ ok: false }, { status: 404 });
  const drafts = await generateMarketingDrafts({
    artistName: show.artist.name,
    venue: show.venue,
    city: show.city,
    ticketLink: show.marketingRequirements?.ticketLink,
    lineup: show.lineup.map((l) => l.artistName || 'Roster Artist'),
    date: show.date.toISOString().slice(0, 10)
  });
  await prisma.marketingAsset.createMany({ data: [
    { showId: show.id, type: 'SOCIAL', content: drafts.social, createdByUserId: 'system' },
    { showId: show.id, type: 'PROMOTER_COPY', content: drafts.promoter, createdByUserId: 'system' },
    { showId: show.id, type: 'EMAIL', content: drafts.email, createdByUserId: 'system' }
  ] });
  return Response.json({ ok: true });
}
