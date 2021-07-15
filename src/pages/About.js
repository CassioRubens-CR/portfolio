import {Header} from '../components/Header.js';
import cassio from '../assets/images/Cassio.jpeg';

import '../styles/about.scss';

export function About() {
  return (
    <div>
      <Header />
      <div id="page-about">
        <img
          className="img-cassio"
          src={cassio}
          alt='cassio'
        />
        <h1>Cássio Rubens</h1>
        <p>
          Cada passo na área de tecnologia é uma conquista, trabalhar em equipe, compartilhar conhecimento, soft skills, resolver problemas, certamente são grandes pilares que fazem parte da vida de um desenvolvedor em busca de evoluir cada dia, o que me permite resumir os meus objetivos.   
        </p>
        <p>
          Sou formado em Direito onde exerci por nove anos a profissão de Advogado e por sentir insatisfeito profissionalmente e possuir uma certa admiração pela área de tecnologia resolvi fazer transição de carreira.     
        </p>
        <p>
          Conclui o curso desenvolvimento software Full Stack na Trybe ministrado com mais de 1000 horas, abordando Front-end, Back-end, engenharia de software e metodologias agile. No decorrer do curso foram abordada as seguintes tecnologias:
          Git - Github - Javascript - Python - FrontEnd (HTML, CSS, ReactJS) - BackEnd (NodeJS, MongoDB, SQL, MySQL, ExpressJS) - Unit-tests, Principios SOLID - DDD - TDD.
        </p>
        <p>
          Desde então, busco a cada dia minha melhor versão.
        </p>
      </div>
    </div>
  )
}
