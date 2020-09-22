import React from "react";

function Table({ repos, totalRepos }) {
  if (totalRepos === 0) {
    return <h1 className="text-center">No Repositories found</h1>;
  }

  return (
    <div className="result-body">
      <div className="table-responsive">
        <table className="table widget-26">
          <tbody>
            {repos?.map(
              ({
                full_name,
                html_url,
                id,
                name,
                stargazers_count,
                language,
                owner: { login, avatar_url, html_url: url },
              }) => (
                <tr key={id}>
                  <td>
                    <div className="widget-26-repo-emp-img">
                      {avatar_url && <img src={avatar_url} alt="avatar" />}
                    </div>
                  </td>
                  <td>
                    <div className="widget-26-repo-title">
                      <a href={html_url}>{full_name}</a>
                    </div>
                  </td>
                  <td>
                    <div className="widget-26-repo-info">
                      <p className="type m-0">{name}</p>
                    </div>
                  </td>
                  <td>
                    <div className="widget-26-repo-title">
                      <a href={url}>{login}</a>
                    </div>
                  </td>
                  <td>
                    {language && (
                      <div className="widget-26-repo-category bg-soft-base">
                        <i className="indicator bg-base"></i>
                        <span>{language}</span>
                      </div>
                    )}
                  </td>
                  <td>
                    {stargazers_count && (
                      <div className="widget-26-repo-starred" data-test-id>
                        {stargazers_count}
                        <a href="#">
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
                            className="feather feather-star"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                          </svg>
                        </a>
                      </div>
                    )}
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
