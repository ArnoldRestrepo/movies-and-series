import React from "react";

class SearchListItem extends React.Component {
  render() {
    return (
      <div>
        <h4>Título: {this.props.movie.Title} </h4>
      </div>
    );
  }
}

class SearchList extends React.Component {
  render() {
    if (this.props.data.Response === "False") {
      return <h2>No se encontro ningun resultado intenta de nuevo</h2>;
    }
    return (
      <section className="SearchList">
        <ul className="SearchListGrid">
          {this.props.data.Search.map(movie => {
            return (
              <li key={movie.imdbID} className="SearchList-item">
                <SearchListItem movie={movie} />
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

export default SearchList;
