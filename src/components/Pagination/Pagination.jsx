import PropTypes from 'prop-types';
import { Button } from '../Button';
import './Pagination.css';

const Pagination = ({ data, currentPage, setCurrentPage }) => {
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

  return (
    <div className="pagination">
      <Button variant="pagination" onClick={handlePrevPage}>
        Anterior
      </Button>
      <span>
        Página {currentPage} de {data.totalPages}
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
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

export default Pagination;
