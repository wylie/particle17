import React from 'react';
import PropTypes from "prop-types";

import './_index.css';

const Heading = ({ children }) => {
  return (
    <div className="Heading">
      {children}
    </div>
  );
}

Heading.propTypes = {
  children: PropTypes.string
};

Heading.defaultProps = {};

export default Heading;
