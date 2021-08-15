import styled from "styled-components";

import "./reset.css";

import back from "./img/back.gif";
import left from "./img/left.gif";
import right from "./img/right.gif";

export const StyledDiv = styled.div`
  width: 700px;
  margin: 0 auto 0;

  .back {
    width: 700px;
    height: 525px;
    background: url(${back}) no-repeat;
    margin-top: 50px;
  }

  .back .anchor {
    height: 421px;
    display: block;
    float: left;
    margin-top: 104px;
    position: relative;
    overflow: hidden;
    cursor: pointer;
  }

  /* .links {
    position: absolute;
    top: 154px;
    height: 421px;
  } */

  .anchor  .imagewrap {
    display: none;
    width: 101px;
    height: 101px;
    display: block;
    position: absolute;
    top: 50px;
  }

  .illustration {
    width: 354px;
  }

  .illustration .imagewrap {
    background: url(${left}) no-repeat;
    left: 303px;
  }

  .comix {
    width: 346px;
  }

  .comix .imagewrap {
    background: url(${right}) no-repeat;
    right: 296px;
  }
`;




