import {Header} from '../components/Header.js';

import github from '../assets/images/icons8-github-50.png';
import gmail from '../assets/images/icons8-gmail-48.png';
import linkedin from '../assets/images/icons8-linkedin-48.png';
import whatsapp from '../assets/images/icons8-whatsapp-48.png';

import '../styles/contact.scss';

export function Contact() {
  return (
    <div>
      <Header />
      <div id="page-contact">
        <h1>Entre em contato</h1>
        <p className="text-contact">
          Se chegou ate aqui me sinto orgulhoso e acredito que gostou do conteúdo, fique a vontade para entrar em contato.
        </p>
        <p className="text-contact">
          Estou a disposição para feedback, duvidas, elogios, sugestões, troca de conhecimentos e critica construtiva, todos os contatos são bem vindo.
        </p>
        <p className="text-contact">
          Atenciosamente, Cássio Rubens.
        </p>
        <div className="items">
          <div className="item">
            <a
              target="_blank" 
              rel="noopener noreferrer"
              href="https://github.com/CassioRubens-CR">
              <img src={github} alt='github'/>
            </a>
            <a
              target="_blank" 
              rel="noopener noreferrer"
              href="mailto:cassiorubensadv@gmail.com">
              <img src={gmail} alt='gmail'/>
            </a>
            <a 
              target="_blank" 
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/c%C3%A1ssio-rubens/">
              <img src={linkedin} alt='linkedin'/>
            </a>
            <a
              target="_blank" 
              rel="noopener noreferrer"
              href="https://api.whatsapp.com/send?phone=553185359054">
              <img src={whatsapp} alt='whatsapp'/>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
