import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { getReposBysearch } from "../redux/actions/repoActions";
import Pagination from "../components/pagination/Pagination";
import Table from "../components/table/Table";
import Search from "../components/search/Search";
import { RESULTS_PER_PAGE } from "../constants";
import { Container } from "../styles";

const App = () => {
  const repositories = useSelector((state) => state.repositories);
  const [currentPage, setCurrentPage] = useState(1);
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    handleSearch(currentPage);
  }, [currentPage]);

  const handleSearch = (pageno) => {
    if (keyword) {
      dispatch(getReposBysearch(keyword, pageno, RESULTS_PER_PAGE));
    }
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Container>
      <Search
        handleSearch={handleSearch}
        setKeyword={setKeyword}
        keyword={keyword}
      />
      <div className="row  mx-auto">
        <div className="col-12">
          <div className="card card-margin">
            <div className="card-body">
              <div className="row search-body">
                <div className="col-lg-12">
                  <div className="search-result">
                    <div className="result-header">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="records"></div>
                        </div>
                      </div>
                    </div>
                    <Table
                      repos={repositories?.repos}
                      totalRepos={repositories?.total}
                    />
                  </div>
                </div>
              </div>
              <Pagination
                paginate={paginate}
                totalRepos={repositories?.total}
                reposPerPage={RESULTS_PER_PAGE}
                currentPage={currentPage}
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default App;
