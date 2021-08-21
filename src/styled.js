import styled,
{ createGlobalStyle } from "styled-components";

import navImg from "./assets/nav.png";
import frameImage from "./assets/frame.png";

export const GlobalStyle = createGlobalStyle`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,del,
  dfn,
  em,
  font,
  img,
  ins,
  kbd,
  q,
  s,
  samp,small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,b,
  u,
  i,
  center,dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';content: none;
  }
  :focus {
    outline: 0;
  }
  ins {
    text-decoration: none;
  }
  del {
    text-decoration: line-through;
  }
  table {
    border-collapse: collapse;border-spacing: 0;
  }
  html,
  body {
    background: #fff;
  }
  input, textarea {
    border: 2px solid #666 !important;
  }
  #root {
    display: flex;
    justify-content: center;
  }
`
export const Display = styled.div`
  position: absolute;
  top: 94px;
  left: 164px;
  width: 470px;
  height: 432px;
`;

export const ContactForm = styled.div`
  position: absolute;
  display: none;
  width: 470px;
  height: 432px;
`;

export const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
`;

export const Nav = styled.ul`
  position: absolute;
  top: 94px;
  left: 68px;
  width: 95px;
  height: 294px;
`;

export const NavItem = styled.li`
  height: 49px;
  cursor: pointer;
  text-indent: -999px;
  font-size: 0;
  &:hover {
    background-repeat: no-repeat;
    background-image: url(${navImg});
  }
  &[data-section="back"]:hover {
    background-position: 0 0;
  }
  &[data-section="back"]:hover {
    background-position: 0 -49px;
  }		
  &[data-section="chars"]:hover {
    background-position: 0 -98px;
  }		
  &[data-section="comix"]:hover {
    background-position: 0 -147px;
  }		
  &[data-section="cons"]:hover {
    background-position: 0 -196px;
  }		
  &[data-section="contact"]:hover {
    background-position: 0 -245px;
  }
`;

export const Wrap = styled.div`
  position: relative;
  width: 800px;
  height: 600px;
  margin-top: 2rem;
  background: url(${frameImage});
  box-shadow: 0 0 20px rgb(0,0,0);
  user-select: none;
`;

export const Image = styled.img``;
