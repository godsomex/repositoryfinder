import React from "react";

function Table() {
  return (
    <div className="result-body">
      <div class="table-responsive">
        <table class="table widget-26">
          <tbody>
            <tr>
              <td>
                <div class="widget-26-repo-emp-img">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar5.png"
                    alt="Company"
                  />
                </div>
              </td>
              <td>
                <div class="widget-26-repo-title">
                  <a href="#">React Repo</a>
                  <p class="m-0">
                    <a href="#" class="repo-name">
                      Facebook
                    </a>
                    <span class="text-muted time">
                      last commit date: 23hrs ago
                    </span>
                  </p>
                </div>
              </td>
              <td>
                <div class="widget-26-repo-info">
                  <p class="type m-0">Godspower Omenihu</p>
                </div>
              </td>
              <td>
                <div class="widget-26-repo-issues">issues: 200</div>
              </td>
              <td>
                <div class="widget-26-repo-category bg-soft-base">
                  <i class="indicator bg-base"></i>
                  <span>Javascript</span>
                </div>
              </td>
              <td>
                <div class="widget-26-repo-starred">
                  3{" "}
                  <a href="#">
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
                      class="feather feather-star"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  </a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
