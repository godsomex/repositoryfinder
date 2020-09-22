import React from "react";

function Search() {
  return (
    <div className="row">
      <div className="col-lg-12 card-margin">
        <div className="card search-form">
          <div className="card-body p-0">
            <form id="search-form">
              <div className="row">
                <div className="col-12">
                  <div className="row no-gutters">
                    <div className="col-lg-8 col-md-6 col-sm-12 p-0">
                      <input
                        type="text"
                        placeholder="Search..."
                        class="form-control"
                        id="search"
                        name="search"
                      />
                    </div>
                    <div class="col-lg-1 col-md-3 col-sm-12 p-0">
                      <button type="submit" class="btn btn-base">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-search"
                        >
                          <circle cx="11" cy="11" r="8"></circle>
                          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
