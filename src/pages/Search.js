import React from "react";
import Header from "../components/Header";
import SearchList from "../pages/SearchList";
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
    this.fetchSearch();
  };

  fetchSearch = async () => {
    this.setState({ loading: true, error: null });

    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${this.state.apiKey}&s=${
          this.state.query
        }`
      );
      const data = await response.json();

      this.setState({
        loading: false,
        data: data
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
          <span>
            {this.state.data.totalResults || 0} Resultados Encontrados
          </span>
          <SearchList data={this.state.data} />
        </main>
      </React.Fragment>
    );
  }
}

export default Search;
