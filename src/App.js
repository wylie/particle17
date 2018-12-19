import React, { Component } from 'react';

import Heading from "./components/heading";
import Nav from "./components/nav";
import ThumbList from "./components/thumbList";
import Content from "./components/content";
import Footer from "./components/footer";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div />
        <div className="App_item">
          <Heading children="Heading" />
          <Nav children="Nav" />
          <div className="App_content">
            <ThumbList className="App_thumb" children="Thumb List" />
            <Content className="App_image" children="Content" />
          </div>
          <Footer children="Footer" />
        </div>
        <div />
      </div>
    );
  }
}

export default App;
