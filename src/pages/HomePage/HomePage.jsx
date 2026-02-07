import { useState } from 'react';
import useProducts from '../../hooks/products/useProducts';
import { Head } from '../../components/shared/Head';
import { Loading } from '../../components/ui/Loading';
import { Header } from '../../components/layout/Header';
import { ProductList } from '../../components/ui/ProductList';
import { Pagination } from '../../components/ui/Pagination';
import { Footer } from '../../components/layout/Footer';

const HomePage = () => {
  const [page, setPage] = useState(1);
  const [pageSize] = useState(4);

  const { data, loading, error } = useProducts({ page, pageSize });

  if (loading) return <Loading />;
  if (error) return <div>{error}</div>;
  if (!data) return null;
  return (
    <>
      <Head title="Home" description="Descrição da página Home" />

      <Header />
      <ProductList data={data} />
      <Pagination pagination={data.pagination} page={page} setPage={setPage} />
      <Footer />
    </>
  );
};

export default HomePage;
