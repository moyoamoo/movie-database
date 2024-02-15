import React, { Component } from "react";
import Interface from "./Components/Interface";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <header>
          <Header />
        </header>
        <main>
          <Interface />
        </main>
        <footer><Footer/></footer>
      </>
    );
  }
}

export default App;
