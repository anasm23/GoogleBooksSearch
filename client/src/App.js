import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header/index'
import Wrapper from "./components/Wrapper";
import NoMatch from "./pages/NoMatch";
import Search from "./pages/Search";
import savedBooks from "./pages/Savedbooks";
import { Container } from "./components/Grid";

function App() {
  return (
    <Router>
      <Container>
    <Navbar/>
    <Header/>
    <Wrapper>
            <Route exact path="/" component={Search} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/saved" component={savedBooks} />
            <Route exact path="/noMatch" component={NoMatch} />
    </Wrapper>
    </Container>
    </Router>
  );
}


export default App;
