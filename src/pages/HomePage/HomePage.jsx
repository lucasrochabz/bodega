import { useEffect, useState } from 'react';
import { useFetch } from '../../hooks';
import { productsService } from '../../services/productsService';
import { Head } from '../../components/shared/Head';
import { Loading } from '../../components/ui/Loading';
import { Header } from '../../components/layout/Header';
import { ProductList } from '../../components/ui/ProductList';
import { Pagination } from '../../components/ui/Pagination';
import { Footer } from '../../components/layout/Footer';

const HomePage = () => {
  const { request, loading, results, error } = useFetch();
  const [page, setPage] = useState(1);
  const [pageSize] = useState(4);

  useEffect(() => {
    productsService.getAllProducts({ page, pageSize, request });
  }, [page, pageSize, request]);

  if (loading) return <Loading />;
  if (error) return <div>{error}</div>;
  if (!results) return null;
  return (
    <>
      <Head title="Home" description="Descrição da página Home" />

      <Header />
      <ProductList data={results.data} />
      <Pagination data={results.data} page={page} setPage={setPage} />
      <Footer />
    </>
  );
};

export default HomePage;
