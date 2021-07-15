import '../styles/projectsComponents.scss';

import trybe from '../assets/images/trybe.png';

export function Trybe() {
  return (
    <div id="component-projects">
      <div className="img-project">
        <img className="img" src={trybe} alt='trybe'/>
      </div>
      <div className="about-project">
        <h2>Projetos Realizados ao longo do Curso</h2>
        <h3>
          🚧🚧 Divulgação dos projetos em construção...🚀🚀 🚧🚧

          O curso da Trybe foi ministrado com mais de 1.500 horas de formação que abordou conteúdos relacionados a fundamentos de desenvolvimento web, desenvolvimento Front-end, desenvolvimento Back-end, ciência da computação, engenharia de software, metodologias ágeis e habilidades comportamentais.

          As principais habilidades técnicas foram Javascript, Node, Git, HTML, Express.js, Python, CSS, SQL, ORM, React, NoSQL, Algoritmos e estrutura de dados.

          Ao longo do curso foi realizado vários projetos que sera divulgado em breve.
        </h3>
      </div> 
    </div>
  );
}