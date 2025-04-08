import { Button } from '../Button';
import './Pagination.css';

export const Pagination = ({ data, currentPage, setCurrentPage }) => {
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
      <Button type="pagination" onClick={handlePrevPage}>
        Anterior
      </Button>
      <span>
        Página {currentPage} de {data.totalPages}
      </span>
      <Button type="pagination" onClick={handleNextPage}>
        Próximo
      </Button>
    </div>
  );
};
