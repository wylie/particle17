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
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;
  
export const Back = styled.div`
  display: flex;
  width: 700px;
  height: 525px;
  background: url(${back}) no-repeat;
`;

export const Anchor = styled.a`
  position: relative;
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

export const ImageWrap = styled.div`
  ${Anchor} & {
    display: none;
    display: block;
    position: absolute;
    top: 50px;
  }
  ${Anchor}.illustration:hover & {
    background: url(${leftBoxOn}) no-repeat;
    top: 271px;
    left: 149px;
    width: 42px;
    height: 39px;
  }
  ${Anchor}.comix:hover & {
    background: url(${rightBoxOn}) no-repeat;
    top: 238px;
    right: 126px;
    width: 135px;
    height: 125px;
  }
`;