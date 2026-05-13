import Head from 'next/head';
import Header from '@/components/Header';

export default function About() {
  return (
    <>
      <Head>
        <title>About | migrate-bot prod test</title>
      </Head>
      <Header />
      <main style={{ padding: '2rem' }}>
        <h1>About</h1>
        <p>This is a sample Pages Router app used by migrate-bot.</p>
      </main>
    </>
  );
}
