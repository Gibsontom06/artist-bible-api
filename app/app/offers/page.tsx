import { ThreadViewer } from '@/components/thread-viewer';

export default function OffersPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-bold">Offers Inbox</h1>
      <form action="/api/sync-gmail" method="post"><button className="underline">Sync now</button></form>
      <ThreadViewer />
    </div>
  );
}
