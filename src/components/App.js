// Import Librery
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Import Components
import Search from "../pages/Search";
import SearchList from "../pages/SearchList";
import NotFound from "../components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/search" component={SearchList} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
