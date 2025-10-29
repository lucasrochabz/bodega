import { useEffect, useState } from 'react';
import { GET_PRODUCTS } from '../../api/products';
import { useFetch } from '../../hooks';
import { Head } from '../../components/Head';
import { Loading } from '../../components/Loading';
import { Header } from '../../components/Header';
import { ProductList } from '../../components/ProductList';
import { Pagination } from '../../components/Pagination';
import { Footer } from '../../components/Footer';
import styles from './HomePage.module.css';

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

  return (
    <>
      <Head title="Home" description="Descrição da página Home" />
      {loading || !results ? (
        <Loading />
      ) : (
        <main className={styles.home}>
          <Header />
          <ProductList data={results.data} />
          <Pagination
            data={results.data}
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
