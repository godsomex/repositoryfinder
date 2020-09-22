import styled from "@emotion/styled";

export const Container = styled.div`
  body {
    background: #dcdcdc;
    margin-top: 20px;
  }

  .widget-26 {
    color: #3c4142;
    font-weight: 400;
  }

  .widget-26 .widget-26-repo-emp-img img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
  }

  .widget-26 .widget-26-repo-title {
    min-width: 200px;
  }

  .widget-26 .widget-26-repo-title a {
    font-weight: 400;
    font-size: 0.875rem;
    color: #3c4142;
    line-height: 1.5;
  }

  .widget-26 .widget-26-repo-title a:hover {
    color: #68cbd7;
    text-decoration: none;
  }

  .widget-26 .widget-26-repo-title .repo-name {
    margin: 0;
    line-height: 1.5;
    font-weight: 400;
    color: #3c4142;
    font-size: 0.8125rem;
    color: #3c4142;
  }

  .widget-26 .widget-26-repo-title .repo-name:hover {
    color: #68cbd7;
    text-decoration: none;
  }

  .widget-26 .widget-26-repo-title .time {
    font-size: 12px;
    font-weight: 400;
  }

  .widget-26 .widget-26-repo-info {
    min-width: 100px;
    font-weight: 400;
  }

  .widget-26 .widget-26-repo-info p {
    line-height: 1.5;
    color: #3c4142;
    font-size: 0.8125rem;
  }

  .widget-26 .widget-26-repo-info .location {
    color: #3c4142;
  }

  .widget-26 .widget-26-repo-issues {
    min-width: 70px;
    font-weight: 400;
    color: #3c4142;
    font-size: 0.8125rem;
  }

  .widget-26 .widget-26-repo-category {
    padding: 0.5rem;
    display: inline-flex;
    white-space: nowrap;
    border-radius: 15px;
  }

  .widget-26 .widget-26-repo-category .indicator {
    width: 13px;
    height: 13px;
    margin-right: 0.5rem;
    float: left;
    border-radius: 50%;
  }

  .widget-26 .widget-26-repo-category span {
    font-size: 0.8125rem;
    color: #3c4142;
    font-weight: 600;
  }

  .widget-26 .widget-26-repo-starred svg {
    width: 20px;
    height: 20px;
    color: #fd8b2c;
  }

  .widget-26 .widget-26-repo-starred svg.starred {
    fill: #fd8b2c;
  }
  .bg-soft-base {
    background-color: #e1f5f7;
  }
  .bg-soft-warning {
    background-color: #fff4e1;
  }
  .bg-soft-success {
    background-color: #d1f6f2;
  }
  .bg-soft-danger {
    background-color: #fedce0;
  }
  .bg-soft-info {
    background-color: #d7efff;
  }

  .search-form {
    width: 80%;
    margin: 0 auto;
    margin-top: 1rem;
  }

  .search-form input {
    height: 100%;
    background: transparent;
    border: 0;
    display: block;
    width: 100%;
    padding: 1rem;
    height: 100%;
    font-size: 1rem;
  }

  .search-form select {
    background: transparent;
    border: 0;
    padding: 1rem;
    height: 100%;
    font-size: 1rem;
  }

  .search-form select:focus {
    border: 0;
  }

  .search-form button {
    height: 100%;
    width: 100%;
    font-size: 1rem;
  }

  .search-form button svg {
    width: 24px;
    height: 24px;
  }

  .search-body {
    margin-bottom: 1.5rem;
  }

  .search-body .search-filters .filter-list {
    margin-bottom: 1.3rem;
  }

  .search-body .search-filters .filter-list .title {
    color: #3c4142;
    margin-bottom: 1rem;
  }

  .search-body .search-filters .filter-list .filter-text {
    color: #727686;
  }

  .search-body .search-result .result-header {
    margin-bottom: 2rem;
  }

  .search-body .search-result .result-header .records {
    color: #3c4142;
  }

  .search-body .search-result .result-header .result-actions {
    text-align: right;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .search-body .search-result .result-header .result-actions .result-sorting {
    display: flex;
    align-items: center;
  }

  .search-body
    .search-result
    .result-header
    .result-actions
    .result-sorting
    span {
    flex-shrink: 0;
    font-size: 0.8125rem;
  }

  .search-body
    .search-result
    .result-header
    .result-actions
    .result-sorting
    select {
    color: #68cbd7;
  }

  .search-body
    .search-result
    .result-header
    .result-actions
    .result-sorting
    select
    option {
    color: #3c4142;
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    .search-body .search-filters {
      display: flex;
    }
    .search-body .search-filters .filter-list {
      margin-right: 1rem;
    }
  }

  .card-margin {
    margin-bottom: 1.875rem;
  }

  @media (min-width: 992px) {
    .col-lg-2 {
      flex: 0 0 16.66667%;
      max-width: 16.66667%;
    }
  }

  .card-margin {
    margin-bottom: 1.875rem;
  }
  .card {
    border: 0;
    box-shadow: 0px 0px 10px 0px rgba(82, 63, 105, 0.1);
    -webkit-box-shadow: 0px 0px 10px 0px rgba(82, 63, 105, 0.1);
    -moz-box-shadow: 0px 0px 10px 0px rgba(82, 63, 105, 0.1);
    -ms-box-shadow: 0px 0px 10px 0px rgba(82, 63, 105, 0.1);
  }
  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #ffffff;
    background-clip: border-box;
    border: 1px solid #e6e4e9;
    border-radius: 8px;
  }
`;
