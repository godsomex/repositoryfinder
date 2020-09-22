import React from "react";

import Pagination from "./pagination/Pagination";
import Table from "./table/Table";
import Search from "./search/Search";

import { Container } from "./styles/";

const App = ({ onSubmit }) => {
  return (
    <Container>
      <Search />
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
                          <div className="records">
                            Showing: <b>1-20</b> of <b>200</b> result
                          </div>
                        </div>
                      </div>
                    </div>
                    <Table />
                  </div>
                </div>
              </div>
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default App;
