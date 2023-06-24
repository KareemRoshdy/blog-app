import "./pagination.css";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
const Pagination = ({ pages, currentPage, setCurrentPage }) => {
  const generatedPages = [];
  for (let i = 1; i <= pages; i++) {
    generatedPages.push(i);
  }

  return (
    <div className="pagination">
      <div className="pagination-left">
        {generatedPages.map((page) => (
          <div
            onClick={() => setCurrentPage(page)}
            className={currentPage === page ? "page active" : "page"}
            key={page}
          >
            {page}
          </div>
        ))}
      </div>
      <div className="pagination-right">
        <button
          className={
            currentPage === 1 ? "page previous dis" : "page previous"
          }
          onClick={() => setCurrentPage((prev) => prev - 1)}
          disabled={currentPage === 1}
        >
          <BsChevronLeft />
        </button>

        <button
          className={currentPage === pages ? "page next dis" : "page next"}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={currentPage === pages}
        >
          <BsChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
