import React from "react";
import PropTypes from "prop-types";

const Pagination = props => {
  const { movies, paginate, currentPage, previousPage, nextPage } = props;
  let pageNumbers = [];
  for (let i = 1; i < movies.total_pages + 1; i++) {
    pageNumbers = [...pageNumbers, i];
  }
  const intialRange = currentPage - 2 >= 0 ? currentPage - 2 : currentPage - 1;
  const visiblePagination = pageNumbers.slice(intialRange, currentPage + 2);

  return (
    <div>
      <ul className="pagination">
        {currentPage > 1 && (
          <li className="page-item">
            <button
              className="page-link"
              onClick={() => previousPage(currentPage)}
            >
              Previous
            </button>
          </li>
        )}
        {visiblePagination.map(number => (
          <li
            key={number}
            className={`page-item ${number === currentPage && "active"}`}
          >
            <button className="page-link" onClick={() => paginate(number)}>
              {number}
            </button>
          </li>
        ))}
        {currentPage < pageNumbers.length && (
          <li className="page-item">
            <button className="page-link" onClick={() => nextPage(currentPage)}>
              Next
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

Pagination.propTypes = {
  total_pages: PropTypes.number,
  paginate: PropTypes.func,
  currentPage: PropTypes.number,
  previousPage: PropTypes.func,
  nextPage: PropTypes.func
};

export default Pagination;
