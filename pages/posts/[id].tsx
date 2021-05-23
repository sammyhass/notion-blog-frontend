import { GetServerSideProps, NextPage } from 'next';
import React from 'react';
import Header from '../../src/components/Header';
import PageView from '../../src/components/PageView';

interface PostPageProps {
  page: any;
  title: string;
  dateCreated: Date;
  dateUpdated: Date;
}

const PostPage: NextPage<PostPageProps> = ({
  page,
  title,
  dateCreated,
  dateUpdated,
}) => {
  return (
    <>
      <Header />
      <div className="mx-auto container mt-6">
        <PageView
          dateCreated={dateCreated}
          dateUpdated={dateUpdated}
          title={title}
          blocks={page}
        />
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params;

  const data = await (
    await fetch(`${process.env.API_ENDPOINT}/api/posts/${id}`)
  ).json();

  return {
    props: {
      page: data.post,
      title: data.title,
      dateCreated: data.dateCreated,
      dateUpdated: data.dateUpdated,
    },
  };
};

export default PostPage;
