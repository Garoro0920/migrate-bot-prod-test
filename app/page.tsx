import Link from 'next/link';
import type { Metadata } from 'next';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'migrate-bot prod test',
  description: 'Sample Pages Router app for migrate-bot E2E test',
};

export default function Home() {
  return (
    <>
      <Header />
      <main style={{ padding: '2rem' }}>
        <h1>Hello from Pages Router</h1>
        <p>This is a minimal Next.js app used to verify the migrate-bot pipeline end-to-end.</p>
        <ul>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/blog/first-post">First blog post</Link>
          </li>
        </ul>
      </main>
    </>
  );
}
