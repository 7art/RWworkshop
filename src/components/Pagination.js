import React from "react";

const Pagination = (props) => {
  const { pageNumber, totalPages, updatePageNumber } = props;

  let disabledPrev = pageNumber === 1 ? "disabled" : " ";
  let disabledNext = pageNumber === totalPages ? "disabled" : " ";
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <li className={`page-item ${disabledPrev}`}>
          <a
            className="page-link"
            href="#"
            onClick={() => {
              updatePageNumber(pageNumber - 1);
            }}
          >
            Prev
          </a>
        </li>
        {/* <li className="page-item">
          <a className="page-link" href="#">
            1
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            3
          </a>
  </li>*/}
        <li className={`page-item ${disabledNext}`}>
          <a
            className="page-link"
            href="#"
            onClick={() => {
              updatePageNumber(pageNumber + 1);
            }}
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
