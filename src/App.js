import React from "react";
import './App.css';
import Header from './components/Header';
import './components/Search.css';
import './components/MoviesDisplay.css';
import Search from "./components/Search";

import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import MoviesDetailsPage from "./components/MoviesDetailsPage";
// simport PlaceMovie from "./components/PlaceMovie";

const App = () => {

  return (
    // <div className="App">
    //   <Header />
    //   <Search />
    // </div>
    <Router>
    <div className="App">
      <Header />
      <Search/>
      <Routes>
        <Route path="/" element={<Search/>} />
        <Route path="/movies" element={<Search />} />
        <Route path="/movies/:id" element={<MoviesDetailsPage/>} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
