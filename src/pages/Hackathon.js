import {Header} from '../components/Header.js';
import nlw from '../assets/images/hackathon-nlw.jpeg';
import nasa from '../assets/images/hackathon-nasa.jpeg';
import nodeJsWa from '../assets/images/CapaNodeJSWa.jpg';

import '../styles/hackathon.scss';

export function Hackathon() {
  return (
    <div >
      <Header />
      <div id="page-hackathon">
        <div id="items">
          <div className="item"><img src={nlw} alt='nlw'/></div>
          <div className="item"><img src={nasa} alt='nasa'/></div>
          <div className="item"><img src={nodeJsWa} alt='nodeJsWa'/></div>
        </div>
      </div>
    </div>
  )
}
