import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./css/style.css";
import Navbar from "./components/navbar";
import Home from "./components/home";
import ActorsContainer from "./components/actorsContainer";
import Actress from "./components/actress";
import Films from "./components/films";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar title="Oscars 201995" />
          <Navbar title="Oscars 2019" />
          <Navbar title="Oscars 2019bigfeature" />
          <Route exact path="/" render={() => <Home title="Oscar Winners" />} />
          <Route
            path="/actors"
            render={() => <ActorsContainer title="Best Actors" />}
          />
          <Route
            path="/actress"
            render={() => <Actress title="Best Actresses" />}
          />
          <Route path="/films" render={() => <Films title="Best films" />} />
          {/*</Route><Home title="Oscar Winners" />*/}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
