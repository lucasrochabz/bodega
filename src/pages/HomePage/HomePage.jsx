import { useState } from 'react';
import { useProducts } from '@/hooks/products';
import { MainLayout } from '@/components/layout/MainLayout';
import { Loading } from '../../components/ui/Loading';
import { ErrorState } from '@/components/ui/ErrorState';
import { EmptyState } from '@/components/ui/EmptyState';
import { ProductList } from '../../components/ui/ProductList';
import { Pagination } from '../../components/ui/Pagination';

const HomePage = () => {
  const [page, setPage] = useState(1);
  const pageSize = 6;
  const { isLoading, error, data } = useProducts(page, pageSize);

  let content;
  if (isLoading) content = <Loading />;
  else if (error) content = <ErrorState message={error} />;
  else if (!data?.items.length) content = <EmptyState />;
  else {
    content = (
      <>
        <ProductList data={data.items} />
        <Pagination
          pagination={data.pagination}
          page={page}
          setPage={setPage}
        />
      </>
    );
  }

  return <MainLayout title="Home">{content}</MainLayout>;
};

export default HomePage;
