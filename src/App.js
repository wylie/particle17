import { Wrap, Back, Anchor, ImageWrap } from "./styled.js";

const App = ({ children, wrap }) => (
  <Wrap>
    <Back>
      <Anchor href="http://www.fisherillustration.com" class="illustration">
        <ImageWrap data-element="poop" class="poop" />
      </Anchor>
      <Anchor href="http://www.particle17.com" class="comix">
        <ImageWrap data-element="turd" class="turd" />
      </Anchor>
    </Back>
  </Wrap>
);

export default App;
