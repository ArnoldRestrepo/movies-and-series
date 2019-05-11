// Import Librery
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Importamos Componentes para el Router
import Search from "../pages/Search";
import NotFound from "../components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Search} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
