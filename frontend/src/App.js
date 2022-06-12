import React, { Component }  from 'react';

import Header from "./layout/header/Header.js";
import MovieBar from "./layout/movieBar/MovieBar.js";
import MovieView from "./layout/movieView/MovieView.js";
import Footer from "./layout/footer/Footer.js";

import "./App.scss"



function App() {
  return (
    <div className="App">
      <Header></Header>
      <MovieBar></MovieBar>
      <MovieView></MovieView>
      <Footer></Footer>
      <div class="text-block">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
    </div>
  );
}

export default App;
