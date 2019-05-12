import React from "react";
import "./css/SearchList.css";

class SearchListItem extends React.Component {
  render() {
    return (
      <React.Fragment>
        <img
          src={this.props.movie.Poster}
          alt={this.props.Title}
          className="responsive"
        />
        <div className="SearchList-item-info">
          <h3>Título: {this.props.movie.Title} </h3>
          <h4>Año: {this.props.movie.Year}</h4>
          <a href="/" className="ShowDetails">
            Ver Detalles
          </a>
        </div>
      </React.Fragment>
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
        <article className="SearchListGrid">
          {this.props.data.Search.map(movie => {
            return (
              <div key={movie.imdbID} className="SearchList-item">
                <SearchListItem movie={movie} />
              </div>
            );
          })}
        </article>
      </section>
    );
  }
}

export default SearchList;
