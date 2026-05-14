import type { Metadata } from 'next';
import Header from '@/components/Header';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `${params.slug} | Blog`,
  };
}

export async function generateStaticParams() {
  return [{ slug: 'first-post' }];
}

export default async function BlogPost({ params }: Props) {
  const { slug } = params;

  return (
    <>
      <Header />
      <main style={{ padding: '2rem' }}>
        <h1>Blog post: {slug}</h1>
        <p>This is a dynamic route using getStaticProps + getStaticPaths.</p>
      </main>
    </>
  );
}
