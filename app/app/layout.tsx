import Link from 'next/link';
import { ReactNode } from 'react';

export default function AppLayout({ children }: { children: ReactNode }) {
  return <div className="p-6 space-y-4"><nav className="flex gap-4 text-sm underline"><Link href="/app">Dashboard</Link><Link href="/app/tours">Tours</Link><Link href="/app/offers">Offers</Link><Link href="/app/outreach">Outreach</Link><Link href="/app/admin/import">Import</Link></nav>{children}</div>;
}
