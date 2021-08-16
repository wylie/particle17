import styled from "styled-components";

import "./reset.css";

import back from "./assets/back.gif";
import left from "./assets/left.gif";
import leftBoxOff from "./assets/leftBoxOff.gif";
import leftBoxOn from "./assets/leftBoxOn.gif";
import right from "./assets/right.gif";
import rightBoxOff from "./assets/rightBoxOff.png";
import rightBoxOn from "./assets/rightBoxOn.png";

export const Wrap = styled.div`
  width: 700px;
  margin: 0 auto 0;
  `;
  
export const Back = styled.div`
  display: flex;
  width: 700px;
  height: 525px;
  margin-top: 50px;
  background: url(${back}) no-repeat;
`;

export const Anchor = styled.a`
  &.illustration {
    width: 354px;
  }
  &.comix {
    width: 346px;
  }
  ${Back} & {
    display: block;
    height: 100%;
    width: 50%;
    cursor: pointer;
  }
`;

export const ImageWrap = styled.span`
  ${Anchor} & {
    display: none;
    width: 101px;
    height: 101px;
    display: block;
    position: absolute;
    top: 50px;
  }
  ${Anchor} & {
    background: url(${leftBoxOff}) no-repeat;
    left: 303px;
  }
  ${Anchor} & {
    background: url(${rightBoxOff}) no-repeat;
    right: 296px;
  }
`;