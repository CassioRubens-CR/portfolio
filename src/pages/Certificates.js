import {Header} from '../components/Header.js';
import conclusion from '../assets/images/CertificadoConclusão.png';
import modulo01 from '../assets/images/Modulo01FundamentosDoDesenvolvimentoWeb.jpg';
import modulo02 from '../assets/images/Modulo02DesenvolvimentoFront-End.jpg';
import modulo03 from '../assets/images/Modulo03DesenvolvimentoBack-End.jpg';
import modulo04 from '../assets/images/Modulo04CiênciaDaComputação.jpg';
import arrow from '../assets/images/icons8-direita.gif'

import '../styles/certificates.scss';

export function Certificates() {
  return (
    <div>
      <Header />
      <div id="page-certificates">
        <div id="items">
          <div className="item"><img src={conclusion} alt='conclusion'/></div>
          <div className="item"><img src={modulo01} alt='modulo01'/></div>
          <div className="item"><img src={modulo02} alt='modulo02'/></div>
          <div className="item"><img src={modulo03} alt='modulo03'/></div>
          <div className="item"><img src={modulo04} alt='modulo03'/></div>
        </div>
        <div className="arrowGif">
          <img src={arrow} alt='seta'/>
        </div>
      </div>
    </div>
  )
}
