import React from "react";

class SearchListItem extends React.Component {
  render() {
    return (
      <div>
        <h4>Título: {this.props.result.title}</h4>
      </div>
    );
  }
}

class SearchList extends React.Component {
  render() {
    if (this.props.results !== null) {
      return (
        <section className="SearchList">
          <article className="SearchLstGrid">
            {this.props.results.map(Result => {
              return (
                <div key={Result.imdbID} className="SearchList-item">
                  <SearchListItem result={Result} />
                </div>
              );
            })}
          </article>
        </section>
      );
    } else {
      return <h2>No se han encontrado resultados...</h2>;
    }
  }
}

export default SearchList;
