import Content from 'layouts/Content';
import { useRouter } from 'next/router';

const ProductDetailPage: React.FC = () => {
  const router = useRouter();
  const { pid } = router.query;
  return (
    <Content>
      <p>Post: {pid}</p>
    </Content>
  );
};

export default ProductDetailPage;
