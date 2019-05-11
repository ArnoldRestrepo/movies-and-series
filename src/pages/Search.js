import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

class Search extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <main className="MovieHome">
          <section className="MovieHome-description" />
          <form action="" className="MovieHomeForm">
            <input type="text" placeholder="Ingresa tu búsqueda" />
            <div className="MovieHome">
              <label htmlFor="">
                <input type="checkbox" /> Filtrar por Serie
              </label>
              <label htmlFor="">
                <input type="checkbox" /> Filtrar por Película
              </label>
            </div>
          </form>
        </main>
      </React.Fragment>
    );
  }
}

export default Search;
