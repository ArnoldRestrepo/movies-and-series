import React from "react";

// Componente del Formulario de Búsqueda
class Form extends React.Component {
  render() {
    return (
      <form className="MovieHomeForm" onSubmit={this.props.onSubmit}>
        <input
          className="MovieHomeForm-search"
          type="text"
          name="SearchQuery"
          placeholder="Ingresa tu búsqueda"
          onChange={this.props.onChange}
          required
        />
        <div className="MovieHomeForm-checkboxes">
          <label htmlFor="">
            <input type="radio" name="type" value="Serie" />
            Por Serie
          </label>
          <label htmlFor="">
            <input type="radio" name="type" value="Movie" />
            Por Película
          </label>
        </div>
        <button className="btn btn-primary" onSubmit={this.props.onSubmit}>
          Buscar
        </button>
      </form>
    );
  }
}

export default Form;
