import React from "react";
import { PAGES_TO_SHOW } from "../../constants";

function getLowestPageToRender(totalPages, currentPage, numberOfPagesToShow) {
  if (numberOfPagesToShow >= totalPages) {
    return 1;
  }

  if (
    numberOfPagesToShow - currentPage >=
    Math.floor(numberOfPagesToShow / 2)
  ) {
    return 1;
  }
  const temp = currentPage - Math.floor(numberOfPagesToShow / 2);

  if (temp + (numberOfPagesToShow - 1) >= totalPages) {
    return totalPages - (numberOfPagesToShow - 1);
  }
  return temp;
}

function getPagesToRender(lowestPage, amount) {
  if (amount) {
    return new Array(amount)
      .fill(lowestPage)
      .map((value, index) => value + index);
  }
}

function Pagination({ reposPerPage, totalRepos, paginate, currentPage }) {
  const lastPage = Math.ceil(totalRepos / reposPerPage);
  const lowestPageToRender = getLowestPageToRender(
    lastPage,
    currentPage,
    PAGES_TO_SHOW
  );

  const actualPagesToShow = Math.min(
    PAGES_TO_SHOW,
    Math.ceil(totalRepos / reposPerPage)
  );
  const pagesToRender = getPagesToRender(lowestPageToRender, actualPagesToShow);

  if (totalRepos <= 25) return null;

  return (
    <nav className="d-flex justify-content-center">
      <ul className="pagination pagination-base pagination-boxed pagination-square mb-0">
        {currentPage !== 1 && (
          <li className="page-item">
            <a
              onClick={() => paginate(currentPage - 1)}
              className="page-link"
              href="!#"
            >
              Previous
            </a>
          </li>
        )}
        {pagesToRender?.map((number, index) => (
          <li
            className="page-item active"
            key={index}
            data-test="pagination-button"
          >
            <a
              onClick={() => paginate(number)}
              className="page-link no-border"
              href="!#"
            >
              {number}
            </a>
          </li>
        ))}
        {currentPage !== lastPage && (
          <li className="page-item">
            <a
              onClick={() => paginate(currentPage + 1)}
              className="page-link"
              href="!#"
            >
              Next
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Pagination;
