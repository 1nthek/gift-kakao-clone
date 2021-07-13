import Content from 'layouts/Content';
import Layout from 'layouts';
import { GetStaticProps } from 'next';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import { fetchCategories } from '@api/category/get-all-categories';
import CategoryBlock from '@components/Category/category-block';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Content>
        <CategoryBlock />
      </Content>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // const queryClient = new QueryClient();

  // await queryClient.prefetchQuery(['categoryList'], fetchCategories);

  return {
    props: {
      // dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
    revalidate: 1,
  };
};

export default HomePage;
