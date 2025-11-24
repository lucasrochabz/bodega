import { useEffect, useState } from 'react';
import { useFetch } from '../../hooks';
import { Head } from '../../components/Head';
import { Loading } from '../../components/Loading';
import { Header } from '../../components/Header';
import { ProductList } from '../../components/ProductList';
import { Pagination } from '../../components/Pagination';
import { Footer } from '../../components/Footer';
import { productsService } from '../../services/productsService';

const HomePage = () => {
  const { request, loading, results } = useFetch();
  const [page, setPage] = useState(1);
  const [pageSize] = useState(4);

  useEffect(() => {
    productsService.getProducts({ page, pageSize, request });
  }, [page, pageSize, request]);

  if (loading || !results) return <Loading />;
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
