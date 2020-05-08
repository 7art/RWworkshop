import React from "react";

const MovieTabs = (props) => {
  const { sortBy, updateSortBy } = props;
  const handlerTabs = (value) => {
    return () => {
      updateSortBy(value);
    };
  };

  const getActiveLink = (value) => {
    return `nav-link ${sortBy === value ? "active" : ""}`;
  };

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <div
          className={getActiveLink("popularity.desc")}
          onClick={handlerTabs("popularity.desc")}
        >
          Popularity desc
        </div>
      </li>
      <li className="nav-item">
        <div
          className={getActiveLink("revenue.desc")}
          onClick={handlerTabs("revenue.desc")}
        >
          Revenue desc
        </div>
      </li>
      <li className="nav-item">
        <div
          className={getActiveLink("voteaverage.desc")}
          onClick={handlerTabs("voteaverage.desc")}
        >
          Vote avedrage desc
        </div>
      </li>
    </ul>
  );
};
export default MovieTabs;
