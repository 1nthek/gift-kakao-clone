import { useCategoriesQuery } from '@api/category/get-all-categories';
import Anchor from 'components/Anchor';

const CategoryBlock: React.FC = () => {
  const { data, isLoading, isError, error } = useCategoriesQuery();

  return (
    <>
      <div>
        {isLoading ? (
          '로딩중'
        ) : isError ? (
          <div>Error: {error?.message}</div>
        ) : (
          data?.categories?.map((category) => (
            <Anchor
              href={`/product?pid=${category.category_id}`}
              key={category.category_id}
            >
              <div>{category.category_name}</div>
            </Anchor>
          ))
        )}
      </div>
    </>
  );
};

export default CategoryBlock;
