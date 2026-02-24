import Link from 'next/link';

export default function Home() {
  return <main className="p-8"><h1 className="text-2xl font-bold">Artist Booking OS</h1><Link href="/login" className="underline">Login</Link></main>;
}
