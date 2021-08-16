import styled from "styled-components";

import "./reset.css";

import back from "./assets/back.gif";
import left from "./assets/left.gif";
import right from "./assets/right.gif";

export const Wrap = styled.div`
  width: 700px;
  margin: 0 auto 0;
  `;
  
export const Back = styled.div`
  width: 700px;
  height: 525px;
  background: url(${back}) no-repeat;
  margin-top: 50px;
`;

export const Anchor = styled.a`
  &.illustration {
    width: 354px;
  }
  &.comix {
    width: 346px;
  }
  ${Back} & {
    height: 421px;
    display: block;
    float: left;
    margin-top: 104px;
    position: relative;
    overflow: hidden;
    cursor: pointer;
  }
`;

export const ImageWrap = styled.span`
  ${Anchor}.illustration & {
    background: url(${left}) no-repeat;
    left: 303px;
  }
  ${Anchor}.comix & {
    background: url(${right}) no-repeat;
    right: 296px;
  }
  ${Anchor} & {
    display: none;
    width: 101px;
    height: 101px;
    display: block;
    position: absolute;
    top: 50px;
  }
`;