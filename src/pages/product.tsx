import Content from 'layouts/Content';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';

const ProductDetailPage: React.FC = () => {
  const router = useRouter();
  const { pid } = router.query;
  return (
    <Content>
      <p>Post: {pid}</p>
    </Content>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      hideHeaderMenu: true,
    },
  };
};

export default ProductDetailPage;
