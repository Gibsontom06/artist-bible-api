import { ingestLabeledThreads } from '@/lib/gmail';

export async function POST() {
  const result = await ingestLabeledThreads();
  return Response.json({ ok: true, result });
}
