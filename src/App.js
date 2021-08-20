import React, { Component, useState } from "react";

import { Anchor, Copy, Wrap, Sidebar, Content, Header, Title, Thumbs, Image, Nav, Popup} from "./styled.js";

import img1 from "./assets/1t.jpg";
import img2 from "./assets/2t.jpg";
import img3 from "./assets/3t.jpg";
import img4 from "./assets/4t.jpg";
import img5 from "./assets/5t.jpg";
import img6 from "./assets/6t.jpg";
import img7 from "./assets/7t.jpg";
import img8 from "./assets/8t.jpg";
import img9 from "./assets/9t.jpg";
import img10 from "./assets/10t.jpg";
import img11 from "./assets/11t.jpg";
import img12 from "./assets/12t.jpg";
import img13 from "./assets/13t.jpg";
import img14 from "./assets/14t.jpg";
import img15 from "./assets/15t.jpg";
import img16 from "./assets/16t.jpg";
import img17 from "./assets/17t.jpg";
import img18 from "./assets/18t.jpg";
import img19 from "./assets/19t.jpg";
import img20 from "./assets/20t.jpg";
import img21 from "./assets/21t.jpg";

const App = ({}) => {
  const [activeImage, setActiveImage] = useState(1);

  const handleClick = evt => {
    const { target } = evt;
    setActiveImage(target.id);
  }

  return (
    <Wrap>
        <Sidebar>
          <Thumbs>
            <Image alt="" onClick={handleClick} src={img1} id="1" />
            <Image alt="" onClick={handleClick} src={img2} id="2" />
            <Image alt="" onClick={handleClick} src={img3} id="3" />
            <Image alt="" onClick={handleClick} src={img4} id="4" />
            <Image alt="" onClick={handleClick} src={img5} id="5" />
            <Image alt="" onClick={handleClick} src={img6} id="6" />
            <Image alt="" onClick={handleClick} src={img7} id="7" />
            <Image alt="" onClick={handleClick} src={img8} id="8" />
            <Image alt="" onClick={handleClick} src={img9} id="9" />
            <Image alt="" onClick={handleClick} src={img10} id="10" />
            <Image alt="" onClick={handleClick} src={img11} id="11" />
            <Image alt="" onClick={handleClick} src={img12} id="12" />
            <Image alt="" onClick={handleClick} src={img13} id="13" />
            <Image alt="" onClick={handleClick} src={img14} id="14" />
            <Image alt="" onClick={handleClick} src={img15} id="15" />
            <Image alt="" onClick={handleClick} src={img16} id="16" />
            <Image alt="" onClick={handleClick} src={img17} id="17" />
            <Image alt="" onClick={handleClick} src={img18} id="18" />
            <Image alt="" onClick={handleClick} src={img19} id="19" />
            <Image alt="" onClick={handleClick} src={img20} id="20" />
            <Image alt="" onClick={handleClick} src={img21} id="21" />
          </Thumbs>
        </Sidebar>
        <Content>	
          <Header>
            <Title />
            <Copy />
            <Anchor href="mailto:mark@marksfisher.com" className="contact">
              <Nav>
              <Popup>Get in touch with me by email at mark@marksfisher.com</Popup>
              </Nav>
            </Anchor>
            <Anchor href="http://www.drawger.com/fisher/" className="drawger">
              <Nav>
                <Popup>A select group of illustrators showing and discussing their commercial and personal work. See a lot of my personal work.</Popup>
              </Nav>
            </Anchor>
          </Header>
          <Image src={require(`./assets/${activeImage}.jpg`).default} alt="" className="bigImg" />
        </Content>
      </Wrap>
  )
};

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       value: 1
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick(val) {
//       this.setState({
//         value: val
//       });
//   }

//   render() {
//     return (
//       <Wrap>
//         <Sidebar>
//           <Thumbs>
//             <Image alt="" onClick={(e) => { this.handleClick(20)} } src={img20} />
//             <Image alt="" onClick={this.handleClick(21)} src={img21} />
//           </Thumbs>
//         </Sidebar>
//         <Content>	
//           <Header>
//             <Title />
//             <Copy />
//             <Anchor href="mailto:mark@marksfisher.com" className="contact">
//               <Nav>
//               <Popup>Get in touch with me by email at mark@marksfisher.com</Popup>
//               </Nav>
//             </Anchor>
//             <Anchor href="http://www.drawger.com/fisher/" className="drawger">
//               <Nav>
//                 <Popup>A select group of illustrators showing and discussing their commercial and personal work. See a lot of my personal work.</Popup>
//               </Nav>
//             </Anchor>
//           </Header>
//           <Image src={require(`./assets/${this.state.value}.jpg`).default} alt="" className="bigImg" />
//         </Content>
//       </Wrap>
//     )
//   }
// };

export default App;
