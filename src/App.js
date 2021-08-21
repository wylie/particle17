import React from 'react';

import { Wrap, Nav, Display, ContactForm, Iframe, NavItem, Image } from "./styled.js";

import MainImage from "./assets/characters/P17_robothead.jpg";

const App = () => (
  <Wrap data-element="wrap">
    <Nav data-element="nav">
      <NavItem data-section="next">next</NavItem>
      <NavItem data-section="back">back</NavItem>
      <NavItem data-section="chars">characters</NavItem>
      <NavItem data-section="comix">comics</NavItem>
      <NavItem data-section="cons">constructions</NavItem>
      <NavItem data-section="contact">contact</NavItem>
    </Nav>
    <Display data-element="display">
      <ContactForm data-element="contact-form">
        <Iframe src="http://wylie.wufoo.com/embed/r7x3s5/"><a href="http://wylie.wufoo.com/forms/r7x3s5/" title="Mark S Fisher" rel="nofollow">Fill out my Wufoo form!</a></Iframe>
      </ContactForm>
      <Image data-element="image" src={MainImage} />
    </Display>
  </Wrap>
);

export default App;
