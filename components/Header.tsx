import Link from 'next/link';

export default function Header() {
  return (
    <header style={{ padding: '1rem 2rem', borderBottom: '1px solid #ddd' }}>
      <nav>
        <Link href="/">Home</Link>
        {' | '}
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
}
