import { useEffect, useState } from 'react';
import { GET_PRODUCTS } from '../../helpers/apiHelper';
import { useFetch } from '../../hooks';
import { Head } from '../../components/Head';
import { Loading } from '../../components/Loading';
import { Header } from '../../components/Header';
import { ProductList } from '../../components/ProductList';
import { Footer } from '../../components/Footer';
import './HomePage.css';

export const HomePage = () => {
  const { request, loading, data } = useFetch();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(4);

  const getProducts = async () => {
    const { url, options } = GET_PRODUCTS(currentPage, pageSize);
    request(url, options);
  };

  const handleNextPage = () => {
    if (currentPage < data.totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  useEffect(() => {
    getProducts();
  }, [currentPage]);

  return (
    <>
      <Head title="Home" description="Descrição da página Home" />
      <Header />
      {loading || !data ? (
        <Loading />
      ) : (
        <main className="home">
          <ProductList data={data} />
          <div className="navegacao">
            <button onClick={handlePrevPage}>Anterior</button>
            <span>
              Página {currentPage} de {data.totalPages}
            </span>
            <button onClick={handleNextPage}>Próximo</button>
          </div>
        </main>
      )}
      <Footer />
    </>
  );
};
