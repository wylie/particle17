import { Wrap, Back, Anchor, ImageWrap } from "./styled.js";

const App = ({ children, wrap }) => (
  <Wrap>
    <Back>
      <Anchor href="http://www.fisherillustration.com" className="illustration" target="_blank">
        <ImageWrap className="illustration" />
      </Anchor>
      <Anchor href="http://www.particle17.com" className="comix" target="_blank">
        <ImageWrap className="comix" />
      </Anchor>
    </Back>
  </Wrap>
);

export default App;
