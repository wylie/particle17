import { Wrap, Back, Anchor, ImageWrap } from "./styled.js";

import backgroundImg from "./assets/back.gif";

const App = ({ children, wrap }) => (
  <Wrap>
    <Back>
      <img src={backgroundImg} alt="" />
      <Anchor href="http://www.fisherillustration.com" class="illustration">
        <ImageWrap class="illustration" />
      </Anchor>
      <Anchor href="http://www.particle17.com" class="comix">
        <ImageWrap class="comix" />
      </Anchor>
    </Back>
  </Wrap>
);

export default App;
