import { Wrap, Back, Anchor, ImageWrap } from "./styled.js";

const App = ({ children, wrap }) => (
  <Wrap>
    <Back>
      <Anchor href="http://www.fisherillustration.com" class="illustration">
        <ImageWrap data-element="poop" className="poop" />
      </Anchor>
      <Anchor href="http://www.particle17.com" class="comix">
        <ImageWrap data-element="turd" className="turd" />
      </Anchor>
    </Back>
  </Wrap>
);

export default App;
