import PropTypes from 'prop-types';
import { Button } from '../Button';
import styles from './Pagination.module.css';

const Pagination = ({ data, page, setPage }) => {
  const handleNextPage = () => {
    if (page < data.totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className={styles.pagination}>
      <Button variant="pagination" onClick={handlePrevPage}>
        Anterior
      </Button>
      <span>
        Página {page} de {data.totalPages}
      </span>
      <Button variant="pagination" onClick={handleNextPage}>
        Próximo
      </Button>
    </div>
  );
};

Pagination.propTypes = {
  data: PropTypes.shape({
    totalPages: PropTypes.number.isRequired,
  }),
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
};

export default Pagination;
