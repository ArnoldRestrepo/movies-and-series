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
      result: undefined,
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
    this.setState({ loading: true, error: null });
    fetch(
      `http://www.omdbapi.com/?apikey=${this.state.apiKey}&s=${
        this.state.query
      }`
    ).then(response => {
      response.json().then(data =>
        this.setState({
          result: data
        })
      );
    });
    console.log(this.state.result);
  };
  render() {
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
          <SearchList result={this.state.result} />
        </main>
      </React.Fragment>
    );
  }
}

export default Search;
