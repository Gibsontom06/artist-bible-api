import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  const body = await req.json();
  const rows = body.rows as Array<Record<string, string | number>>;
  await prisma.rep.createMany({ data: [
    { name: 'Tom', role: 'BOOKING_AGENT', defaultCommissionPercent: 10 },
    { name: 'Prysm', role: 'BOOKING_AGENT', defaultCommissionPercent: 10 },
    { name: 'Tim', role: 'BOOKING_AGENT', defaultCommissionPercent: 10 },
    { name: 'Andrew', role: 'OTHER' },
    { name: 'Lee', role: 'OTHER' }
  ], skipDuplicates: true });
  return Response.json({ ok: true, imported: rows.length });
}
