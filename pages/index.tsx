import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>migrate-bot prod test</title>
        <meta name="description" content="Sample Pages Router app for migrate-bot E2E test" />
      </Head>
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
