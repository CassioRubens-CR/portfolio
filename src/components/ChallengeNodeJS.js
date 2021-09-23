import '../styles/projectsComponents.scss';

import capaNodeJSWa from '../assets/images/CapaNodeJSWa.jpg';
import github from '../assets/images/icons8-github-50.png';
import heroku from '../assets/images/icons8-heroku-64.png';

export function ChallengeNodeJS() {
  return (
    <div id="component-projects">
      <div className="img-project">
        <img className="img" src={capaNodeJSWa} alt='capaNodeJSWa'/>
      </div>
      <div className="about-project">
        <h2>Projeto CRUD laboratórios e exames</h2>
        <h3>
          Projeto desenvolvido com as tecnologias  JavaScript, NodeJS, MySQL, Sequelize, Knexjs, Express, Nodemon, Dontenv, Insomnia, node-postgres, Heroku. 

          A aplicação busca cadastrar, obter uma lista de ativos, atualizar, remover logicamente laboratórios e exames, além de realizar associação/desassociação entre exame e laboratório. 
          O cadastro pode ser realizado por item ou em lote.
          
          Dentro das opções de busca destaca por laboratório, apresentando os exames associados e a busca do exame pelo nome, retornando os laboratórios associados. 
          
          Os métodos utilizados foram os GET, POST, PUT, PATCH, DELETE.
          
          Ressalto ainda que oda aplicação foi de acordo com os princípios RESTFul.
          
          Sinta a vontade para verificar a publicação em um serviço cloud de hospedagens (Heroku), ou acessar o código no GitHub, clicando no botão abaixo.
        </h3>
        <button type='button'>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/CassioRubens-CR/Challenge-NodeJS-WA-Project">
            <img className="imgbutton" src={github} alt='github'/>
            Repositório
          </a>
        </button>
        <button type='button'>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://pacific-retreat-64515.herokuapp.com/laboratories">
            <img className="imgbutton" src={heroku} alt='heroku'/>
            Deploy
          </a>
        </button>
      </div> 
    </div>
  );
}