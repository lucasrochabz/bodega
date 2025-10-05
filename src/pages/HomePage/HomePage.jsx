import { useEffect, useState } from 'react';
import { GET_PRODUCTS } from '../../api/products';
import { useFetch } from '../../hooks';
import { Head } from '../../components/Head';
import { Loading } from '../../components/Loading';
import { Header } from '../../components/Header';
import { ProductList } from '../../components/ProductList';
import { Pagination } from '../../components/Pagination';
import { Footer } from '../../components/Footer';
import './HomePage.css';

const HomePage = () => {
  const { request, loading, data } = useFetch();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(4);

  const getProducts = async () => {
    const { url, options } = GET_PRODUCTS(currentPage, pageSize);
    request(url, options);
  };

  useEffect(() => {
    getProducts();
  }, [currentPage]);

  return (
    <>
      <Head title="Home" description="Descrição da página Home" />
      {loading || !data ? (
        <Loading />
      ) : (
        <main className="home">
          <Header />
          <ProductList data={data} />
          <Pagination
            data={data}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
          <Footer />
        </main>
      )}
    </>
  );
};

export default HomePage;
