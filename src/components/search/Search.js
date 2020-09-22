import React from "react";

function Search({ handleSearch, keyword, setKeyword }) {
  const onChange = (event) => {
    setKeyword(event.target.value);
  };

  return (
    <div className="row">
      <div className="col-lg-12 card-margin">
        <div className="card search-form">
          <div className="card-body p-0">
            <form
              id="search-form"
              onSubmit={(e) => {
                e.preventDefault();
                handleSearch();
              }}
            >
              <div className="row">
                <div className="col-12">
                  <div className="row no-gutters">
                    <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                      <select
                        className="form-control"
                        id="exampleFormControlSelect1"
                      >
                        <option>Sort By Stars</option>
                      </select>
                    </div>
                    <div className="col-lg-8 col-md-6 col-sm-12 p-0">
                      <input
                        type="text"
                        placeholder="Search..."
                        className="form-control"
                        id="search"
                        name="search"
                        onChange={onChange}
                        value={keyword}
                      />
                    </div>
                    <div className="col-lg-1 col-md-3 col-sm-12 p-0">
                      <button type="submit" className="btn btn-base">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-search"
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
