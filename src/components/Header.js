import { Link } from 'react-router-dom';

import '../styles/header.scss';

export function Header() {
  return (
    <div id="component-header">
      <Link to="/">
        <h2>Home</h2>
      </Link>
      <Link to="/about">
        <h2>Sobre</h2>
      </Link>
      <Link to="/projects">
        <h2>Projetos</h2>
      </Link>
      <Link to="/certificates">
        <h2>Certificados</h2>
      </Link>
      <Link to="/hackathon">
        <h2>Hackathon</h2>
      </Link>
      <Link to="/contact">
        <h2>Contato</h2>
      </Link>
    </div>
  );
}