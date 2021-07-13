import Content from 'layouts/Content';
import Layout from 'layouts';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import { fetchCategories } from '@api/category/get-all-categories';
// import CategoryBlock from '@components/Category/category-block';
import { useRouter } from 'next/router';

const ProductDetailPage: React.FC = () => {
  const router = useRouter();
  //   console.log(router);
  //   console.log(router.query);
  //   console.log(router.query.query);
  const { pid } = router.query;
  return (
    <Layout>
      <Content>
        {/* <p>producgt</p> */}
        <p>Post: {pid}</p>
        {/* <CategoryBlock /> */}
      </Content>
    </Layout>
  );
};

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 10,
  };
}

// export async function getStaticPaths() {
//   // const queryClient = new QueryClient();
//   // await queryClient.prefetchQuery(['categoryList'], fetchCategories);
//   return {
//     paths: [],
//     fallback: true,
//   };
// }

export default ProductDetailPage;
