import { prisma } from '@/lib/prisma';
import { missingReadinessFields } from '@/lib/readiness';
import { sendReplyInThread } from '@/lib/gmail';

export async function POST(_: Request, { params }: { params: { id: string } }) {
  const show = await prisma.show.findUnique({ where: { id: params.id }, include: { marketingRequirements: true } });
  if (!show?.gmailThreadId) return Response.json({ ok: false, error: 'No gmail thread' }, { status: 400 });
  const missing = missingReadinessFields(show.marketingRequirements);
  const body = `Hi team, we still need:\n${missing.map((m) => `- ${m}`).join('\n')}`;
  await sendReplyInThread(show.gmailThreadId, 'promoter@example.com', 'Need details for announcement readiness', body);
  await prisma.emailOutboxLog.create({ data: { showId: show.id, gmailThreadId: show.gmailThreadId, template: 'needs-answers', sentByUserId: 'system' } });
  return Response.json({ ok: true, missing });
}
