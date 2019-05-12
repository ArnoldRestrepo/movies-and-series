import React from "react";
import Header from "../components/Header";
import SearchList from "../components/SearchList";
import Form from "../components/Form";
import "./css/Search.css";

class Search extends React.Component {
  // Inicializamos los estados del Componente de Busqueda
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      data: {
        Search: [],
        totalResults: "",
        Response: "",
        Error: ""
      },
      nextPage: 1,
      apiKey: "80f358e6",
      loading: false,
      error: null
    };
  }

  handleChange = e => {
    this.setState({
      query: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      data: {
        Search: [],
        totalResults: "",
        Response: "",
        Error: ""
      }
    });
    this.fetchSearch();
  };

  fetchSearch = async () => {
    this.setState({ loading: true, error: null });

    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${this.state.apiKey}&s=${
          this.state.query
        }&page=${this.state.nextPage}`
      );
      const data = await response.json();

      this.setState({
        loading: false,
        data: {
          Search: [].concat(this.state.data.Search, data.Search),
          totalResults: data.totalResults,
          Response: data.Response,
          Error: data.Error
        },
        nextPage: this.state.nextPage + 1
      });
    } catch (error) {
      this.setState({ error: error });
    }
  };

  render() {
    if (this.state.error) {
      return `Error: ${this.state.error.message}`;
    }
    return (
      <React.Fragment>
        <Header />
        <main className="MovieHome">
          <h2 className="MovieHome-title">
            Bienvenido al Buscador de Series y Películas #1 del{" "}
            <strong>Mercado</strong>
          </h2>
          <section className="MovieHome-description" />
          <Form onSubmit={this.handleSubmit} onChange={this.handleChange} />
          {this.state.loading && <div className="Loader">Cargando...</div>}
          <section className="MovieHome-results">
            {this.state.data.totalResults && (
              <span className="MovieHome-results-number">
                <strong>{this.state.data.totalResults}</strong> Resultados
                Econtrados
              </span>
            )}
            <SearchList data={this.state.data} />
            {this.state.data.totalResults > 0 && (
              <div className="LoadMore">
                <button
                  onClick={() => this.fetchSearch()}
                  className="btn btn-secondary"
                >
                  Cargar Más...
                </button>
              </div>
            )}
          </section>
        </main>
      </React.Fragment>
    );
  }
}

export default Search;
