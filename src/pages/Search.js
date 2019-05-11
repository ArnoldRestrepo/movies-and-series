import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import "./css/Search.css";

class Search extends React.Component {
  state = {
    query: {
      search: "",
      serie: false,
      movie: false
    }
  };

  handleChange = e => {
    console.log(e.target.value);

    if (e.target.value.lenght >= 3) {
      debugger;
      this.history.push("/SearchList");
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("No se envío");
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
