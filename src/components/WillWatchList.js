import React from "react";

const WillWatchList = ({ moviesWillWatch }) => {
  return (
    <ul className="list-group">
      {moviesWillWatch.map((item) => {
        return (
          <li key={item.id} className="list-group-item">
            {item.title}
          </li>
        );
      })}
    </ul>
  );
};

export default WillWatchList;
