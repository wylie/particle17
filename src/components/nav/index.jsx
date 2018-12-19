import React from "react";
import PropTypes from "prop-types";

import { nav } from "../../assets/data/nav.js";

import "./_index.css";

const Nav = () => {
  return (
    <ul className="Nav">
      {nav.items.map((item, index) => (
        <li key={index}><a href="#">{item}</a></li>
      ))}
    </ul>
  );
}

Nav.propTypes = {
  className: PropTypes.string
};

Nav.defaultProps = {};

export default Nav;
