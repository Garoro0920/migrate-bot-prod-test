import type { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Header from '@/components/Header';

type Props = {
  slug: string;
};

export default function BlogPost({ slug }: Props) {
  return (
    <>
      <Head>
        <title>{slug} | Blog</title>
      </Head>
      <Header />
      <main style={{ padding: '2rem' }}>
        <h1>Blog post: {slug}</h1>
        <p>This is a dynamic route using getStaticProps + getStaticPaths.</p>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { slug: 'first-post' } }],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const slug = context.params?.slug as string;
  return { props: { slug } };
};
