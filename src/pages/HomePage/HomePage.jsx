import { useEffect, useState } from 'react';
import { GET_PRODUCTS } from '../../api/products';
import { useFetch } from '../../hooks';
import { Head } from '../../components/Head';
import { Loading } from '../../components/Loading';
import { Header } from '../../components/Header';
import { ProductList } from '../../components/ProductList';
import { Pagination } from '../../components/Pagination';
import { Footer } from '../../components/Footer';

const HomePage = () => {
  const { request, results, loading } = useFetch();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(4);

  useEffect(() => {
    const getProducts = async () => {
      const { url, options } = GET_PRODUCTS(currentPage, pageSize);
      request(url, options);
    };

    getProducts();
  }, [currentPage, pageSize, request]);

  if (loading || !results) return <Loading />;
  return (
    <>
      <Head title="Home" description="Descrição da página Home" />

      <Header />
      <ProductList data={results.data} />
      <Pagination
        data={results.data}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <Footer />
    </>
  );
};

export default HomePage;
