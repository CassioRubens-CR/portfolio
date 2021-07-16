import { Header } from '../components/Header.js';
import cassio from '../assets/images/Cassio.jpeg';

import github from '../assets/images/icons8-github-48.png';
import react from '../assets/images/icons8-react-40.png';
import js from '../assets/images/icons8-javascript-48.png';
import nodejs from '../assets/images/icons8-nodejs-64.png';
import html from '../assets/images/icons8-html-5-48.png';
import css3 from '../assets/images/icons8-css3-48.png';
import backend from '../assets/images/icons8-backend-48.png';
import python from '../assets/images/icons8-python-48.png';
import git from '../assets/images/icons8-git-50.png';
import mongodb from '../assets/images/icons8-mongodb-48.png';
import sql from '../assets/images/icons8-sql-48.png';
import mysql from '../assets/images/icons8-logo-mysql-48.png';

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
        <div className="text-about">
          <h1>Cássio Rubens</h1>
          <p className="text-about-p">
            Cada passo na área de tecnologia é uma conquista, trabalhar em equipe, compartilhar conhecimento, soft skills, resolver problemas, certamente são grandes pilares que fazem parte da vida de um desenvolvedor em busca de evoluir cada dia, o que me permite resumir os meus objetivos.
          </p>
          <br />
          <p className="text-about-p">
            Sou formado em Direito onde exerci por nove anos a profissão de Advogado e por sentir insatisfeito profissionalmente e possuir uma certa admiração pela área de tecnologia resolvi fazer transição de carreira.
          </p>
          <br />
          <p className="text-about-p">
            Conclui o curso desenvolvimento software Full Stack na Trybe ministrado com mais de 1000 horas, abordando Front-end, Back-end, engenharia de software e metodologias agile. No decorrer do curso foram abordada as seguintes tecnologias:
            Git - Github - Javascript - Python - FrontEnd (HTML, CSS, ReactJS) - BackEnd (NodeJS, MongoDB, SQL, MySQL, ExpressJS) - Unit-tests, Principios SOLID - DDD - TDD.
          </p>
          <br />
          <p className="text-about-p">
            Desde então, busco a cada dia minha melhor versão.
          </p>
          <div className="icon-about">
              <img src={js} alt='js'/>
              <img src={react} alt='react'/>
              <img src={html} alt='html'/>
              <img src={css3} alt='css3'/>
              <img src={backend} alt='backend'/>
              <img src={nodejs} alt='nodejs'/>
              <img src={sql} alt='sql'/>
              <img src={mysql} alt='mysql'/>
              <img src={mongodb} alt='mongodb'/>
              <img src={python} alt='python'/>
              <img src={git} alt='git'/>
              <img src={github} alt='github'/>
          </div>
        </div>
      </div>
    </div>
  )
}
