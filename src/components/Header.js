import React from "react";
import { Link } from "react-router-dom";
import "./css/Header.css";

// Componente del Header
class Header extends React.Component {
  render() {
    return (
      <header className="Header">
        <Link className="Header-link" to="/">
          <h2 className="Header-logo">Movies & Series</h2>
        </Link>
      </header>
    );
  }
}

export default Header;
