import { Link } from 'react-router-dom';
import cassio from '../assets/images/Cassio.jpeg';

import '../styles/home.scss';

export function Home() {

  return (
    <div id="page-home">
      <div className="name-and-presentation">
        <img
          className="img-cassio"
          src={cassio}
          alt='cassio'
        />
        <h2>Olá, meu nome é Cássio Rubens.</h2>
        <h3>Sou desenvolvedor Full Stack júnior e moro em Belo Horizonte - MG</h3>
      </div>

      <div className="buttons-home">
        <Link to="/about">
          <button
            type="button"
            className="button-home"
          >
            Sobre
          </button>
        </Link>
        <Link to="/projects">
          <button type="button" className="button-home">
            Projetos
          </button>
        </Link>
        <Link to="/hackathon">
          <button type="button" className="button-home">
            Hackathon
          </button>
        </Link>
        <Link to="/certificates">
          <button type="button" className="button-home">
            Certificados
          </button>
        </Link>
        <Link to="/contact">
          <button type="button" className="button-home">
            Contato
          </button>
        </Link>
      </div>
    </div>
  )
}
