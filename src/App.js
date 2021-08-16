import { Wrap, Back, Anchor, ImageWrap } from "./styled.js";

const App = ({ children, wrap }) => (
  <Wrap wrap="true">
    <Back>
      <Anchor href="http://www.fisherillustration.com" class="illustration">
        <ImageWrap />
      </Anchor>
      <Anchor href="http://www.particle17.com" class="comix">
        <ImageWrap />
      </Anchor>
    </Back>
  </Wrap>
);

export default App;
