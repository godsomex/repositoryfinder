import React from "react";

function Pagination() {
  return (
    <nav class="d-flex justify-content-center">
      <ul class="pagination pagination-base pagination-boxed pagination-square mb-0">
        <li class="page-item">
          <a class="page-link no-border" href="#">
            <span aria-hidden="true">«</span>
            <span class="sr-only">Previous</span>
          </a>
        </li>
        <li class="page-item active">
          <a class="page-link no-border" href="#">
            1
          </a>
        </li>
        <li class="page-item">
          <a class="page-link no-border" href="#">
            2
          </a>
        </li>
        <li class="page-item">
          <a class="page-link no-border" href="#">
            3
          </a>
        </li>
        <li class="page-item">
          <a class="page-link no-border" href="#">
            4
          </a>
        </li>
        <li class="page-item">
          <a class="page-link no-border" href="#">
            <span aria-hidden="true">»</span>
            <span class="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
