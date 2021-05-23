import { GetServerSideProps, NextPage } from 'next';
import CardGrid from '../src/components/CardGrid';
import Header from '../src/components/Header';

interface HomepageProps {
  posts: any[];
}

const Home: NextPage<HomepageProps> = ({ posts }) => {
  console.log(JSON.stringify(posts));
  return (
    <>
      <Header />
      <div className="container mx-auto mt-4">
        <CardGrid cards={posts} />
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const data = await (
    await fetch(`${process.env.API_ENDPOINT.replace(/\s/g, '')}api/posts/all`)
  ).json();

  return {
    props: {
      posts: data.posts,
    },
  };
};

export default Home;
