import { prisma } from './prisma';

export async function ingestLabeledThreads() {
  // Placeholder Gmail API integration point.
  // Idempotency is enforced via unique gmailThreadId/gmailMessageId.
  return { offers: 0, outreach: 0 };
}

export async function upsertThreadAndMessage(input: { gmailThreadId: string; gmailMessageId: string; type: 'OFFER' | 'OUTREACH'; receivedAt: Date; fromEmail: string; subject: string; snippet?: string; }) {
  const thread = await prisma.emailThread.upsert({
    where: { gmailThreadId: input.gmailThreadId },
    update: { lastMessageAt: input.receivedAt, type: input.type },
    create: { gmailThreadId: input.gmailThreadId, lastMessageAt: input.receivedAt, type: input.type }
  });
  await prisma.emailMessage.upsert({
    where: { gmailMessageId: input.gmailMessageId },
    update: { subject: input.subject, snippet: input.snippet },
    create: { emailThreadId: thread.id, gmailMessageId: input.gmailMessageId, fromEmail: input.fromEmail, subject: input.subject, snippet: input.snippet, receivedAt: input.receivedAt }
  });
}

export async function sendReplyInThread(gmailThreadId: string, to: string, subject: string, body: string) {
  console.log('send gmail', { gmailThreadId, to, subject, body });
}
