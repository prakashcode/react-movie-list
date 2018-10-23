import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.scss";
import { Button } from "react-bootstrap";
import MovieList from "./MovieList";

class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <h2>Tech Task React Application - Movie List</h2>
        </header>

        <MovieList />

      </div>
    );
  }
}

export default App;
