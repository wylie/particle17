import { Wrap, Back, Anchor, ImageWrap } from "./styled.js";

const App = ({ children, wrap }) => (
  <Wrap>
    <Back>
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
