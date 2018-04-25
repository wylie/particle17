import React from "react";
import PropTypes from "prop-types";

import "./_index.css";

const Wrapper = ({ }) => {
  return (
    <div class="wrap">
        <div class="wrap-side wrap-side--left">
          <ul class="side">
            <li class="side-item">
              <img class="img--thumb" src="img/t-01.jpg" name="image" alt="" />
            </li>
            <li class="side-item">
              <img class="img--thumb" src="img/t-02.jpg" name="image" alt="" />
            </li>
          </ul>
        </div>
        <div class="wrap-side wrap-side--right">
          <nav>
            <ul class="nav">
              <li class="nav-item">
                <img class="img" src="img/nav/title.png" alt="" />
              </li>
              <li class="nav-item">
                <img class="img" src="img/nav/illustration-art.png" alt="" />
              </li>
              <li class="nav-item">
                <img class="img" src="img/nav/contact.png" alt="" />
              </li>
              <li class="nav-item">
                <img class="img" src="img/nav/drawger.png" alt="" />
              </li>
            </ul>
          </nav>
          <div class="img-wrap">
            <img class="img" src="img/01.jpg" id="mainImg" alt="" name="image" />
          </div>
        </div>
      </div>
  );
};

Wrapper.displayName = "Wrapper";

Wrapper.propTypes = {
  href: PropTypes.string,
  title: PropTypes.string
};

export default Wrapper;
