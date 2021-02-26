import React from "react";

const SearchResults = ({ results }) => {
  return (
    <ul className="list-group search-results">
      {results.map(result => (
        <div>
          <li key={result.login.uuid} className="list-group-item">
            <img
              alt={`${result.name.first} ${result.name.last}`}
              src={result.picture.large}
              className="img-fluid"
            />
            <h2>{`${result.name.first} ${result.name.last}`}</h2>
            <p>Email: {result.email}</p>
            <p></p>
            <p></p>
            <button className="btn btn-primary">See More</button>
          </li>
        </div>
      ))}
    </ul>
  );
};

export default SearchResults;
