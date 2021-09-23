import '../styles/projectsComponents.scss';

import trybe from '../assets/images/trybe.png';
import github from '../assets/images/icons8-github-50.png';

export function Trybe() {
  return (
    <div id="component-projects">
      <div className="img-project">
        <img className="img" src={trybe} alt='trybe'/>
      </div>
      <div className="about-project">
        <h2>Projetos desenvolvidos no curso de Formação em Desenvolvimento Web - Trybe</h2>
        <h3>Repositório com 40 Projetos desenvolvidos no curso de Formação em Desenvolvimento Web</h3>
        <h3>Full Stack | JavaScript | ReactJS | NodeJS | Python | MySQL | Mongo</h3>
        <h3>
          Curso com duração mínima de 12 meses e carga horária compreendida com cerca de 1.500 horas.

          Durante este período, aprofundou-se e aplicou de forma prática conteúdos como Fundamentos do Desenvolvimento Web, Desenvolvimento Front-End, Desenvolvimento Back-End, Ciência da Computação e Soft Skills.

          Os projetos aqui desenvolvidos, foram de caráter obrigatório e avaliativo para conclusão de cada módulo. Esclarecemos ainda, que para aprovação de cada projeto, foi exigido o cumprimento de no mínimo 80%(oitenta por cento) dos requisitos obrigatórios (regra de negócio), sendo tais requisitos descrito no Readme de cada projeto.
        </h3>
        <button type='button'>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/CassioRubens-CR/projects-developed-in-trybe">
            <img className="imgbutton" src={github} alt='github'/>
            Repositório
          </a>
        </button>
      </div> 
    </div>
  );
}