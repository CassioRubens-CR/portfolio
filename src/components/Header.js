import { Link } from 'react-router-dom';

import '../styles/header.scss';

export function Header() {
  return (
    <div id="component-header">
      <Link to="/portfolio">
        <h2>Home</h2>
      </Link>
      <Link to="/portfolio/about">
        <h2>Sobre</h2>
      </Link>
      <Link to="/portfolio/projects">
        <h2>Projetos</h2>
      </Link>
      <Link to="/portfolio/certificates">
        <h2>Certificados</h2>
      </Link>
      <Link to="/portfolio/hackathon">
        <h2>Hackathon</h2>
      </Link>
      <Link to="/portfolio/contact">
        <h2>Contato</h2>
      </Link>
    </div>
  );
}