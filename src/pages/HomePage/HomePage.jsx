import { useState } from 'react';
import useProducts from '../../hooks/products/useProducts';
import { Head } from '../../components/shared/Head';
import { Header } from '../../components/layout/Header';
import { Loading } from '../../components/ui/Loading';
import { ProductList } from '../../components/ui/ProductList';
import { Pagination } from '../../components/ui/Pagination';
import { Footer } from '../../components/layout/Footer';
import styles from './HomePage.module.css';

const HomePage = () => {
  const [page, setPage] = useState(1);
  const pageSize = 4;
  const { isLoading, error, data } = useProducts({ page, pageSize });

  let content;
  if (isLoading) content = <Loading />;
  else if (error) content = <div>{error}</div>;
  else if (!data?.items.length) content = <div>Produtos não encontrados.</div>;
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

  return (
    <>
      <Head title="Home" description="Descrição da página Home" />

      <Header />
      <main className={styles.wrapper}>{content}</main>
      <Footer />
    </>
  );
};

export default HomePage;
