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
      <button onClick={handlePrevPage}>Anterior</button>
      <span>
        Página {currentPage} de {data.totalPages}
      </span>
      <button onClick={handleNextPage}>Próximo</button>
    </div>
  );
};
