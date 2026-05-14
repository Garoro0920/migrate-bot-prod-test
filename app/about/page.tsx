import type { Metadata } from 'next';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'About | migrate-bot prod test',
};

export default function About() {
  return (
    <>
      <Header />
      <main style={{ padding: '2rem' }}>
        <h1>About</h1>
        <p>This is a sample Pages Router app used by migrate-bot.</p>
      </main>
    </>
  );
}
