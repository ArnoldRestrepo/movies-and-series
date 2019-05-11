import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import "./css/Search.css";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      res: null,
      apiKey: "80f358e6"
    };
  }

  handleChange = e => {
    this.setState({
      query: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    fetch(
      `http://www.omdbapi.com/?apikey=${this.state.apiKey}&s=${
        this.state.query
      }`
    ).then(response => {
      response.json().then(data =>
        this.setState({
          res: data
        })
      );
    });
    console.log(this.state.res);
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
          <form className="MovieHomeForm" onSubmit={this.handleSubmit}>
            <input
              className="MovieHomeForm-search"
              type="text"
              name="SearchQuery"
              placeholder="Ingresa tu búsqueda"
              onChange={this.handleChange}
              required
            />
            <div className="MovieHomeForm-checkboxes">
              <label htmlFor="">
                <input
                  type="radio"
                  onChange={this.handleChange}
                  name="type"
                  value="Serie"
                />
                Por Serie
              </label>
              <label htmlFor="">
                <input
                  type="radio"
                  onChange={this.handleChange}
                  name="type"
                  value="Movie"
                />
                Por Película
              </label>
            </div>
            <button className="btn btn-primary" onSubmit={this.handleSubmit}>
              Buscar
            </button>
          </form>
        </main>
      </React.Fragment>
    );
  }
}

export default Search;
