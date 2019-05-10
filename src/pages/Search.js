import React from "react";
import { Link } from "react-router-dom";

class Search extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Hello I´m Search Page</h1>
        <Link to="/search">Search Movie And Serie</Link>
      </React.Fragment>
    );
  }
}

export default Search;
