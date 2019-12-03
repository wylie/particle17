import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import { Helmet } from "react-helmet";

import Heading from "./components/heading";
import Nav from "./components/nav";
import Footer from "./components/footer"; 

import { nav } from "./assets/data/nav.js";

import './app.scss';

class App extends Component {

  render() {
    const name = "Mark S. Fisher";
    const routesComponents = nav.map(item =>
        <Route strict path={item.url} key={item.text} component={item.component} />
    );
    console.log(routesComponents)
    return (
      <Router>
      <div className="App">
        <Helmet className="App_title" title={name} />
        <div className="App_item">
          <Link to="/">
            <Heading children={name} />
          </Link>
          <Nav children="Nav" />
          <div className="App_content">
              {routesComponents}
          </div>
          <Footer children={`© 2019 ${name}`} />
        </div>
        <div />
      </div>
      </Router>
    );
  }
}

export default App;
