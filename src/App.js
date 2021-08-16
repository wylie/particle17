import { Wrap, Back, Anchor, ImageWrap } from "./styled.js";

const App = ({ children, wrap }) => (
  <StyledDiv wrap="true">
    <Back>
      <Anchor href="http://www.fisherillustration.com" class="illustration">
        <ImageWrap />
      </Anchor>
      <Anchor href="http://www.particle17.com" class="comix">
        <ImageWrap />
      </Anchor>
    </Back>
  </StyledDiv>
);

export default App;
